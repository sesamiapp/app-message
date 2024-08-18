import { Action, Message } from '../../types'
import { NotificationType } from '../../types'

export const initPageSizeListener = () => {
    const resizeObserver = new ResizeObserver(entries => {
        const data: Message = {
            action: Action.HEIGHT,
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

export const acceptNext = () => {
    const data: Message = {
        action: Action.NEXT,
        payload: {
            isAccepted: true
        }
    }
    window.top?.postMessage(data)
}

export const rejectNext = () => {
    const data: Message = {
        action: Action.NEXT,
        payload: {
            isAccepted: false
        }
    }
    window.top?.postMessage(data)
}

export const navBack = () => {
    const data: Message = {
        action: Action.BACK,
        payload: null
    }
    window.top?.postMessage(data)
}

export const showNotification = (message: string, type: NotificationType) => {
    const data: Message = {
        action: Action.NOTIFICATION,
        payload: {
            message,
            type
        }
    }
    window.top?.postMessage(data)
}
