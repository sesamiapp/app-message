import { Action, Message } from '../types'

export const getInit = () => {
    const data: Message = {
        action: Action.INIT
    }
    window.top?.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(Action.INIT, (e: any) => {
            resolve(e.detail.event.data.payload)
        })
    })
}
