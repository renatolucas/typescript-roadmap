export type OrderStatus = "pending" | "paid" | "cancelled";

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

