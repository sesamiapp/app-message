import { Environment, TeamMember } from '../types';
export declare class SesamiExperience {
    private environment;
    private shopId;
    private locale;
    private productId;
    private variantId;
    private quantity;
    private teamMember;
    private slot;
    getEnvironment: () => Environment;
    getShopId: () => string;
    getLocale: () => string;
    getProductId: () => string;
    getVariantId: () => string;
    getQuantity: () => string;
    getTeamMember: () => TeamMember;
    getSlot: () => Date;
    constructor(environment: Environment, shopId: string, locale: string, productId: string, variantId: string, quantity: string, teamMember: TeamMember, slot: Date);
    static init: () => Promise<SesamiExperience>;
    onNext: (callback: () => void) => void;
    acceptNext: () => void;
    rejectNext: () => void;
}
