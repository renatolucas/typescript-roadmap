type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

const products = [
    {
        id: 1,
        name: "Notebook",
        price: 1000,
        quantity: 3
    },

    {
        id: 2,
        name: "Mouse",
        price: 80,
        quantity: 3
    },

    {
        id: 3,
        name: "Monitor",
        price: 500,
        quantity: 1
    }
];

function calculateInventoryValue(products: Product[]) {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
}

console.log(calculateInventoryValue(products));

