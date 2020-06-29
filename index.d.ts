export interface IAllBase {
    affiliate_id?: string;
    sub1?: string;
    sub2?: string;
    sub3?: string;
    sub4?: string;
    sub5?: string;
    adv1?: string;
    adv2?: string;
    adv3?: string;
    adv4?: string;
    adv5?: string;
    disable_fingerprinting?: boolean;
}

export interface IClickBase extends IAllBase {
    coupon_code?: string;
    uid?: string;
    source_id?: string;
    creative_id?: string;
    do_not_track?: boolean;
}

export interface IClickOptionsTransactionId extends IClickBase {
    offer_id?: string;
    transaction_id: string;
}

export interface IClickOptionsOfferid extends IClickBase {
    offer_id: string;
    transaction_id?: string;
}

export function click(options: IClickOptionsTransactionId | IClickOptionsOfferid): Promise<string>;

export interface IConversionOptions extends IAllBase {
    transaction_id?: string;
    offer_id?: string;
    advertiser_id?: string;
    aid?: string;
    adv_event_id?: string;
    coupon_code?: string;
    amount?: string;
    order?: string;
    order_id?: string;
    parameters?: { [key: string]: any };
}

export interface IConversionReturn {
    transaction_id: string;
    conversion_id: string;
    html_pixel?: string;
}

export function conversion(options: IConversionOptions): Promise<IConversionReturn>;

export interface IImpressionOptions extends IAllBase {
    offer_id?: string;
    source_id?: string;
    creative_id?: string;
}

export function impression(options: IImpressionOptions): Promise<string>;

export function getTransactionId(offerid: string): string | undefined;

export function urlParameter(getvar: string): string | undefined;

export function configure(options: { tracking_domain: string }): void;

export as namespace EF;
