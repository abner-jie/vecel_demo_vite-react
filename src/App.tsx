import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    function onClickSetEmoji() {
        alert('😀')
    }

    return (
        <div>
            <button onClick={onClickSetEmoji}>设置表情</button>
        </div>
    )
}

export default App
