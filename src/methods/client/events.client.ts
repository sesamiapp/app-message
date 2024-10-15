import { getEvent } from '../../helpers'
import { Action, Message, NotificationType } from '../../types'

export const initPageSizeListener = (messageId: string) => {
    const resizeObserver = new ResizeObserver(entries => {
        const data: Message = {
            action: getEvent(messageId, Action.HEIGHT),
            payload: {
                height: entries[0].target.clientHeight
            }
        }
        window.top?.postMessage(data, '*')
    })
    resizeObserver.observe(document.body)
}

export const onNext = (messageId: string, callback: () => void) => {
    window.addEventListener(getEvent(messageId, Action.NEXT), () => callback())
}

export const acceptNext = (messageId: string) => {
    const data: Message = {
        action: getEvent(messageId, Action.NEXT),
        payload: {
            isAccepted: true
        }
    }
    window.top?.postMessage(data, '*')
}

export const rejectNext = (messageId: string) => {
    const data: Message = {
        action: getEvent(messageId, Action.NEXT),
        payload: {
            isAccepted: false
        }
    }
    window.top?.postMessage(data, '*')
}

export const navBack = (messageId: string) => {
    const data: Message = {
        action: getEvent(messageId, Action.BACK),
        payload: null
    }
    window.top?.postMessage(data, '*')
}

export const showNotification = (messageId: string, message: string, type: NotificationType) => {
    const data: Message = {
        action: getEvent(messageId, Action.NOTIFICATION),
        payload: {
            message,
            type
        }
    }
    window.top?.postMessage(data, '*')
}
