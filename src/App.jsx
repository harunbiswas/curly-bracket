import './App.css'
import Curly from './components/Curly'

function App() {
  return (
    <>
      <div className='wrp'>
        <Curly color='black' />
      </div>
      <div className='wrp-1'>
        <Curly color='black' />
      </div>
      <div className='wrp-2'>
        <Curly color='red' />
      </div>
    </>
  )
}

export default App
