import { Action, Message } from '../types/message.type'

export const sendNext = (iframe: HTMLIFrameElement) => {
    const data: Message = {
        action: Action.ON_NEXT
    }
    iframe.contentWindow?.postMessage(data)
}

export const sendPrevious = (iframe: HTMLIFrameElement) => {
    const data: Message = {
        action: Action.ON_PREVIOUS
    }
    iframe.contentWindow?.postMessage(data)
}
