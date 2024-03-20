'use strict';

console.log('Start algorithm!');
setTimeout(function timeout() {
    console.log('This will be printed after 5 seconds!');
}, 5000);
console.log('End synchronous code.');

// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().

//    Ожидаемый результат
// Сообщение 2
//Сообщение 1
//Сообщение 3
//Конец программы

function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayedMessage('Сообщение 1', 2000);
delayedMessage('Сообщение 2', 1000);
delayedMessage('Сообщение 3', 3000);
console.log('Конец программы');
delayedMessage('Конец программы', 4000);

// Задание 2 (20 минут)
// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.
// const tasks = [
//     { name: 'task 1', time: 1000 },
//     { name: 'task 2', time: 2000 },
//     { name: 'task 3', time: 3000 },
//     { name: 'task 4', time: 4000 },
//     { name: 'task 5', time: 5000 },
// ];

const allTasks = (listTasks, interval = 0) => {
    let delay = interval;
    listTasks.forEach((task) => {
        setTimeout(() => {
            console.log(`${task.name} ${task.time}`);
        }, delay);
        delay += task.time;
    });
};

const tasks = [
    { name: 'task 1', time: 1000 },
    { name: 'task 2', time: 2000 },
    { name: 'task 3', time: 3000 },
    { name: 'task 4', time: 4000 },
    { name: 'task 5', time: 5000 },
];

allTasks(tasks, 0);

// Задание 3
// Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest и отображает полученную информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса. Проверьте, если readyState равен 4 (успешно выполнен запрос) и status равен 200 (успешный статус ответа сервера), то выведите полученные данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью loadData('https://jsonplaceholder.typicode.com/users').

function loadData(url) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

loadData('https://jsonplaceholder.typicode.com/users');

// Задание 4
// Переписать задание 3 с XMLHttpRequest на fetch

const loadDataFetch = (url) => {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status} ${response.statusText}`);
        })
        .then((data) => console.log(data))
        .catch((err) => console.error(`Connection error ${err.message}`));
};

loadDataFetch('https://jsonplaceholder.typicode.com/users');

// Задание 5 (40 минут)
// Вы разрабатываете простой веб-интерфейс для отображения списка пользователей с сервера и возможности сортировки этих пользователей по имени. У вас уже есть функциональность для получения списка пользователей с сервера и отображения их в виде списка на странице.
// Ваша задача - реализовать сортировку пользователей по имени и добавить кнопку, при нажатии на которую список пользователей будет автоматически сортироваться по имени.
// https://jsonplaceholder.typicode.com/users

const userList = document.querySelector('#root');

const renderUserList = (users) => {
    userList.innerHTML = '';
    users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <h2>${user.name}</h2>
                <p>${user.id}</p>
                <p>${user.email}</p>
            </div>
        `;
        userList.append(listItem);
    });
};

const sortUsersByName = (users) => {
    users.sort((a, b) => a.name.localeCompare(b.name));
};

const sortUsersByNameExtendet = (users) => {
    users.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA > nameB) {
            return 1;
        }
        if (nameA < nameB) {
            return -1;
        }
        return 0;
    });
};

const sortUsersById = (users) => {
    users.sort((a, b) => a.id - b.id);
};

const loadDataUsers = (url) => {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status} ${response.statusText}`);
        })
        .then((data) => {
            renderUserList(data);
            const sortBtnName = document.querySelector('#sortName');
            sortBtnName.addEventListener('click', (ev) => {
                sortUsersByName(data);
                renderUserList(data);
            });
            const sortBtnId = document.querySelector('#sortId');
            sortBtnId.addEventListener('click', (ev) => {
                sortUsersById(data);
                renderUserList(data);
            });
        })
        .catch((err) => console.error(`Connection error ${err.message}`));
};

const loadDataUsersAsync = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        renderUserList(data);
        const sortBtnName = document.querySelector('#sortName');
        sortBtnName.addEventListener('click', (ev) => {
            // sortUsersByName(data);
            sortUsersByNameExtendet(data);
            renderUserList(data);
        });
        const sortBtnId = document.querySelector('#sortId');
        sortBtnId.addEventListener('click', (ev) => {
            sortUsersById(data);
            renderUserList(data);
        });
    } catch (err) {
        console.error(`Connection error ${err.message}`);
    }
};

loadDataUsersAsync('https://jsonplaceholder.typicode.com/users');

// Задание 6 (тайминг 35 минут)
// Напишите функцию getData, которая делает асинхронный запрос к API и возвращает данные в виде объекта.
// Внутри функции происходит асинхронный запрос к API с помощью функции fetch. Затем, с использованием оператора await, ожидается ответ от сервера и его парсинг в формате JSON с помощью метода response.json(). Полученные данные возвращаются из функции.
// В случае возникновения ошибки при выполнении асинхронных операций, используется конструкция try/catch для обработки и отображения ошибки.
// В функции main вызывается функция getData с использованием await, чтобы получить данные асинхронно. Полученные данные выводятся в консоль. Если происходит ошибка, она ловится и выводится сообщение об ошибке. Функция main также объявлена как асинхронная с использованием ключевого слова async. В конце вызывается функция main для запуска процесса получения данных.

const getData = async (url) => {
    try {
        const response = await fetch(url);
        // network error in the 4xx–5xx range
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        // use response here if we didn't throw above
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
};

const url = 'https://jsonplaceholder.typicode.com/comments/100';
let result;

async function main() {
    result = await getData(url);
    console.log(result);
}

main();
