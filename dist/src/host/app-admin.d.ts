import { Environment } from '../types';
export declare class AppAdmin {
    private iframe;
    private source;
    constructor(iframe: HTMLIFrameElement);
    onInit: (callback: () => void) => void;
    sendInit: (environment: Environment, shopId: string, locale: string) => void;
    onGetToken: (callback: (event: MessageEvent<any>) => void) => void;
    sendToken: (event: MessageEvent<any>, token: string) => void;
    askNext: () => Promise<unknown>;
}
