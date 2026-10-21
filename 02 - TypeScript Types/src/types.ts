export type OrderStatus =
    (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

export const ORDER_STATUS = {
    PENDING: "pending",
    PAID: "paid",
    CANCELLED: "cancelled"
} as const

export interface Order {
    id: number;
    customer: string;
    amount: number;
    status: OrderStatus;
}

export interface AppConfig {
    currency: string;
    taxRate: number;
}

