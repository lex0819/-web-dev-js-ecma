'use strict';

// Task01

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUserData(id) {
    try {
        const response = await fetch(`${url}/${id}`);

        if (response.status !== 200) {
            // return response.statusText;
            throw new Error(response.statusText);
        }
        const user = await response.json();
        return user;
    } catch (err) {
        console.error(err.message);
    }
}

let user;

(async () => {
    user = await getUserData(3);
    console.log(user);
})();

// Task02

// // Example
// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'John Smith',
//         age: 30,
//         email: 'john@example.com',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const url02 = 'https://jsonplaceholder.typicode.com/users';

async function saveUserData(user) {
    const response = await fetch(url02, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    console.log(response.json());
    return response;
}

const user02 = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com',
};

saveUserData(user02)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch((error) => {
        console.log(error.message);
    });

// Task03

const changeStyleDelayed = (elementId, delay) => {
    const elem = document.getElementById(elementId);
    setTimeout(() => {
        elem.style.color = '#f00';
    }, delay);
};

changeStyleDelayed('myElement', 2000);
