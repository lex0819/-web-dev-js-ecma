'use strict';

//Task01

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(
            `Информация о книге.
название: ${this.title},
автор: ${this.author},
количество страниц: ${this.pages}.`
        );
    }
}
const book01 = new Book('Island', 'Cooper', 50);
book01.displayInfo();

// Task02

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(
            `Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}`
        );
    }
}

const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();

const student2 = new Student('Jane Doe', 17, '11th grade');
student2.displayInfo();
