import type { Order } from "./types.js";

export function getOrderById(id: number, orders: Order[]): Order | undefined {
    return orders.find(order => order.id === id);
}