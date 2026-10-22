import { type Order } from "./types.js";
import { ORDER_STATUS } from "./types.js";

export function getOrderById(id: number, orders: Order[]): Order | undefined {
    return orders.find(order => order.id === id);
}

export function calculateRevenue(orders: Order[]): number {
    const paidOrders = orders.filter(order => order.status === ORDER_STATUS.PAID);
    return paidOrders.reduce((acc, order) => acc + order.amount, 0);
}