import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import StatsDisplay from "../StatsDisplay/StatsDisplay"
import type { CharacterCounterProps, TextStats } from '../../type'
import GoalAlert from '../GoalAlert/GoalAlert'

export default function CharacterCounter({minWords, maxWords, targetReadingTime}:CharacterCounterProps) {
    const [text, setText] = useState(`Example: Peter Piper picked a pluck of peppers. How many peppers did Peter Picker pick?`)

    const handleTextInputChange = (userInput: string) => {
        setText(userInput)
    }

    //Check if the value is set for this number variable. Used to determine hidden status
    const checkNumValue = (variable:number | null |undefined): boolean =>{
        return variable !== undefined? false:true
    }

    //Split by words, dont include empty space.
    const calculateWords = ()=>{
        //Split the text by spaces.
        const textSplit = (text.split(' '))

        //Return the length number of items in textSplit that are not empty spaces. (actual words)
        const words = (textSplit.filter((word:string) => word !== '')).length
        return text === ""? 0 : words //check if the text is empty, when it's not, return the number of words.
    }

    //Formula for read time. 
    const calculateReadTime = (words:number) =>{
        return Math.floor(words * 0.3)
    }

    const stats : TextStats = {
        characterCount: (text.split('')).length, //split input text by each character and return how many there are
        wordCount: calculateWords(),
        readingTime: calculateReadTime((calculateWords()))
    }

    return (
        <>
            <div className='character-counter-component'>
                <TextInput
                    onTextChange={handleTextInputChange}
                    initialValue={text}
                    placeholder='Type a sentence. Try your name!'
                />
                <StatsDisplay
                    stats={stats}
                    showReadingTime={true}
                />
                <div>
                    {/*Each of these will only show when they are defined. Otherwise hidden. */}
                    <p id="min-words" className="stats-goals" hidden={checkNumValue(minWords)}>Min: {minWords}</p>
                    <p id="max-words" className="stats-goals" hidden={checkNumValue(maxWords)}>Max: {maxWords}</p>
                    <p id="target-reading-time" className="stats-goals" hidden={checkNumValue(targetReadingTime)}>Target Reading Time: {targetReadingTime}</p>
                </div>
                <br/>
                <GoalAlert
                goalName='Max. Words'
                goalAmount={{minWords, maxWords, targetReadingTime}}
                stats={stats}
                />
            </div>
        </>
    )
}