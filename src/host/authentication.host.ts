import { Action, Message } from '../types'

export const onGetToken = (callback: () => void) => {
    window.addEventListener(Action.TOKEN, () => callback())
}

export const sendToken = (source: MessageEventSource, token: string) => {
    const data: Message = {
        action: Action.TOKEN,
        payload: {
            token
        }
    }
    source.postMessage(data)
}
