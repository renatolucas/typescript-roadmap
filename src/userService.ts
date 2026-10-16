
type User = {
    id: number,
    name: string,
    age: number
}

let nextId: number = 0;

function createUser(users: User[], user: User): User {
    user.id = nextId;
    users.push(user);
    nextId++;
    return user;
}

function getUsers(users: User[]): User[] {
    return users;
}

function getUsersById(users: User[], id: number): User | null {
    const userFound = users.find(user => user.id === id);
    if (userFound) {
        return userFound;
    }

    return null;
}

function updateUser(users: User[], id: number, data: User): User | null {
    const user = getUsersById(users, id);

    if (user) {
        Object.assign(user, data, { id: user.id });
    }

    return null;
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