export type OrderStatus = "pending" | "paid" | "cancelled";

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