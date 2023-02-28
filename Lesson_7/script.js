// const numbers = [1, 2, 3, 4];

// function add(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total += value
//     }
//     return total
// }

// function sum(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total *= value
//     }
//     return total
// }

// function foo(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total -= value
//     }
//     return total
// }
// function result(arr) {
//     let total = 0;
//     for (const value of arr) {
//         total /= value
//     }
//     return total
// }

// add(numbers)


// const numbers = [1, 2, 3, 4];


// function foo(arr, callback) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     };
//     return total;
// }

// const add = (a, b) => a + b;
// const sum = (a, b) => a * b;

// console.log(foo(numbers, add));
// console.log(foo(numbers, sum));


// function foo(a, b) {
//     console.log(a);
//     console.log(b);
// }
// foo(10, 20)

// declaration
// foo(2,3)
// function foo(a, b) {
// console.log(a,b);
// }


// //expression
// const boo = function(a,b){
//     console.log(arguments);
// }
// boo(10, 12, 1, 2, 3, 5);
// boo(10, 12, 1, 2, 3, 5, 2, 3, 5);
// // // arrow function 
// const arrow = (...args) => {
//     console.log(args);
// }
// arrow(10, 12, 1, 2, 3, 5);
// arrow(10, 12, 1, 2, 3, 5, 2, 3, 5);



// const user = {
//     nameUser: 'Test name',
//     say(){
//         console.log(this);
//         console.log(`Hello ${this.nameUser}`);
//     },
//     sayHello: () => {
//         console.log(this);
//         console.log(`Hello ${this.nameUser}`);
//     }
// }
// user.say()
// user.sayHello()
// console.log(this);




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = [];

// for (const value of numbers) {
//     if (!(value % 2)) {
//             result.push(value)
//         }
// }

// console.log(result);

// const result = numbers.filter(a => !(a%2))

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// item - ітеруємий елемент (обов'зковий)
// idx - індекс ітеруємого елементу
// arr - масив який перебираємо
// numbers.forEach(function (item, idx, arr) {
//     numbers[idx] = item * 2
// })
// for(const item of numbers){
//     item = item*2
// }
// for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = numbers[i] * 2
// }

// const add = (a, b) => a + b;
// let total = 0;

// numbers.forEach(item => total = add(total,item))
// console.log(total);





































// ПЕРЕРВА ДО 21.10



// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення
// function createProduct(product, callback) {
// const obj = {
//     id: Date.now(),
//     ...product
// }
// // console.log(obj);
// callback(obj)
// }

// function logProduct({name}) {
// console.log(`Product name ${name}`);
// }

// function logTotalPrice({price,quantity}) {
// console.log(`Total price ${price * quantity}`);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);



// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Transaction limit ${TRANSACTION_LIMIT}`)
//         } else if (this.balance < amount) {
//             onError(`Lack of funds`)
//         } else {
//             this.balance -= amount;
//             onSuccess('Funds were withdrow')
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Transaction limit ${TRANSACTION_LIMIT}`)
//         } else if (amount <= 0) {
//             onError('Nice try 😎')
//         } else {
//             this.balance += amount;
//             onSuccess(`Deposit added ${amount}, total ${this.balance}`)
//         }
//     }
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// console.log(account);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct1(product) {
//   console.log(product.name);
// }
// const logProduct = ({name}) => console.log(name);


// function logTotalPrice1(product) {
//   console.log(product.price * product.quantity);
// }

// const logTotalPrice = ({price,quantity}) => console.log(price * quantity);


// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct1);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice1);

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

const account = {
    username: 'Jacob',
    balance: 400,
    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
        } else if (amount > this.balance) {
            onError(`Amount can't exceed account balance of ${this.balance} credits`);
        } else {
            this.balance -= amount;
            onSuccess(`Account balance: ${this.balance}`);
        }
    },
    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
        } else if (amount <= 0) {
            onError(`Amount must be more than 0 credits`);
        } else {
            this.balance += amount;
            onSuccess(`Account balance: ${this.balance}`);
        }
    },
    // test: () => {
    //     console.log(this);
    // }
};
// account.test()
// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);
// console.log(handleSuccess);
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);



// Example 5 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value * 2;
// //   }),
// // );
// console.log(
//     each([64, 49, 36, 25, 16], value => value * 2)
// );
// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value - 10;
// //   }),
// // );

// console.log(
//     each([64, 49, 36, 25, 16], value => value - 10),
// );

// // console.log(
// //     each([64, 49, 36, 25, 16], function (value) {
// //         return Math.sqrt(value);
// //     }),
// // );
// console.log(
//     each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)),
// );
// // console.log(
// //     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //         return Math.ceil(value);
// //     }),
// // );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value))
// );
// // console.log(
// //     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //         return Math.floor(value);
// //     }),
// // );

// const floor =  value => Math.floor(value);
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], floor));
// console.log(each([3.5, 21.1, 16.4, 9.7, 11.3], floor));

// Example 6 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = items => items.forEach((item, idx)=>console.log(`${idx + 1}- ${item}`))


// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// const printContactsInfo = ({
//     names,
//     phones
// }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     nameList.forEach((item, idx) => console.log(`${item} - ${phoneList[idx]}`));
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }
// const calculateAverage = (...args) => {
//     let total = 0;
//     args.forEach(item => total += item)
//     return total / args.length
// }

// const calculateAverage = (...args) => args.reduce((acc, item) => acc + item, 0) / args.length;

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2



const arr = [1, 2, 3, 4, 5];

const result = arr.map(item =>  item * 2)
console.log(result);