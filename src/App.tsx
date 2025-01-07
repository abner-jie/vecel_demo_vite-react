import { useEffect } from 'react'
import './App.css'
import { postEvent, setEmojiStatus, init, on, requestEmojiStatusAccess } from '@telegram-apps/sdk-react'

function App() {
    useEffect(() => {
        init()
        on('emoji_status_set', (data) => {
            console.log('emoji_status_set: ', data)
            alert('设置自定义表情成功')
        })
        on('emoji_status_failed', (data) => {
            console.log('emoji_status_failed: ', data)
            alert('设置自定义表情失败')
        })
    }, [])

    async function onClickSetEmoji() {
        try {
            // const custom_emoji_id = '6321305803663872502'
            const custom_emoji_id = '63213058036632502aa'
            // postEvent('web_app_set_emoji_status', {
            //     custom_emoji_id: '6321305803663872502',
            //     duration: 500,
            // })
            await setEmojiStatus(custom_emoji_id, 500)
        } catch (e) {
            console.error('catch error: ', e)
        }
    }

    async function onClickRequestEmojiStatusAccess() {
        await requestEmojiStatusAccess()
    }

    function clickDownload() {
        // @ts-ignore
        postEvent('web_app_request_file_download', {
            url: 'https://static.yanan.uxuy.bipal.space/uxuy-activity/twitter/tes888998.png',
            file_name: 'test.png',
        })
    }

    return (
        <div>
            <div>
                <button onClick={onClickSetEmoji}>设置表情:</button>
                <button onClick={onClickRequestEmojiStatusAccess}>授权给bot 设置表情:</button>
            </div>
            <button onClick={clickDownload}>下载图片</button>
        </div>
    )
}

export default App
