import { getToken, initPageSizeListener } from '../../../methods/sesami'
import { isTokenExpired } from '../../../helpers'

export type AdminClientBaseProps = {
    shopId: string,
    locale: string
}

export class AdminClientBase {

    private shopId: string
    private locale: string
    private token: string | null = null

    getShopId = () => this.shopId
    getLocale = () => this.locale

    constructor(props: AdminClientBaseProps){
        this.shopId = props.shopId
        this.locale = props.locale
        initPageSizeListener()
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
