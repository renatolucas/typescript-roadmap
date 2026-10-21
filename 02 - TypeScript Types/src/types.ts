export type OrderStatus = "pending" | "paid" | "cancelled";

export interface Order {
    id: number;
    customer: string;
    amount: number;
    status: OrderStatus;
}
