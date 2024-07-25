import { Action, Message } from '../types'

export const askNext = (iframe: HTMLIFrameElement) => {
    const data: Message = {
        action: Action.NEXT
    }
    iframe.contentWindow?.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(Action.NEXT, (e: any) => {
            resolve(e.detail.event.data.payload.isAccepted)
        })
    })
}
