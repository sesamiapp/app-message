import { askNext } from './events.host'
import { onInit, sendExperienceInit } from './init.host'
import { initListener } from '../utils'
import { Environment, TeamMember } from '../types'

export class AppExperience {

    iframe: HTMLIFrameElement
    source: MessageEventSource | null = null

    constructor(iframe: HTMLIFrameElement){
        this.iframe = iframe
        initListener()
    }

    onInit = (callback: () => void) => {
        onInit(source => {
            this.source = source
            callback()
        })
    }

    sendInit = (
        environment: Environment,
        shopId: string,
        locale: string,
        productId: string,
        variantId: string,
        quantity: string,
        teamMember: TeamMember,
        slot: Date
    ) => sendExperienceInit(

        this.source,
        environment,
        shopId,
        locale,
        productId,
        variantId,
        quantity,
        teamMember,
        slot
    )
    askNext = () => askNext(this.iframe)

}
