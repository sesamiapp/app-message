import { AdminHostBase, AdminHostBaseProps } from './admin-host-base'
import { NotificationType } from '../../../types/notification.type'
import { onNotification } from '../../../methods/app'

export class AdminHostAppointmentDetailsInfo extends AdminHostBase {

    constructor(props: AdminHostBaseProps & {
        onNotification: (message: string, type: NotificationType) => void
    }){
        super(props)
        onNotification(props.onNotification)
    }

}
