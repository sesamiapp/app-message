import { Action, Message } from '../types'

export const getToken = (clientId: string) => {
    const data: Message = {
        action: Action.TOKEN,
        payload: {
            clientId
        }
    }
    window.top?.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(Action.TOKEN, (e: any) => {
            resolve(e.detail.event.data.payload.token)
        })
    })
}
