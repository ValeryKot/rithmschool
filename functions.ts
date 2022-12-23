const fn1 = (num: number): string => {
    return String(num);
}

type Callback = (num: number) => string;

function fn2(cb?: Callback) {
    if (cb === undefined) {
        cb = String;
    }
    cb(12);
}

function createPoint(x = 0, y = 0): [number, number] {
    return [x, y]
}

createPoint(10);

function fn3(...nums: number[]): string {
    return nums.join('-');
}

interface Printable {
    label: string;
}

function printReport(obj: Printable): void {
    console.log(obj.label);
}

const drink = {
    label: 'pepsi',
    price: 90,
}

printReport(drink);

const phone = {
    label: 'Huawei',
    category: 'smartphone',
    price: 1150,
}

printReport(phone);

printReport({ label: '', price: 100 }); // так не сработает, только переменные интерфейса



function pickCard(x: number): { suit: string; card: number };
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x): any {
    if (typeof x === 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x === 'number') {
        return { suit: '', card: x % 13 };
    }
}

pickCard(7);
pickCard([{ suit: 'abc', card: 5 }]);
