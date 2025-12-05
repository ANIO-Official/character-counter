import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import StatsDisplay from "../StatsDisplay/StatsDisplay"
import type { CharacterCounterProps } from '../../type'

export default function CharacterCounter({minWords, maxWords, targetReadingTime}:CharacterCounterProps) {
    const [text, setText] = useState('Inital Value')

    const handleTextInputChange = (userInput: string) => {
        setText(userInput)
    }

    const checkNumValue = (variable:number | null |undefined): boolean =>{
        return variable !== undefined? false:true
    }

    

    return (
        <>
            <div className='character-counter-component'>
                <TextInput
                    onTextChange={handleTextInputChange}
                    initialValue={text}
                />
                <StatsDisplay
                    stats={{ characterCount: 4, wordCount: 4, readingTime: 5 }}
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