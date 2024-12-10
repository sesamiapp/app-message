import { ExperienceClientBase, ExperienceClientBaseProps } from './experience-client-base'
import { getInit, acceptNext, onNext, rejectNext } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'

export class ExperienceConfirmationPage extends ExperienceClientBase {

    private appointmentId: string

    getAppointmentId = () => this.appointmentId

    constructor(props: ExperienceClientBaseProps & {
        appointmentId: string
    }){
        super(props)
        this.appointmentId = props.appointmentId
    }

    static init = async () => {
        initListener('host')
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new ExperienceConfirmationPage({
            messageId: messageId,
            sessionId: payload.sessionId,
            shopId: payload.shopId,
            serviceId: payload.serviceId,
            variantId: payload.variantId,
            quantity: payload.quantity,
            resources: payload.resources,
            locale: payload.locale,
            timezone: payload.timezone,
            slot: payload.slot,
            appointmentId: payload.extra.appointmentId
        })
    }
    
    onDone = (callback: () => void) => onNext(this.messageId, callback)
    acceptDone = () => acceptNext(this.messageId)
    rejectDone = () => rejectNext(this.messageId)

}
