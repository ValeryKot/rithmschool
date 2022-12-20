// списки
const arr: string[] = []; // объявляем тип - массив строк
const arr1: Array<number> = [1, 4, 7] // объявляем массив номеров

const arr2: string[][] = [];   // массив строк будет элементами основного массива

const arr3: (string | number)[] = []; // массив строк и цифр
// аналогичная запись через тип
type MyType = (string | number);
const arr31: MyType[] = [];



//кортежи (tuple) (фиксированное кол-во эл-тов)

const tuple1: [string, boolean, number] = ['abc', true, 0];
// csv files

const example: [string, string, number][] = [['str', 'st', 32]]; //массив кортежей
// аналог через псевдонимы
type SimpleCsv = [string, string, number];
const example2: SimpleCsv[] = [['str', 'st', 32]];

