'use strict';

//Task01

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Name: ${this.name}
Department: ${this.department}`);
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();

const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();

// Task02

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber, products = []) {
        this.orderNumber = orderNumber;
        this.products = Array.apply(null, products); //copy array to array
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        return this.products.reduce((accum, item) => accum + item.price, 0);
    }
}

const order = new Order(12345);
const product1 = new Product('Phone', 500);
order.addProduct(product1);
const product2 = new Product('Headphones', 100);
order.addProduct(product2);
console.log(order.getTotalPrice());
