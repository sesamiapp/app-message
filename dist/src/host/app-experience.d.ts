import { Environment, TeamMember } from '../types';
export declare class AppExperience {
    iframe: HTMLIFrameElement;
    source: MessageEventSource | null;
    constructor(iframe: HTMLIFrameElement);
    onInit: (callback: () => void) => void;
    sendInit: (environment: Environment, shopId: string, locale: string, productId: string, variantId: string, quantity: string, teamMember: TeamMember, slot: Date) => void;
    askNext: () => Promise<unknown>;
}
