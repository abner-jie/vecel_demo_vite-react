import './App.css'
import { postEvent } from '@telegram-apps/sdk'

function App() {
    function onClickSetEmoji() {
        postEvent('web_app_set_emoji_status', {
            custom_emoji_id: '6321305803663872502',
            duration: 500,
        })
    }

    function clickDownload() {
        postEvent('web_app_request_file_download', {
            url: 'https://static.yanan.uxuy.bipal.space/uxuy-activity/twitter/tes888998.png',
            file_name: 'test.png',
        })
    }

    return (
        <div>
            <button onClick={onClickSetEmoji}>设置表情</button>
            <button onClick={clickDownload}>下载图片</button>
        </div>
    )
}

export default App
