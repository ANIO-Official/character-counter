import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import StatsDisplay from "../StatsDisplay/StatsDisplay"
import type { CharacterCounterProps, TextStats } from '../../type'

export default function CharacterCounter({minWords, maxWords, targetReadingTime}:CharacterCounterProps) {
    const [text, setText] = useState(`Example: Peter Piper picked a pluck of peppers. How many peppers did Peter Picker pick?`)

    const handleTextInputChange = (userInput: string) => {
        setText(userInput)
    }

    const checkNumValue = (variable:number | null |undefined): boolean =>{
        return variable !== undefined? false:true
    }

    const calculateWords = ()=>{
        const words = (text.split(' ')).length
        return text === ""? 0 : words
    }
    const calculateReadTime = (words:number) =>{
        return Math.floor(words * 0.3)
    }

    const stats : TextStats = {
        characterCount: (text.split('')).length,
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
            </div>
        </>
    )
}