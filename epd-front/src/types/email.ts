export type PhishingStatus = 'yes' | 'no' | 'pending' | 'error';

export type Email = {
    file: string,
    uuid: string,
    date_created: Date,
    data: any,
    phishing: PhishingStatus,
}

export type EmailDetail = {
    file: string,
    uuid: string,
    date_created: Date,
    features: any,
    data: any,
    phishing: PhishingStatus,
}