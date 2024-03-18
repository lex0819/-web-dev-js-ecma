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
    setTimeout(function () {
        console.log(message);
    }, delay);
}

delayedMessage('Сообщение 1', 2000);
delayedMessage('Сообщение 2', 1000);
delayedMessage('Сообщение 3', 3000);
console.log('Конец программы');

// Задание 2
// Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest и отображает полученную информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса. Проверьте, если readyState равен 4 (успешно выполнен запрос) и status равен 200 (успешный статус ответа сервера), то выведите полученные данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().

function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status != 200) {
            // если статус не 200, то произошла
            ошибка;
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(`user: ${xhr.response}`); // response - это ответ
            сервера;
        }
    };
}

// Задание 3 (тайминг 35 минут)
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
        return response.json();
    } catch (error) {
        console.log(error);
    }
};
