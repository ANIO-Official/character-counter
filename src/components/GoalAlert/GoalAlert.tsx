import type { GoalAlertProps } from "../../type";

export default function GoalAlert({ goalName, goalAmount, stats }: GoalAlertProps) {

    function matchGoal() {
        switch (true) {
            case goalName === "Min. Words":
                return goalAmount.minWords + ' words';
            case goalName === "Max. Words":
                return goalAmount.maxWords + ' words';
            case goalName === "Target Reading Time":
                return goalAmount.targetReadingTime + ' ms';
            default:
                return 'Select a goal.'
        }
    }
    function matchStats() {
        switch (true) {
            case goalName === "Min. Words" || goalName === "Max. Words":
                return stats.wordCount;
            case goalName === "Target Reading Time":
                return stats.readingTime;
            default:
                return 'Select a goal.'
        }
    }

    function checkGoal(): string {
        switch (true) {
            case goalName === "Min. Words" && goalAmount.minWords !== undefined:
                return goalAmount.minWords <= stats.wordCount ? 'green' : 'red'
            case goalName === "Max. Words"  && goalAmount.maxWords !== undefined:
                return goalAmount.maxWords <= stats.wordCount ? 'green' : 'red'
            case goalName === "Target Reading Time"  && goalAmount.targetReadingTime !== undefined:
                return goalAmount.targetReadingTime <= stats.readingTime ? 'green' : 'red'
            default:
                return 'Select a goal.'
        }
    }

    function isOverGoal(){
        switch (true){
            case goalName === "Max. Words" && goalAmount.maxWords !== undefined:
                return goalAmount.maxWords < stats.wordCount? "⚠You've met your word count!⚠": false;
            case goalName === "Target Reading Time" && goalAmount.targetReadingTime !== undefined:
                return goalAmount.targetReadingTime>= stats.readingTime? "⚠You've met your reading goal!⚠" : false 
            default: ''
        }
        }

    return (
        <>
            <div className="goal-alert">
                <h3 className="goal-alert-name">Goal Alert | {goalName}</h3>
                <p> Current Count: {matchStats()} words</p>
                <p style={{ color: `${checkGoal()}` }}> Goal Count: {matchGoal()}</p>
                <span>{isOverGoal()}</span>
            </div>
        </>
    )
}