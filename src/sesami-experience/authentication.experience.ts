import { Action, Message } from '../types/message.type'
import { initListener } from '../utils/listener'

export const getToken = () => {
    initListener()
    const data: Message = {
        action: Action.GET_TOKEN
    }
    window.top?.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(Action.RECEIVE_TOKEN, (e: any) => {
            resolve(e.detail.event.data.payload.token)
        })
    })
}
