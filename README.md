# Character Counter

_A React + TypeScript + Vite project focused on creating a writing helper tool that responds to user feedback and uses state management, event handling, and component interaction via React Hooks._

## Overview

The purpose of this project is to practice and build interactive features that respond to user input in real-time, a common requirement in modern web applications.

Users should be able to:

- Input text
- See real-time statistics including:

  1. Character Count
  2. Word Count
  3. Reading Time

### Built with

- REACT
- JSX
- Vue
- TypeScript
- CSS

_No Bootstrap this time for Vanilla CSS refresher :D_

## Resources

Per Scholas Module 9 | Lessons 4-5- Initial interfaces, references, and resources provided by Per Scholas.

[Component Library Assignment](https://github.com/ANIO-Official/component-library) - For creating the type setup used in the props for GoalAlert component, and for README referencing.

## How to Use

Required: Have Node and NPM installed.

 1.  Clone the repository or Download the ZIP file and extract the files.
 2.  Open the file in Visual Studio Code.
 3.  Open the Terminal using Ctrl + ~
 4.  cd into the directory 'characte-counter' in the terminal.
 5.  Run the project using "npm run dev" in the terminal.
 6.  You should see 3 options appear. Follow the link for the Local option. Such as "http://localhost:5173/"

A web app in your default browser will appear with the character counter available for use:

- You can clear the default text and enter anything you'd like.
- View current stats for your entered text.
- View The current set Writing Goals. Default: 5 minimum words, 5 max words, and 2ms of reading time.
- View updates regarding the Goal Alert set. Default Goal Alert: Max. Words. Shows current word count and goal coutn comparison. Will alert via span text when over goal.

**Want to change the goals?**

 1. Go to the App file 'App.tsx' 
 2. Change the values for the corresponding goal. 
 3. It will reflect in the browser.

**Want to make a new Goal Alert Component?**

*Note: The Goal Alert Component works in tandem with the Text Input and Character Component. So it must be inside of one.*

 1. Go to the 'Character Counter.css' file
 2. Create a new Goal Alert component with the following format:

 ```JSX

  <GoalAlert
    goalName='Max. Words' // Must be of type goalType = 'Min. Words' | 'Max. Words' | 'Target Reading Time'
    goalAmount={{ minWords, maxWords, targetReadingTime }} //The props object used by the CharacterCounter parent component.
    stats={stats} //The stats object created by the CharacterCounter parent component, connected to the 'text' state variable.
  />

 ```
 3. Depending on the gameName set you will see the goal progress for the related goal and stat.

  - 'Min. Words' -> Show whether minimum words goal is met in comparison to current stats.
  - 'Max. Words' -> Show whether maximum words goal is met in comparison to current stats.
  - 'Target Reading Time' -> Show whether reading time goal is met in comparison to current stats.

## Reflection

**Handling state updates when the text changed**

To handle state updates when the text changed, I used React hooks. In the Character Counter parent component, I created the use state variable 'text' and the state function variable 'setText' with the default value of an example of text input. I then sent this use state variable to the Text Input child component as a prop to use. The Text Input component is where the text area input element lives. The value the text area has is set to the 'text' state variable that was sent as prop from the parent component. Additionally, the Text Input child component has an onChange event handler function named 'handleChange' to handle any React Change event to a HTMLTextAreaElement. This function, updates the value property of the text area and returns the value inside a function for the parent component Character Counter whenever the text area has an onChange event. The function it returns is also prop sent from the parent named 'handleTextInputChange' that calls the 'setText' state function and passes it the paramter of a string. The string parameter is where the returned value fromt he child will be used.

In summary, to handle the state updates to the text area element, I used a callback pattern. The callback pattern allows me to:

 1.  Let parent component Character Counter send the state variable 'text' and the function 'handleTextInputChange()' that uses the setState function that will update the state variable.
 2.  Then the child component Text Input, recieves the props and uses them when the onChage event calls the 'handleChange()' function.
 3.  The function 'handleChange()' updates the state variable 'text' by returning the function 'handleTextInputChange()' with the parameter 'newValue' to use.
 4.  The parent recieves this information, and essentially performs the following code:

```JSX

  //Basically this.

  const handleTextInputChange = (newValue) => {
        setText(newValue)
    }

```

You can more so think of it as the child performing the code. Which can be viewed mentally like this below:

```JSX

//basically a nested function being performed
const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value //the event target = text area in the return
    const handleTextInputChange = (newValue) => {
        setText(newValue)
    }
}

//^ I show it this way because onTextChange is the prop equal to handTextInputChange.

 return (
        <>
            <div className="text-input-container">
                <textarea className="text-input" onChange={handleChange} placeholder={placeholder}>{initialValue}</textarea>
            </div>
            <br/>
        </>
    )

//In the above return, the text area's onChange is calling handleChange which updates the value and calls handlTextInputChange using the newValue to update the 'text' state variable. The 'text' state variable is equal to the initialValue prop here as well. So it will always reflect the updates in the text area input.
```

This is how I view the callback pattern interaction be better understanding. Hope this helps! 🤗

**Considerations made when calculating reading time**

When calculating reading time, I wanted to consider the word count. This is because we read by word not by character/letters (unless it's a single word letter). So I knew the formula would need to be equivalent to increasing the total time of reading by the number of words. Because the users can type a variety of words in the english language, I decided the best way to calculate the time per word would be to instead just use an average amount time for an approximate amount. The amount of words will vary as well, so the final formula would need to be a function that accepts the parameter of a number (word count/words). To get the number of words, I split the text input by spaces and clarified via filter to return only index values from the split that **are not** empty. Final result:

```JSX

  //Actual Functions with Formulas --------------------------------------

 //Split by words, dont include empty space.
    const calculateWords = () => {
        //Split the text by spaces.
        const textSplit = (text.split(' '))

        //Return the length number of items in textSplit that are not empty spaces. (actual words)
        const words = (textSplit.filter((word: string) => word !== '')).length
        return text === "" ? 0 : words //check if the text is empty, when it's not, return the number of words.
    }

 //Formula for read time.
    const calculateReadTime = (words: number) => {
        return Math.floor(words * 0.3) // 0.3 seconds per word
    }

  //As plain text explainations --------------------------------------

  totalWords = filter out just the words from this array : (returned array from text input split by spaces)

  totalReadingTime = words * averageTimePerWord

```

**Ensuring made UI remained responsive during rapid text input**

To ensure the UI remained responsive during rapid text input, I tied the UI's values and colors to the 'stats' prop variable. This prop is provided by the parent component and is updated by the child component Text Input via React hooks. The Text Input component uses the 'text' state variable to handle the change event to update the 'text' variable's value. This information returns to the parent component, Character Counter, and is used to calculate the stats object properties. This back and forth of information (the callback pattern) allows the data to flow between all children through the parent. Thus, whenever a child wants to update the UI text or colors, they can simply check the specific 'stats' properties that reflect the current state of the 'text' state variable.

**Challenges faced implementing statistics calculations**

When implementing the statistics calculation, the only challenge I had was trying to figure out the best way to show reading time. I wasn't sure what measurement to use. Ultimately, I looked up average readign time for a single word on Google. It returned that on averable it's 0.25-0.33 seconds per word. So I decided to go with counting by seconds. I still think there be a better way but I felt this to be a good middle ground. I also use the tilda to clarify that this is an approximate amount.

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)
