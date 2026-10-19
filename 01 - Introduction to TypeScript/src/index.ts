import type { User } from "./userService.js";

import {
    createUser,
    getUsers,
    getUsersById,
    updateUser,
    deleteUser
} from "./userService.js";

const users: User[] = [];

try {
    console.log("Creating users...");
    console.log(createUser(users, 'Jhon', 30));
    console.log(createUser(users, 'Robert', 18));
    console.log(createUser(users, 'Leo', 25));
    console.log(createUser(users, 'Matt', 44));
    console.log(createUser(users, 'Sophie', 24));

    console.log("Getting users...");
    console.table(getUsers(users));

    console.log("Getting user by id...");
    console.log(getUsersById(users, 3));

    console.log("Update an user...");
    console.log(updateUser(users, 1, { age: 28 }));

    console.log("Delete an user...");
    console.log(deleteUser(users, 4));

    console.table(users);

    //Error Testing
    console.log("Errors...");
    console.log(createUser(users, '', 5));

} catch (e: unknown) {
    if (e instanceof Error) {
        console.error('Process error:', e.message);
    }

}



