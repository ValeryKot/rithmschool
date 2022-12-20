const valueFactory = (x: number) => x;
const myValue = valueFactory(11);

type TypeFactory<X> = X; //передает параметр, а не значение!!
type MyType = TypeFactory<string>

interface ValueContainer<Value> {
    value: Value;
}

type StringContainer = ValueContainer<string>

const x: StringContainer = {
    value: '1',
}

class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {    // вместо Type пишут T - заменяет два предыдущих класса!!
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['1', '2', 's'])
new ArrayOfAnything<number>([1, 3, 5])

function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
function printAnything<T>(arr: T[]): void {   // аналогична двум предыдущим функциям
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<number>([1, 2, 24]);


function fillArray<T>(len: number, elem: T): T[] {
    return new Array<T>(len).fill(elem); // создает массив длинной len и заполняет его elem
}

const arr1 = fillArray<string>(10, '*');
const arr2 = fillArray<number>(10, 7);

interface Array<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callback: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
    ): U;
}

interface LengthWise {
    length: number;
}

function printLength<T extends LengthWise>(arg: T): number {
    return arg.length;
}

// printLength(1);
printLength('1');
printLength({ a: 1, length: 1 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const myObj = {
    a: 1,
    b: 2,
    c: 3,
}
//  K === 'a' | 'b' | 'c'
getProperty(myObj, 'a');
