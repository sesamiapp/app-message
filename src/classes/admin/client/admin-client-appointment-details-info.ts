import { AdminClientBase, AdminClientBaseProps } from './admin-client-base'
import { getInit, showNotification } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'
import { Appointment, NotificationType } from '../../../types'

export class AdminClientAppointmentDetailsInfo extends AdminClientBase {

    private appointment: Appointment

    getAppointment = () => this.appointment

    constructor(props: AdminClientBaseProps & {
        appointment: Appointment
    }){
        super(props)
        this.appointment = props.appointment
    }
    
    static init = async () => {
        initListener()
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new AdminClientAppointmentDetailsInfo({
            messageId,
            shopId: payload.shopId,
            locale: payload.locale,
            appointment: payload.extra.appointment
        })
    }

    showNotification = (message: string, type: NotificationType) => showNotification(this.messageId, message, type)

}
