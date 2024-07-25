import { Environment } from '../types';
export declare class SesamiAdmin {
    private clientId;
    private environment;
    private shopId;
    private locale;
    private token;
    getEnvironment: () => Environment;
    getShopId: () => string;
    getLocale: () => string;
    constructor(clientId: string, environment: Environment, shopId: string, locale: string);
    static init: (clientId: string) => Promise<SesamiAdmin>;
    getToken: () => Promise<unknown>;
}
