import { Action } from './action.type'

export type Message = {
    action: Action,
    token?: string,
    payload?: any
}
