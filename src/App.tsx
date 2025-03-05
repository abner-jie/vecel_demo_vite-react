import { useEffect, useState } from 'react'
import './App.css'
import { postEvent, init, on, requestEmojiStatusAccess, openTelegramLink, shareStory } from '@telegram-apps/sdk-react'

function App() {
    const [emojiId, setEmojiId] = useState('6323281626058986706')
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
            // const custom_emoji_id = '6323281626058986706' // yaya
            // const custom_emoji_id = '63213058036632502aa'
            postEvent('web_app_set_emoji_status', {
                custom_emoji_id: emojiId,
            })
            // await setEmojiStatus(emojiId, 500)
        } catch (e) {
            console.error('catch error: ', e)
        }
    }

    async function onClickRequestEmojiStatusAccess() {
        await requestEmojiStatusAccess()
    }
    async function payStarsInvoice() {
        openTelegramLink('https://t.me/$_0vCJE95CVQqAgAAGp4puGwv77A')
    }

    async function clickBootChannel() {
        // 'boost'
        // openTelegramLink('https://t.me/boost/UXUYcom')
        openTelegramLink('https://t.me/boost/franktestchannela')
    }

    function clickDownload() {
        // @ts-ignore
        postEvent('web_app_request_file_download', {
            url: 'https://static.yanan.uxuy.bipal.space/uxuy-activity/twitter/tes888998.png',
            file_name: 'test.png',
        })
    }

    function addEmojiPack() {
        openTelegramLink('https://t.me/addemoji/UXUYemoji')
    }

    async function onShareStory() {
        shareStory('https://t.me/frank_test_000001/s/11', {
            text: `Join x'x'x`,
        })
    }
    async function onRule() {
        openTelegramLink('https://t.me/UXUYcom/170')
    }

    return (
        <div>
            <div>
                <input type="text" onInput={(e) => setEmojiId(e.currentTarget.value)} />
                <button onClick={onClickSetEmoji}>设置表情: {emojiId}</button>
                <button onClick={onClickRequestEmojiStatusAccess}>授权给bot 设置表情:</button>
                <button onClick={payStarsInvoice}>支付stars</button>
            </div>
            <p>
                <button onClick={clickBootChannel}>boot channel</button>
            </p>

            <button onClick={clickDownload}>下载图片</button>
            <button onClick={addEmojiPack}>添加 emoji 表情包</button>
            <button onClick={onShareStory}>分享 </button>
            <button onClick={onRule}>规则 </button>
        </div>
    )
}

export default App
