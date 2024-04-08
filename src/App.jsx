import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'

function App() {

  return (
    <>
      <h1>States in React</h1>
        <LikeButton />
        <Counter />
        <LudoBoard />
        <TodoList />
      </>
  )
}

export default App
