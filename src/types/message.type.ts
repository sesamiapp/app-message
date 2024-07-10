export type Message = {
    action: Action,
    token?: string,
    payload?: any
}

export enum Action {
    GET_TOKEN = 'GET_TOKEN',
    RECEIVE_TOKEN = 'RECEIVE_TOKEN',
    ON_NEXT = 'ON_NEXT',
    ON_PREVIOUS = 'ON_PREVIOUS'
}
