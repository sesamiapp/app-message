import { getEvent } from '../../helpers'
import { Action, Message, NotificationType } from '../../types'

export const initPageSizeListener = (id: string) => {
    const resizeObserver = new ResizeObserver(entries => {
        const data: Message = {
            action: getEvent(id, Action.HEIGHT),
            payload: {
                height: entries[0].target.clientHeight
            }
        }
        window.top?.postMessage(data)
    })
    resizeObserver.observe(document.body)
}

export const onNext = (callback: () => void) => {
    window.addEventListener(Action.NEXT, () => callback())
}

export const acceptNext = (id: string) => {
    const data: Message = {
        action: getEvent(id, Action.NEXT),
        payload: {
            isAccepted: true
        }
    }
    window.top?.postMessage(data)
}

export const rejectNext = (id: string) => {
    const data: Message = {
        action: getEvent(id, Action.NEXT),
        payload: {
            isAccepted: false
        }
    }
    window.top?.postMessage(data)
}

export const navBack = (id: string) => {
    const data: Message = {
        action: getEvent(id, Action.BACK),
        payload: null
    }
    window.top?.postMessage(data)
}

export const showNotification = (id: string, message: string, type: NotificationType) => {
    const data: Message = {
        action: getEvent(id, Action.NOTIFICATION),
        payload: {
            message,
            type
        }
    }
    window.top?.postMessage(data)
}
