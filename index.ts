let str: string;

str = "0";

let g = new Date();

let score: number | string; //union

let myScore0: number | string = 10;

type Score = number | string;
const myScore: Score = '10';

let k = JSON.parse('6'); // any
let n:number = JSON.parse('6'); // number
let st:string = JSON.parse('jsdc'); // string

let isOd: boolean;

if ( k % 2 === 0) {
    isOd = false
} else {
    isOd = true
}

