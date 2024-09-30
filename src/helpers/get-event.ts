import { Action } from '../types'

export const getEvent = (id: string, action: Action) => `${id}_${action}`
