type MyObj = {
    a: number;
    b: number;
    c: string;
};

interface MyObject {
    readonly a: number; // неперезаписываемый элемент
    b: number;
    c?: string; //необязательное поле
    // print?: () => number; //необязательное поле, метод
    // [key: string]: string | number; // позволяет добавлять другие ключи
};

const obj: MyObj = { a: 1, b: 2, c: 'sdsd' };
const obj2: MyObject = { a: 1, b: 2, c: 'sdsd' };

const obj1: object = {};
const obj3: MyObject = {
    a: 1,
    b: 2,
    // c:'',
}

// obj3.a = 23; будет ошибка, т.к. элемент неперезаписываемый
obj3.b = 23;  // здесь работает 


interface IPerson {
    name: string;
}

interface IPerson { // !!! type дублировать нельзя !!!
    age: number;
}

const john: IPerson = {
    name: 'John',
    age: 40
}

interface Account { // раньше был конфликт с DOM, поэтому именовали IAccount
    login: string;
}

const myAcc: Account = {
    login: 'michey'
}

interface IAccount {
    email: string;
    login: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string;
}

const johny: IDeveloper = {
    name: 'John',
    age: 40,
    email: '',
    login: '',
    active: false,
    skills: ['Javascript', 'TypeScript'],

}

type Person = {
    name: string;
    age: number;
}

type MyAccount = {
    email: string;
    login: string;
    active: boolean;
}

type MyDeveloper = {
    skills: string[];
    level?: string;
}

type FrontendDeveloper = Person & MyAccount & MyDeveloper;

const devArr: FrontendDeveloper[] = []; 