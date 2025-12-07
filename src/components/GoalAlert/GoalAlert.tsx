import './GoalAlert.css'
import type { GoalAlertProps } from "../../type";

export default function GoalAlert({
  goalName,
  goalAmount,
  stats,
}: GoalAlertProps) {
  //Check the current goal to return the corresponding goal set by the user in Character Counter parent component.
  function matchGoal() {
    switch (true) {
      case goalName === "Min. Words":
        return goalAmount.minWords + " words";
      case goalName === "Max. Words":
        return goalAmount.maxWords + " words";
      case goalName === "Target Reading Time":
        return goalAmount.targetReadingTime + " ms";
      default:
        return "Select a goal.";
    }
  }
  //Check the current goal to return the corresponding stats values.
  function matchStats() {
    switch (true) {
      case goalName === "Min. Words" || goalName === "Max. Words":
        return stats.wordCount;
      case goalName === "Target Reading Time":
        return stats.readingTime;
      default:
        return "Select a goal.";
    }
  }

  //Check the current goal and the comparison between goal and current stats to set the color of text.
  function checkGoal(): string {
    switch (true) {
      case goalName === "Min. Words" && goalAmount.minWords !== undefined:
        return goalAmount.minWords <= stats.wordCount ? "green" : "red";
      case goalName === "Max. Words" && goalAmount.maxWords !== undefined:
        return goalAmount.maxWords <= stats.wordCount ? "green" : "red";
      case goalName === "Target Reading Time" &&
        goalAmount.targetReadingTime !== undefined:
        return goalAmount.targetReadingTime <= stats.readingTime
          ? "green"
          : "red";
      default:
        return "Select a goal.";
    }
  }

  //Check the current goal and if the corresponding goal is defined, (for TS), then return corresponding message for span.
  function isOverGoal() {
    switch (true) {
      case goalName === "Max. Words" && goalAmount.maxWords !== undefined:
        return goalAmount.maxWords < stats.wordCount
          ? "⚠You've met your word count!⚠"
          : false;
      case goalName === "Target Reading Time" &&
        goalAmount.targetReadingTime !== undefined:
        return goalAmount.targetReadingTime >= stats.readingTime
          ? "⚠You've met your reading goal!⚠"
          : false;
      default:
        "";
    }
  }

  return (
    <>
      <div className="goal-alert">
        <p className="goal-alert-name">Goal Alert | {goalName}</p>
        <p className='goal-alert-stats'> <b>Current Count:</b> {matchStats()} words</p>
        <p className='goal-alert-stats' style={{ color: `${checkGoal()}` }}> <b>Goal Count:</b> {matchGoal()}</p>
        <span className='goal-alert-over'>{isOverGoal()}</span>
      </div>
    </>
  );
}
