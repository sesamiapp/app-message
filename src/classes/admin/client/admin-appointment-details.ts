import { AdminClientBase, AdminClientBaseProps } from './admin-client-base'
import { getInit, showNotification } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'
import { NotificationType } from '../../../types'

export class AdminAppointmentDetails extends AdminClientBase {

    private appointmentId: string

    getAppointmentId = () => this.appointmentId

    constructor(props: AdminClientBaseProps & { appointmentId: string }){
        super(props)
        this.appointmentId = props.appointmentId
    }
    
    static init = async () => {
        initListener('client')
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new AdminAppointmentDetails({
            messageId,
            shopId: payload.shopId,
            locale: payload.locale,
            appointmentId: payload.extra?.appointmentId
        })
    }

    showNotification = (message: string, type: NotificationType) => showNotification(this.messageId, message, type)

}
