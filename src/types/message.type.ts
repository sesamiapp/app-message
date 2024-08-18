import { Action } from './action.type'

export type Message = {
    action: string,
    token?: string,
    payload?: any
}
