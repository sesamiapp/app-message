import { getEvent } from '../../helpers'
import { Action, Message, NotificationType } from '../../types'

export const onHeightChange = (id: string, callback: (height: number) => void) => {
    window.addEventListener(getEvent(id, Action.HEIGHT), (e: any) => (
        callback(e.detail.event.data.payload.height)
    ))
}

export const askNext = (id: string, source: MessageEventSource): Promise<boolean> => {
    const data: Message = {
        action: getEvent(id, Action.NEXT)
    }
    source.postMessage(data, { targetOrigin: '*' })
    return new Promise(resolve => {
        window.addEventListener(getEvent(id, Action.NEXT), (e: any) => {
            resolve(e.detail.event.data.payload.isAccepted)
        })
    })
}

export const onNotification = (id: string, callback: (message: string, type: NotificationType) => void) => {
    window.addEventListener(getEvent(id, Action.NOTIFICATION), (e: any) => {
        const payload = e.detail.event.data.payload
        callback(payload.message, payload.type)
    })
}

export const onBack = (id: string, callback: () => void) => {
    window.addEventListener(getEvent(id, Action.BACK), () => callback())
}
