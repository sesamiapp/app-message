type AdminHostBaseProps = {
    timestamp: number;
    messageId: string;
    shopId: string;
    locale: string;
    extra?: object;
    getToken: () => Promise<string | null>;
    onHeightChange?: (height: number) => void;
};
declare class AdminHostBase {
    protected messageId: string;
    protected timestamp: number;
    protected source: MessageEventSource | null;
    protected shopId: string;
    protected locale: string;
    protected extra?: object;
    constructor(props: AdminHostBaseProps);
}

declare enum Action {
    INIT = "INIT",
    TOKEN = "TOKEN",
    HEIGHT = "HEIGHT",
    NEXT = "NEXT",
    BACK = "BACK",
    NOTIFICATION = "NOTIFICATION"
}

declare enum AppTarget {
    ADMIN_APP_LOADER = "ADMIN_APP_LOADER",
    ADMIN_APPOINTMENT_DETAILS = "ADMIN_APPOINTMENT_DETAILS",
    EXPERIENCE_INSTANT_BOOKING_FORM = "EXPERIENCE_INSTANT_BOOKING_FORM",
    EXPERIENCE_CONFIRMATION_PAGE = "EXPERIENCE_CONFIRMATION_PAGE"
}

type Resource = {
    id: string | null;
    name: string;
    image: string | null;
    description: string | null;
};

type Appointment = {
    id: string;
    datetime: string;
    serviceId: string | null;
    variantId: string;
    duration: number;
    quantity: number;
    resources: Resource[];
    orderId: string;
    orderName: string | null;
    price: number;
    currency: string;
};

type Message = {
    action: string;
    token?: string;
    payload?: any;
};

declare enum NotificationType {
    SUCCESS = "SUCCESS",
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
}

type AccessToken = {
    userId: string;
    clientId: string;
    email: string;
    exp: number;
    iat: number;
};

declare class AdminHostAppLoader extends AdminHostBase {
    constructor(props: AdminHostBaseProps & {
        onNotification: (message: string, type: NotificationType) => void;
        onBack?: () => void;
    });
}

declare class AdminHostAppointmentDetails extends AdminHostBase {
    constructor(props: AdminHostBaseProps & {
        onNotification: (message: string, type: NotificationType) => void;
    });
}

type AdminClientBaseProps = {
    messageId: string;
    shopId: string;
    locale: string;
};
declare class AdminClientBase {
    protected messageId: string;
    private shopId;
    private locale;
    private token;
    getShopId: () => string;
    getLocale: () => string;
    constructor(props: AdminClientBaseProps);
    getToken: () => Promise<string | null>;
}

declare class AdminAppLoader extends AdminClientBase {
    static init: () => Promise<AdminAppLoader>;
    showNotification: (message: string, type: NotificationType) => void;
    navBack: () => void;
}

declare class AdminAppointmentDetails extends AdminClientBase {
    private appointmentId;
    getAppointment: () => string;
    constructor(props: AdminClientBaseProps & {
        appointmentId: string;
    });
    static init: () => Promise<AdminAppointmentDetails>;
    showNotification: (message: string, type: NotificationType) => void;
}

type ExperienceHostBaseProps = {
    url: string;
    sessionId: string;
    shopId: string;
    productId: string;
    variantId: string;
    quantity: number;
    resources: Resource[];
    locale: string;
    timezone: string;
    slot: Date;
    extra?: object;
    onHeightChange?: (height: number) => void;
};
declare class ExperienceHostBase {
    protected url: string;
    protected messageId: string;
    protected source: MessageEventSource | null;
    protected sessionId: string;
    protected shopId: string;
    protected productId: string;
    protected variantId: string;
    protected quantity: number;
    protected resources: Resource[];
    protected locale: string;
    protected timezone: string;
    protected slot: Date;
    protected extra?: object;
    constructor(props: ExperienceHostBaseProps);
    protected getBaseURL: () => string;
}

declare class ExperienceHostConfirmationPage extends ExperienceHostBase {
    askForDone: () => Promise<boolean> | null;
    getURL: () => string;
}

declare class ExperienceHostInstantBookingForm extends ExperienceHostBase {
    askForConfirm: () => Promise<boolean> | null;
    getURL: () => string;
}

type ExperienceClientBaseProps = {
    messageId: string;
    sessionId: string;
    shopId: string;
    productId: string;
    variantId: string;
    quantity: number;
    resources: Resource[];
    locale: string;
    timezone: string;
    slot: Date;
};
declare class ExperienceClientBase {
    protected messageId: string;
    private sessionId;
    private shopId;
    private productId;
    private variantId;
    private quantity;
    private resources;
    private locale;
    private timezone;
    private slot;
    getSessionId: () => string;
    getShopId: () => string;
    getProductId: () => string;
    getVariantId: () => string;
    getQuantity: () => number;
    getResources: () => Resource[];
    getLocale: () => string;
    getTimezone: () => string;
    getSlot: () => Date;
    constructor(props: ExperienceClientBaseProps);
}

declare class ExperienceInstantBookingForm extends ExperienceClientBase {
    static init: () => Promise<ExperienceInstantBookingForm>;
    onConfirm: (callback: () => void) => void;
    acceptConfirm: () => void;
    rejectConfirm: () => void;
}

declare class ExperienceConfirmationPage extends ExperienceClientBase {
    private appointmentId;
    getAppointmentId: () => string;
    constructor(props: ExperienceClientBaseProps & {
        appointmentId: string;
    });
    static init: () => Promise<ExperienceConfirmationPage>;
    onDone: (callback: () => void) => void;
    acceptDone: () => void;
    rejectDone: () => void;
}

export { type AccessToken, Action, AdminAppLoader, AdminAppointmentDetails, AdminHostAppLoader, AdminHostAppointmentDetails, AppTarget, type Appointment, ExperienceConfirmationPage, ExperienceHostConfirmationPage, ExperienceHostInstantBookingForm, ExperienceInstantBookingForm, type Message, NotificationType, type Resource };
