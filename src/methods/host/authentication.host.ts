import { getEvent } from '../../helpers'
import { Action, Message } from '../../types'

export const onGetToken = (messageId: string, callback: () => void) => {
    window.addEventListener(getEvent(messageId, Action.TOKEN), () => callback())
}

export const sendToken = (messageId: string, source: MessageEventSource, token: string | null) => {
    const data: Message = {
        action: getEvent(messageId, Action.TOKEN),
        payload: {
            token
        }
    }
    source.postMessage(data, { targetOrigin: '*' })
}
