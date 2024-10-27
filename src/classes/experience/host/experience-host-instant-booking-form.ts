import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/host'
import { AppTarget } from '../../../types'

export class ExperienceHostInstantBookingForm extends ExperienceHostBase {

    askForConfirm = async () => {
        if(this.source){
            return askNext(this.messageId, this.source)
        }else if(this.isWaitingForClientToLoad){
            return false // do not go to next step if the extension is loading
        }else{
            return true // does not block the client if extension is not loaded
        }
    }

    getURL = () => `${this.getBaseURL()}&target=${AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM}`

}
