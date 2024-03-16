'use strict';

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

function getPrototypeChain(obj) {
    const prototypeChain = [];

    let currentObj = obj;

    while (currentObj !== null) {
        prototypeChain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }

    return prototypeChain;
}

// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: 'music series',
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
};

// Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: 'Bluees-1',
    power: 250,
    batterySize: 2500,
    workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

const prototypeChain = getPrototypeChain(Blues);
console.log(prototypeChain);

// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    }
}
const person1 = new Person('John', 25);
person1.introduce();

// Задание 3 (call, apply 20 минут)
// Напишите конструктор объекта BankAccount, который будет представлять банковский счет. Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число). Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму, если на счету есть достаточно средств. Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.
// (Пример )
// const account1 = new BankAccount("1234567890", 1000); console.log(account1.getBalance()); // Вывод: 1000 account1.deposit(500);
// console.log(account1.getBalance()); // Вывод: 1500 account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300 account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        } else {
            console.log('Недостаточно средств на счете.');
        }
    }
    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount('1234567890', 1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
account1.withdraw(2000);

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
// (Пример использования)
// const animal1 = new Animal("Животное"); animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка"); dog1.speak(); // Вывод: Животное Бобик издает звук. console.log(dog1.breed); // Вывод: Дворняжка dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

class Animal {
    constructor(name = '') {
        this.name = name;
    }
    speak() {
        console.log(`Животное ${this.name} издает звук`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal1 = new Animal();
animal1.speak();
const dog1 = new Dog('Бобик', 'Дворняжка');
dog1.speak();
console.log(dog1.breed);
dog1.fetch();

// Задание 5 (40 минут)
// Создайте класс Product, который будет представлять товар в магазине.
// У товара должны быть следующие свойства:
// • name (строка) - имя товара.
// • price (число) - цена товара за одну единицу.
// Создайте класс ShoppingCart, представляющий корзину интернет-магазина.
// Конструктор класса ShoppingCart должен принимать два параметра:
// • customerName (строка) - имя покупателя.
// • initialTotalCost (число) - начальная общая стоимость заказа
// (может быть равна 0, если корзина пуста).
// У класса ShoppingCart должен быть метод addItem (product, quantity),
// который позволяет добавить товар в корзину. Метод должен принимать два параметра:
// • product (объект класса Product) - товар, который добавляется в корзину.
// • quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину. Если quantity не указано, считается, что добавляется одна единица товара.
// У класса ShoppingCart должен быть метод getCurrentTotalCost (), который возвращает текущую общую стоимость заказа.
// У класса ShoppingCart должен быть метод checkout (), который оформляет заказ и выводит сообщение с общей стоимостью заказа и благодарностью за покупку.
// Формат вывода сообщения:
// "Заказ оформлен для {имя покупателя). Общая стоимость заказа: (общая стоимость! рублей. Спасибо за покупку!".

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.items = [];
        this.cart = [];
    }

    addItem(product, quantity = 1) {
        for (let i = 0; i < quantity; i++) {
            this.items.push(product);
        }
    }

    addProduct(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        this.cart.push({ product, quantity });
    }

    getCurrentTotalCostbyItems() {
        return this.items.reduce((accum, product) => accum + product.price, 0);
    }

    getCurrentTotalCostbyCart() {
        return this.totalCost;
    }

    checkoutbyItems() {
        console.log(
            `Заказ оформлен для ${
                this.customerName
            }. Общая стоимость заказа: ${this.getCurrentTotalCostbyItems()}. Спасибо за покупку!`
        );
    }

    checkoutbyCart() {
        console.log('Cart is', this.cart);
        console.log(
            `Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost}. Спасибо за покупку!`
        );
    }
}

const product01 = new Product('iphone', 1000);
const product02 = new Product('samsung', 500);

const customer = new ShoppingCart('Lex');
customer.addItem(product01, 2);
customer.addProduct(product01, 2);

customer.addItem(product02, 3);
customer.addProduct(product02, 3);

customer.checkoutbyItems();
customer.checkoutbyCart();
