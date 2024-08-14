import { Action, Message, NotificationType } from '../../types'

export const onHeightChange = (callback: (height: number) => void) => {
    window.addEventListener(Action.HEIGHT_CHANGE, (e: any) => (
        callback(e.detail.event.data.payload.height)
    ))
}

export const askNext = (source: MessageEventSource) => {
    const data: Message = {
        action: Action.NEXT
    }
    source.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(Action.NEXT, (e: any) => {
            resolve(e.detail.event.data.payload.isAccepted)
        })
    })
}

export const onNotification = (callback: (message: string, type: NotificationType) => void) => {
    window.addEventListener(Action.NOTIFICATION, (e: any) => {
        const payload = e.detail.event.data.payload
        callback(payload.message, payload.type)
    })
}

export const onBack = (callback: () => void) => {
    window.addEventListener(Action.BACK, () => callback())
}
