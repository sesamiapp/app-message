import { Action } from '../types'

export const getEvent = (messageId: string, action: Action) => `${messageId}_${action}`
