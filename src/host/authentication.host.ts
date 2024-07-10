import { Action, Message } from '../types/message.type'
import { initListener } from '../utils/listener'

export const onGetToken = (callback: (event: MessageEvent<any>) => void) => {
    initListener()
    window.addEventListener(Action.GET_TOKEN, (e: any) => {
        callback(e.detail.event)
    })
}

export const sendToken = (event: MessageEvent<any>) => {
    const data: Message = {
        action: Action.RECEIVE_TOKEN,
        payload: {
            token: event.data.token
        }
    }
    event.source?.postMessage(data)
}
