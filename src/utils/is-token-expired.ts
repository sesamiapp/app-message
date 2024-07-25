import { getTokenExpiration } from './parse-jwt-token'

export const isTokenExpired = (token: string) => {
    const now = new Date()
    if((getTokenExpiration(token) - 30)*1000 > now.getTime()){ // 30 seconds offset
        return false
    }else{
        return true
    }
}
