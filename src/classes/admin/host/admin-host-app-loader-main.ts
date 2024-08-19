import { AdminHostBase, AdminHostBaseProps } from './admin-host-base'
import { onBack, onNotification } from '../../../methods/host'
import { AppTarget, NotificationType } from '../../../types'

export class AdminHostAppLoaderMain extends AdminHostBase {

    constructor(
        props: AdminHostBaseProps & {
            onNotification: (message: string, type: NotificationType) => void
            onBack?: () => void
        }
    ){
        super(props)
        onNotification(this.id, props.onNotification)
        props.onBack && onBack(this.id, props.onBack)
    }

    getURL = () => (
        this.getBaseURL() +
        `&target=${AppTarget.ADMIN_APP_LOADER_MAIN}`
    )

}
