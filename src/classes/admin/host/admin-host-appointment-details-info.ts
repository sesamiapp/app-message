import { AdminHostBase, AdminHostBaseProps } from './admin-host-base'
import { AppTarget, NotificationType } from '../../../types'
import { onNotification } from '../../../methods/host'

export class AdminHostAppointmentDetailsInfo extends AdminHostBase {

    constructor(props: AdminHostBaseProps & {
        onNotification: (message: string, type: NotificationType) => void
    }){
        super(props)
        onNotification(this.id, props.onNotification)
    }

    getURL = () => (
        `${this.url}` +
        `?target=${AppTarget.ADMIN_APPOINTMENT_DETAILS_INFO}` +
        `&id=${this.id}` +
        `&time=${this.timestamp}` +
        `&token=${this.token}` +
        `&shopId=${this.shopId}` +
        `&locale=${this.locale}` +
        `&appointmentId=${this.extra?.appointment}`
    )

}
