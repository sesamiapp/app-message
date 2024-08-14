import { AccessToken } from '../types'

export const getTokenExpiration = (token: string) => {
    const jwtParsed = <AccessToken>parseJwtToken(token)
    if(jwtParsed){
        return jwtParsed.exp
    }else{
        return 0
    }
}

const parseJwtToken = <T>(refreshToken: string) => {
    const parsedJWT = parseJWT(refreshToken)
    if(parsedJWT){
        return parsedJWT as T
    }else{
        return null
    }
}

const parseJWT = (token: string) => {
    try{
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => (
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        )).join(''))
        return JSON.parse(jsonPayload)
    }catch{
        return null
    }
}
