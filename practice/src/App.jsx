import { useState } from 'react'
import './App.css'
import { Todo_list } from './components/Todo_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo_list></Todo_list>

    </>
  )
}

export default App
