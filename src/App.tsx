import './App.css'
import { postEvent } from '@telegram-apps/sdk'

function App() {
    function onClickSetEmoji() {
        postEvent('web_app_set_emoji_status', {
            custom_emoji_id: '6321305803663872502',
            duration: 500,
        })
    }

    return (
        <div>
            <button onClick={onClickSetEmoji}>设置表情</button>
        </div>
    )
}

export default App
