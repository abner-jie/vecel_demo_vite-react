import './App.css'

function App() {
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
