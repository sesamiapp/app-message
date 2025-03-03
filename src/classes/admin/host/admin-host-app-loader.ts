import { AdminHostBase, AdminHostBaseProps } from './admin-host-base'
import { onBack, onNotification } from '../../../methods/host'
import { NotificationType } from '../../../types'

export class AdminHostAppLoader extends AdminHostBase {

    constructor(
        props: AdminHostBaseProps & {
            onNotification: (message: string, type: NotificationType) => void
            onBack?: () => void
        }
    ){
        super(props)
        onNotification(this.messageId, props.onNotification)
        props.onBack && onBack(this.messageId, props.onBack)
    }

}
