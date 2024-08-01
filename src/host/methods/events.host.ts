import { Action, Message } from '../../types'

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

export const onHeightChange = (callback: (height: number) => void) => {
    window.addEventListener(Action.HEIGHT_CHANGE, (e: any) => (
        callback(e.detail.event.data.payload.height)
    ))
}
