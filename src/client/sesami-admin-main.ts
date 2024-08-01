import { getInit, getToken, initPageSizeListener } from './methods'
import { initListener, isTokenExpired } from '../utils'

export class SesamiAdminAlMain {

    private shopId: string
    private locale: string
    private token: string | null = null

    getShopId = () => this.shopId
    getLocale = () => this.locale

    constructor(shopId: string, locale: string){
        this.shopId = shopId
        this.locale = locale
        initPageSizeListener()
    }
    
    static init = async () => {
        initListener()
        const payload: any = await getInit()
        return new SesamiAdminAlMain(
            payload.shopId,
            payload.locale
        )
    }

    getToken = async (): Promise<string | null> => {
        if(this.token && !isTokenExpired(this.token)){
            return this.token
        }else{
            const token = await getToken()
            this.token = token
            return this.token
        }
    }

}
