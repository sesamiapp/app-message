import { Action, Message } from '../types'

//Todo: call them inside an APP object instance(and pass the iframe on construct)
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
