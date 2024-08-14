import { AdminClientBase } from './admin-client-base'
import { getInit, navBack, showNotification } from '../../../methods/sesami'
import { initListener } from '../../../helpers'

export class AdminClientAppLoaderMain extends AdminClientBase{
    
    static init = async () => {
        initListener()
        const payload: any = await getInit()
        return new AdminClientAppLoaderMain({
            shopId: payload.shopId,
            locale: payload.locale
        })
    }

    showNotification = showNotification
    navBack = navBack

}
