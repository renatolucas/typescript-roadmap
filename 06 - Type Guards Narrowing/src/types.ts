export type PaymentReceived = {
    type: "payment.received",
    paymentId: string,
    amount: number,
    discount?: number
}

export type PaymentRefunded = {
    type: "payment.refunded",
    paymentId: string,
    reason: string
}

export type WebhookEvent = PaymentReceived | PaymentRefunded;