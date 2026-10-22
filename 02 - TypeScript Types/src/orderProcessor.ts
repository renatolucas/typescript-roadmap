import { type Order } from "./types.js";
import { ORDER_STATUS } from "./types.js";

export function getOrderById(id: number, orders: Order[]): Order | undefined {
    return orders.find(order => order.id === id);
}

export function calculateRevenue(orders: Order[]): number {
    const paidOrders = orders.filter(order => order.status === ORDER_STATUS.PAID);
    return paidOrders.reduce((acc, order) => acc + order.amount, 0);
}

export function describeOrder(order: Order): string {
    switch (order.status) {
        case ORDER_STATUS.PENDING:
            return "Pending";
        case ORDER_STATUS.PAID:
            return "Paid";
        case ORDER_STATUS.CANCELLED:
            return "Cancelled";
        default:
            const statusNever: never = order.status;
            return statusNever;
    }

}

export function validateOrderId(value: unknown): number | null {
    if (typeof value === "number" && Number.isInteger(value) && value > 0) {
        return value;
    }

    return null;
}