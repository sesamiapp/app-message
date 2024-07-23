import { Action, Message } from '../types'
import { initListener } from '../utils/listener'

export const onGetToken = (callback: (event: MessageEvent<any>) => void) => {
    initListener()
    window.addEventListener(Action.TOKEN, (e: any) => {
        callback(e.detail.event)
    })
}

export const sendToken = (event: MessageEvent<any>, token: string) => {
    const data: Message = {
        action: Action.TOKEN,
        payload: {
            token
        }
    }
    event.source?.postMessage(data)
}
