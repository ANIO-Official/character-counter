import './App.css'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'


function App() {
  
  return (
    <>
      <CharacterCounter
      minWords={5}
      maxWords={15}
      targetReadingTime={10} //in seconds
      />
    </>
  )
}

export default App
