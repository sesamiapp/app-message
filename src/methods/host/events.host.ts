import { Constants } from '../../constants'
import { getEvent } from '../../helpers'
import { Action, Message, NotificationType } from '../../types'

export const onHeight = (messageId: string, callback: (height: number) => void) => {
    window.addEventListener(getEvent(messageId, Action.HEIGHT), (e: any) => (
        callback(e.detail.event.data.payload.height)
    ))
}

export const askNext = (messageId: string, source: MessageEventSource): Promise<boolean> => {
    const data: Message = {
        action: getEvent(messageId, Action.NEXT)
    }
    source.postMessage(data, { targetOrigin: '*' })
    return new Promise(resolve => {
        
        let isWaitingForAccept = true

        // set timeout for client's response
        setTimeout(() => {
            if(isWaitingForAccept){
                resolve(true)
                isWaitingForAccept = false
            }
        }, Constants.CLIENT_ON_NEXT_TIMEOUT)

        // waiting for clint's response
        window.addEventListener(getEvent(messageId, Action.NEXT), (e: any) => {
            if(isWaitingForAccept){
                resolve(e.detail.event.data.payload.isAccepted)
                isWaitingForAccept = false
            }
        })
        
    })
}

export const onNotification = (messageId: string, callback: (message: string, type: NotificationType) => void) => {
    window.addEventListener(getEvent(messageId, Action.NOTIFICATION), (e: any) => {
        const payload = e.detail.event.data.payload
        callback(payload.message, payload.type)
    })
}

export const onBack = (messageId: string, callback: () => void) => {
    window.addEventListener(getEvent(messageId, Action.BACK), () => callback())
}
