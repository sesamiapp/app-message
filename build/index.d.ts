declare module "types/action.type" {
    export enum Action {
        INIT = "INIT",
        TOKEN = "TOKEN",
        NEXT = "NEXT"
    }
}
declare module "types/environment.type" {
    export enum Environment {
        ADMIN_APP = "ADMIN_APP",
        EXPERIENCE_INSTANT_BOOKING = "EXPERIENCE_INSTANT_BOOKING"
    }
}
declare module "types/message.type" {
    import { Action } from "types/action.type";
    export type Message = {
        action: Action;
        token?: string;
        payload?: any;
    };
}
declare module "types/team-member.type" {
    export type TeamMember = {
        id: string;
        name: string;
        image: string;
        description: string | null;
    };
}
declare module "types/token.type" {
    export type AccessToken = {
        userId: string;
        clientId: string;
        email: string;
        exp: number;
        iat: number;
    };
}
declare module "types/index" {
    export * from "types/action.type";
    export * from "types/environment.type";
    export * from "types/message.type";
    export * from "types/team-member.type";
    export * from "types/token.type";
}
declare module "app/authentication.app" {
    export const getToken: (clientId: string) => Promise<unknown>;
}
declare module "app/events.app" {
    export const onNext: (callback: () => void) => void;
    export const acceptNext: () => void;
    export const rejectNext: () => void;
}
declare module "app/init.app" {
    export const getInit: () => Promise<unknown>;
}
declare module "utils/listener" {
    export const initListener: () => void;
}
declare module "utils/parse-jwt-token" {
    export const getTokenExpiration: (token: string) => number;
}
declare module "utils/is-token-expired" {
    export const isTokenExpired: (token: string) => boolean;
}
declare module "utils/index" {
    export * from "utils/listener";
    export * from "utils/parse-jwt-token";
    export * from "utils/is-token-expired";
}
declare module "app/sesami-admin" {
    import { Environment } from "types/index";
    export class SesamiAdmin {
        private clientId;
        private environment;
        private shopId;
        private locale;
        private token;
        getEnvironment: () => Environment | null;
        getShopId: () => string;
        getLocale: () => string;
        constructor(clientId: string, environment: Environment, shopId: string, locale: string);
        static init: (clientId: string) => Promise<SesamiAdmin>;
        getToken: () => Promise<unknown>;
    }
}
declare module "app/sesami-experience" {
    import { Environment, TeamMember } from "types/index";
    export class SesamiExperience {
        private environment;
        private shopId;
        private locale;
        private productId;
        private variantId;
        private quantity;
        private teamMember;
        private slot;
        getEnvironment: () => Environment | null;
        getShopId: () => string;
        getLocale: () => string;
        getProductId: () => string | null;
        getVariantId: () => string | null;
        getQuantity: () => string | null;
        getTeamMember: () => TeamMember | null;
        getSlot: () => Date | null;
        constructor(environment: Environment, shopId: string, locale: string, productId: string, variantId: string, quantity: string, teamMember: TeamMember, slot: Date);
        static init: () => Promise<SesamiExperience>;
        onNext: (callback: () => void) => void;
        acceptNext: () => void;
        rejectNext: () => void;
    }
}
declare module "app/index" {
    export * from "app/sesami-admin";
    export * from "app/sesami-experience";
}
declare module "host/events.host" {
    export const askNext: (iframe: HTMLIFrameElement) => Promise<unknown>;
}
declare module "host/init.host" {
    import { Environment, TeamMember } from "types/index";
    export const onInit: (callback: (source: MessageEventSource) => void) => void;
    export const sendAdminInit: (source: MessageEventSource | null, environment: Environment, shopId: string, locale: string) => void;
    export const sendExperienceInit: (source: MessageEventSource | null, environment: Environment, shopId: string, locale: string, productId: string, variantId: string, quantity: string, teamMember: TeamMember, slot: Date) => void;
}
declare module "host/authentication.host" {
    export const onGetToken: (callback: (event: MessageEvent<any>) => void) => void;
    export const sendToken: (event: MessageEvent<any>, token: string) => void;
}
declare module "host/app-admin" {
    import { Environment } from "types/index";
    export class AppAdmin {
        private iframe;
        private source;
        constructor(iframe: HTMLIFrameElement);
        onInit: (callback: () => void) => void;
        sendInit: (environment: Environment, shopId: string, locale: string) => void;
        onGetToken: (callback: (event: MessageEvent<any>) => void) => void;
        sendToken: (event: MessageEvent<any>, token: string) => void;
        askNext: () => Promise<unknown>;
    }
}
declare module "host/app-experience" {
    import { Environment, TeamMember } from "types/index";
    export class AppExperience {
        iframe: HTMLIFrameElement;
        source: MessageEventSource | null;
        constructor(iframe: HTMLIFrameElement);
        onInit: (callback: () => void) => void;
        sendInit: (environment: Environment, shopId: string, locale: string, productId: string, variantId: string, quantity: string, teamMember: TeamMember, slot: Date) => void;
        askNext: () => Promise<unknown>;
    }
}
declare module "host/index" {
    export * from "host/app-admin";
    export * from "host/app-experience";
}
