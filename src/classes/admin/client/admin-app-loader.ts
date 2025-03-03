import { AdminClientBase } from './admin-client-base'
import { getInit, navBack, showNotification } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'
import { NotificationType } from '../../../types'

export class AdminAppLoader extends AdminClientBase{
    
    static init = async () => {
        initListener('host')
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new AdminAppLoader({
            messageId,
            shopId: payload.shopId,
            locale: payload.locale
        })
    }

    showNotification = (message: string, type: NotificationType) => showNotification(this.messageId, message, type)
    navBack = () => navBack(this.messageId)

}
