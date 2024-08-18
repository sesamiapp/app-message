import { getEvent } from '../../helpers'
import { Action, Message } from '../../types'

export const onGetToken = (id: string, callback: () => void) => {
    window.addEventListener(getEvent(id, Action.TOKEN), () => callback())
}

export const sendToken = (source: MessageEventSource, token: string | null) => {
    const data: Message = {
        action: Action.TOKEN,
        payload: {
            token
        }
    }
    source.postMessage(data)
}
