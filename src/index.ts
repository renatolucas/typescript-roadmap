import type { User } from "./userService.js";

const users: Partial<User>[] = [];
const user1: Partial<User> = { name: 'Jhon', age: 30 };
const user2: Partial<User> = { name: 'Robert', age: 18 };
const user3: Partial<User> = { name: 'Leo', age: 25 };
const user4: Partial<User> = { name: 'Maths', age: 44 };
const user5: Partial<User> = { name: 'Robert', age: 68 };

users.push(user1, user2, user3, user4, user5);
console.table(users)