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

//Structural Typing
const userST: User = customer;
const userSTE: User = employee;
//const employeeST: Employee = user; //Error
console.log(userST);
console.log(userSTE);

//Excess Property Checks
function printUser(user: User): void {
    console.log(user.id);
    console.log(user.name);
}

//printUser({ id: 6, name: 'Kojima', age: 63 }); //Error
const userPC = {
    id: 6,
    name: 'Kojima',
    age: 63
}

printUser(userPC);

//Optional Properties
const userProfile: UserProfile = {
    id: 1,
    name: 'Matt'
}
const userProfileEmail: UserProfile = {
    id: 1,
    name: 'Baldur',
    email: 'baldur@email.com'
}

interface CompleteProfile {
    id: number,
    name: string,
    email: string
}

//const testOP1: CompleteProfile = userProfile; //Error
//const testOP2: CompleteProfile = userProfileEmail; //Error

