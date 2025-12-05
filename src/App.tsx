import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'

function App() {
  const [text, setText] = useState('')

  const handleTextInputChange = (userInput:string) => {
    setText(userInput)      
  }

  return (
    <>
      <TextInput
        onTextChange={handleTextInputChange}
      />
      <StatsDisplay
      stats={{characterCount:4, wordCount:4, readingTime:5}}
      />
    </>
  )
}

export default App
