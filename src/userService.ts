import { isValidName, isValidAge, normalizeName, isValidArray } from "./userUtils.js";

export type User = {
    id: number,
    name: string,
    age: number
}

let nextId: number = 0;

function createUser(users: User[], name: string, age: number): User {
    if (!isValidAge(age)) {
        throw new TypeError("Invalid age.");
    }

    if (!isValidName(name)) {
        throw new TypeError("Invalid name.");
    }

    if (!isValidArray(users)) {
        throw new TypeError("Invalid array");
    }

    const user: User = {
        id: nextId,
        name: normalizeName(name),
        age
    };

    nextId++;
    users.push(user);
    return user;
}

function getUsers(users: User[]): User[] {
    if (!isValidArray(users)) {
        throw new TypeError("Invalid array");
    }

    return users;
}

function getUsersById(users: User[], id: number): User | null {
    if (!isValidArray(users)) {
        throw new TypeError("Invalid array");
    }

    const userFound = users.find(user => user.id === id);
    if (userFound) {
        return userFound;
    }

    return null;
}

function updateUser(users: User[], id: number, data: Partial<Omit<User, "id">>): User | null {
    const user = getUsersById(users, id);

    if (!user) {
        return null;
    }

    if (data.name !== undefined && !isValidName(data.name)) {
        throw new TypeError("Invalid name.");
    }

    if (data.age !== undefined && !isValidAge(data.age)) {
        throw new TypeError("Invalid age.");
    }

    if (data.name !== undefined) {
        user.name = normalizeName(data.name);
    }

    if (data.age !== undefined) {
        user.age = data.age;
    }

    return user;
}

function deleteUser(users: User[], id: number): User | null {
    const user = getUsersById(users, id);

    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        return user;
    }

    return null;
}