'use strict';

// Задание 1 (тайминг 20 минут)

// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.

// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,2, 3, 4, 5, 6]

const arr01 = [1, 2, 3];
const arr02 = [4, 5, 6];

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArrays(arr01, arr02));

// 2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.

// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

const removeDuplicates = (...theArgs) =>
    theArgs.filter((value, index) => theArgs.indexOf(value) === index);

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.

const getEvenNumbers = (numbers) => numbers.filter((val) => val % 2 === 0);

const arr03 = [1, 2, 3, 2, 4, 1, 5, 14, 56, 3, 149];

console.log(getEvenNumbers(arr03));

console.log(arr03);

// 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.

const calculateAverage = (arrNums) =>
    arrNums.reduce((accum, val) => accum + val, 0) / arrNums.length;

const arr04 = [1, 2, 3, 2, 4, 1, 5, 0];

console.log(calculateAverage(arr04));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

function capitalizeFirstLetter(stringIn) {
    const arrWords = stringIn.split(' ');

    const arrWordsCapitalize = arrWords.map(
        (elem) => elem.charAt(0).toUpperCase() + elem.slice(1)
    );

    const stringOut = arrWordsCapitalize.join(' ');

    return stringOut;
}

const str = 'peace, work, may!';
console.log(capitalizeFirstLetter(str));

const capitalizeFirstLetter1 = (stringIn) =>
    stringIn
        .split(' ')
        .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
        .join(' ');

const str1 = 'girl, boy, friedns, loves.';
console.log(capitalizeFirstLetter1(str1));

// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.

function createCalculator(numInitial) {
    let value = numInitial;
    const mathObj = {
        add: function (num) {
            value += num;
        },
        subtract: function (num) {
            value -= num;
        },
        getValue() {
            return value;
        },
    };
    return mathObj;
}

function createCalculator(numInitial) {
    let value = numInitial;
    return {
        add(num) {
            value += num;
        },
        subtract(num) {
            value -= num;
        },
        getValue() {
            return value;
        },
    };
}

const calculator = createCalculator(5);
console.log(calculator.getValue());
calculator.add(15);
console.log(calculator.getValue());
calculator.add(40);
console.log(calculator.getValue());
calculator.subtract(7);
console.log(calculator.getValue());
calculator.subtract(10);
console.log(calculator.getValue());

// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(firstname) {
    return function () {
        return `Hello, ${firstname}`;
    };
}

const greeting = createGreeting('John');
console.log(greeting());

const createGreeting1 = (firstname) => () => `Hello, ${firstname}`;

const greeting1 = createGreeting1('John');
console.log(greeting1());

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8); console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function createPasswordChecker(passLenMax) {
    return function (pass) {
        return pass.length <= passLenMax;
    };
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('newpassword'));
console.log(isPasswordValid('secret'));

const createPasswordChecker1 = (passLenMax) => (pass) =>
    pass.length <= passLenMax;

const isPasswordValid1 = createPasswordChecker1(8);
console.log(isPasswordValid1('newpassword'));
console.log(isPasswordValid1('secret'));

// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3) console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(num) {
    const strNum = num.toString();
    if (strNum.length === 1) {
        return Number.parseInt(strNum[0]);
    }
    return (
        Number.parseInt(strNum[0]) + sumDigits(Number.parseInt(strNum.slice(1)))
    );
}

console.log(sumDigits(123));
console.log(sumDigits(456789));

const sumDigits1 = (num) => {
    const strNum = num.toString();
    return strNum.length === 1
        ? Number.parseInt(strNum[0])
        : Number.parseInt(strNum[0]) +
              sumDigits(Number.parseInt(strNum.slice(1)));
};

console.log(sumDigits1(123));
console.log(sumDigits1(456789));

// 123 % 10 = 3
// Math.floor(123 / 10)
// 12 % 10 = 2
// Math.floor(12 / 10)

function sumDigits2(num) {
    if (num % 10 === num) {
        return num;
    }
    return (num % 10) + sumDigits2(Math.floor(num / 10));
}

console.log(sumDigits2(123));
console.log(sumDigits2(456789));

const sumDigits3 = (num) =>
    num % 10 === num ? num : (num % 10) + sumDigits3(Math.floor(num / 10));

console.log(sumDigits3(123));
console.log(sumDigits3(456789));
