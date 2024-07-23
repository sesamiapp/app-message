import { Action } from './action.type'

//todo: specify all payloads to their actions

export type Message = {
    action: Action,
    token?: string,
    payload?: any
}

