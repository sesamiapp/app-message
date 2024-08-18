import { AdminHostBase, AdminHostBaseProps } from './admin-host-base'
import { onBack, onNotification } from '../../../methods/host'
import { NotificationType } from '../../../types/notification.type'

export class AdminHostAppLoaderMain extends AdminHostBase {

    constructor(
        props: AdminHostBaseProps & {
            onNotification: (message: string, type: NotificationType) => void
            onBack?: () => void
        }
    ){
        super(props)
        onNotification(props.onNotification)
        props.onBack && onBack(props.onBack)
    }

}
