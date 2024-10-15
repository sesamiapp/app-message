import { AdminHostBase, AdminHostBaseProps } from './admin-host-base'
import { NotificationType } from '../../../types'
import { onNotification } from '../../../methods/host'

export class AdminHostAppointmentDetailsInfo extends AdminHostBase {

    constructor(props: AdminHostBaseProps & {
        onNotification: (message: string, type: NotificationType) => void
    }){
        super(props)
        onNotification(this.messageId, props.onNotification)
    }

}
