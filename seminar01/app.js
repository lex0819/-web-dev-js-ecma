'use strict';

// Task 1
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Task 2
const createCounter = () => {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count > 0 ? count-- : 0;
        },
        getCount() {
            return count;
        },
    };
};

const counter = createCounter();
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());

//Task 3

const rootElement = document.getElementById('root');

function findElementByClassSimple(mainClass, innerClass) {
    const nodes = mainClass.getElementsByClassName(innerClass);
    return nodes.length > 0 ? nodes[0] : null;
}

console.log(findElementByClassSimple(rootElement, 'subclass'));
console.log(findElementByClassSimple(rootElement, 'my-class'));

function findElementByClass(mainClass, innerClass) {
    let result = null;

    recursionFind(mainClass, innerClass);
    function recursionFind(mainClass, innerClass) {
        const childsList = mainClass.children;

        for (let child of childsList) {
            if (!result) {
                if (child.className === innerClass) {
                    result = child;
                    break;
                }
                recursionFind(child, innerClass);
            }
        }
    }

    return result;
}

console.log(findElementByClass(rootElement, 'subclass'));
console.log(findElementByClass(rootElement, 'my-class'));
