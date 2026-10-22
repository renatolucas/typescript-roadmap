import type { AppConfig, Order } from "./types.js";
import { getOrderById, calculateRevenue, describeOrder, validateOrderId } from "./orderProcessor.js";
import { ORDER_STATUS } from "./types.js"

const appConfig = {
    currency: 'BRL',
    taxRate: 0.05
} satisfies AppConfig

const orders: Order[] = [
    {
        id: 1,
        customer: "Alice",
        amount: 150,
        status: ORDER_STATUS.PENDING
    },
    {
        id: 2,
        customer: "Renato",
        amount: 300,
        status: ORDER_STATUS.PAID
    },
    {
        id: 3,
        customer: "Ana",
        amount: 80,
        status: ORDER_STATUS.CANCELLED
    }
];

const emptyOrders: Order[] = [];

const order = getOrderById(99, orders);

if (order !== undefined) {
    console.log(order.customer);
} else {
    console.log("Order not found");
}

const existingOrder = getOrderById(1, orders);

if (existingOrder !== undefined) {
    console.log(existingOrder.customer);
} else {
    console.log("Order not found");
}

console.log(calculateRevenue(orders));

for (const order of orders) {
    console.log(describeOrder(order));
}

console.log(validateOrderId(0));
console.log(validateOrderId(-1));
console.log(validateOrderId(1));
console.log(validateOrderId('123'));

console.log(calculateRevenue(emptyOrders));
