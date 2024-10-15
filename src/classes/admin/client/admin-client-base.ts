import { getToken, initPageSizeListener } from '../../../methods/client'
import { isTokenExpired } from '../../../helpers'

export type AdminClientBaseProps = {
    messageId: string,
    shopId: string,
    locale: string
}

export class AdminClientBase {

    protected messageId: string
    private shopId: string
    private locale: string
    private token: string | null = null

    getShopId = () => this.shopId
    getLocale = () => this.locale

    constructor(props: AdminClientBaseProps){
        this.messageId = props.messageId
        this.shopId = props.shopId
        this.locale = props.locale
        initPageSizeListener(this.messageId)
    }

    getToken = async (): Promise<string | null> => {
        if(this.token && !isTokenExpired(this.token)){
            return this.token
        }else{
            const token = await getToken(this.messageId)
            this.token = token
            return this.token
        }
    }

}
