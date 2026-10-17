import { User, createUser } from "./userService.js";

const users: User[] = [];

try {
    console.log("Creating users...");
    console.log(createUser(users, 'Jhon', 30));
    console.log(createUser(users, 'Robert', 18));
    console.log(createUser(users, 'Leo', 25));
    console.log(createUser(users, 'Matt', 44));
    console.log(createUser(users, 'Sophie', 24));
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error('Process error: ', e.message);
    }

}



