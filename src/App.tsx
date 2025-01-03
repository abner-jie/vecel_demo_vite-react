import { useEffect } from 'react'
import './App.css'
import { postEvent, setEmojiStatus, init, isSettingEmojiStatus } from '@telegram-apps/sdk'

function App() {
    useEffect(() => {
        init()
    }, [])

    async function onClickSetEmoji() {
        const custom_emoji_id = '6321305803663872502'
        // postEvent('web_app_set_emoji_status', {
        //     custom_emoji_id: '6321305803663872502',
        //     duration: 500,
        // })
        const statusSet = await setEmojiStatus(custom_emoji_id, 500)
        console.log('statusSet: ', statusSet, isSettingEmojiStatus())
    }

    function clickDownload() {
        // @ts-ignore
        postEvent('web_app_request_file', {
            url: 'https://static.yanan.uxuy.bipal.space/uxuy-activity/twitter/tes888998.png',
            file_name: 'test.png',
        })
    }

    return (
        <div>
            <div>
                <button onClick={onClickSetEmoji}>设置表情:</button>
                isSettingEmojiStatus: {isSettingEmojiStatus()}
            </div>
            <button onClick={clickDownload}>下载图片</button>
        </div>
    )
}

export default App
