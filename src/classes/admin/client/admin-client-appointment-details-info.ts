import { AdminClientBase, AdminClientBaseProps } from './admin-client-base'
import { getInit, showNotification } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'
import { Appointment } from '../../../types'

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
        const id = getUrlParam('id') ?? ''
        const payload: any = await getInit(id)
        return new AdminClientAppointmentDetailsInfo({
            id,
            shopId: payload.shopId,
            locale: payload.locale,
            appointment: payload.extra.appointment
        })
    }

    showNotification = showNotification

}
