import { Environment, TeamMember } from '../types';
export declare const onInit: (callback: (source: MessageEventSource) => void) => void;
export declare const sendAdminInit: (source: MessageEventSource | null, environment: Environment, shopId: string, locale: string) => void;
export declare const sendExperienceInit: (source: MessageEventSource | null, environment: Environment, shopId: string, locale: string, productId: string, variantId: string, quantity: string, teamMember: TeamMember, slot: Date) => void;
