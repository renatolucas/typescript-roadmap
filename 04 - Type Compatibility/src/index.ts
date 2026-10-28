interface User {
    id: number,
    name: string
}

interface Customer {
    id: number,
    name: string
}

interface Employee {
    id: number,
    name: string,
    department: string
}

interface UserProfile {
    id: number,
    name: string,
    email?: string
}

const user: User = {
    id: 1,
    name: 'Renato'
}


const customer: Customer = {
    id: 1,
    name: 'Jhon'
}

const employee: Employee = {
    id: 1,
    name: 'Marc',
    department: 'IT'
}

const userProfile: UserProfile = {
    id: 1,
    name: 'Matt'
}

//Structural Typing
const userST: User = customer;
const userSTE: User = employee;
//const employeeST: Employee = user; //Error
console.log(userST);
console.log(userSTE);
