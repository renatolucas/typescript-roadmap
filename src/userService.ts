
type User = {
    id: number,
    name: string,
    age: number
}

let nextId: number = 0;

function createUser(users: User[], name: string, age: number): User {
    const user: User = {
        id: nextId,
        name,
        age
    };
    nextId++;
    users.push(user);
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

function updateUser(users: User[], id: number, data: Partial<Omit<User, "id">>): User | null {
    const user = getUsersById(users, id);

    if (user) {
        if (data.name !== undefined) {
            user.name = data.name;
        }

        if (data.age !== undefined) {
            user.age = data.age;
        }

        return user;
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