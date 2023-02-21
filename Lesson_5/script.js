// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true
//     },
//     'some_Value': true
//     // "2value" : false
// };

// console.log(user.skills[2]);
// console.log(user.skills);
// const a = [ { skills:[ 'js' , 'cs']} ] 
// console.log(a[0].skills[0]);

// const user = [ { skills: [ ‘js’, ‘css’ ] } ]; ось тут тільки перебором можна дістати js?
// console.log(user['some value']);
// console.log(user.some_Value);
// console.log(user['2value']);
// console.log(user.2value);


// console.log(user.age);
// console.log(user.languages.js);

// console.log(user.skills);
// console.log(user['age']);
// console.log(user['languages']['js']);

// const value = prompt('Enter some value');

// console.log(user[value]);



// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true
//     },
// };
// user.age = user.age +1

// user.age = {
//     years: 29,
//     month: 10
// };
// console.log(user);

// user.car = 'Honda'
// user.languages.react = true;
// user.skills.push('react');
// user.company = {
//     GoIt : false
// };
// user.company.GoIt = true
// console.log(user);




// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true
//     },
// };

// // delete user.languages
// // delete user['name']
// // user.skills.splice(1,1)
// // delete user
// console.log(user);


// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true
//     },
// };

// Object.freeze(user.languages)
// user.name = 'qwerty'
// user.age = 100
// user.test = 'test value'
// user.languages.css = true

// console.log(user);










// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//     },
//     sayHello() {
//         console.log(this);
//         console.log(`Hello my name ${this.name}, my skills:`);
//     },
//     mySkills() {
//         for (const skill of this.skills){
//             console.log(skill);
//         }
//     }
// };


// user.mySkills()
// sayHello()






// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//     },
//     sayHello() {
//         console.log(this);
//         console.log(`Hello my name ${this.name}, my skills:`);
//     },
//     mySkills() {
//         for (const skill of this.skills) {
//             console.log(skill);
//         }
//     }
// };

// const user1 = Object.create(user)
// user1.name = 'Dima'
// user1.sayHello()
// user1.mySkills()
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1);

// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         console.log(key);
//     }

// }


// for (const key in user){
//     if(typeof user[key] === 'function'){
//         continue;
//     }
//     console.log(user[key]);
// }





// const user = {
//     name: "Artem",
//     age: 28,
//     skills: ['html', 'css', "js"],
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//     },
//     sayHello() {
//         console.log(this);
//         console.log(`Hello my name ${this.name}, my skills:`);
//     },
//     mySkills() {
//         for (const skill of this.skills) {
//             console.log(skill);
//         }
//     }
// };

// const user1 = Object.create(user)
// user1.name = 'Dima'
// user1.skills = ['node', 'java']
// user.sayHello()
// user1.sayHello()
// user1.mySkills()
// const keys = Object.keys(user);
// console.log(keys);

// for(const key of keys){
//     if(typeof user[key] === 'function'){
//         continue
//     }
//     console.log(user[key]);
// }

// const values = Object.values(user);
// // console.log(values);
// for(const value of values){
//     // if(typeof value === 'function'){
//     //     continue;
//     // }
//     if(Array.isArray(value)){
//         console.log(value);
//     }
// }

// const entries = Object.entries(user);
// console.log(entries);

// const user1 = Object.create(user)
// user1.name = 'Dima'

// const keys1 = Object.keys(user1);

// console.log(keys1);





// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;

// const keys = Object.keys(user)

// for(const key of keys){
//     console.log(`${key} : ${user[key]}`);
// }








// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = 0;
// for (const key in salaries) {
//     console.log(key);
//     sum += salaries[key]
//     // console.log(salaries[key]);
// }

// const keys = Object.keys(salaries)
// for(const key of keys){
//     console.log(key);
//     sum += salaries[key]
// }
// console.log(sum);

// const values = Object.values(salaries);

// for(const value of values){
//     sum+=value
// }

// console.log(sum);




// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// щоб сторити комент потрібно /** */
/**
 * Find stone in array ang calc total price
 * price * quantity
 * @param {Array} stones
 * @param {String} stoneName
 * @returns {Number || String} price || error message
 */
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName){
//             return stone.price * stone.quantity
//         }
//     }
//     return 'Not found'
// }

// // Код
// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Щебінь',
//         price: 200,
//         quantity: 2
//     },
// ];
// console.log(calcTotalPrice(stones, "Діамант"));


// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction);
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{
//         id: 123,
//         amount: 1200,
//         type: 'deposit'
//     }],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: Math.random(),
//             amount, // amount : 1000
//             type
//         }
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
//         console.log(transaction);
//         this.transactions.push(transaction)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance) {
//             return 'зняття такої суми не можливе, недостатньо коштів'
//         }

//         this.balance -= amount
//         const transaction = this.createTransaction(
//             amount, Transaction.WITHDRAW
//         )
//         this.transactions.push(transaction)
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {

//                 return transaction;
//             }
//         }

//         return 'Not found'
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 total += transaction.amount;
//             }
//         }
//         return total
//     },
// };


// account.deposit(1500)
// account.deposit(1200)
// account.withdraw(500)
// console.log(account);
// console.log(account.getBalance());
// // console.log(account.getTransactionDetails(1234));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// const user = {
//     name: 'Test'
// }
// console.log(user);
// user.name = 'Default';

// console.log(user);

// const user = {
//     name: "test",
//     skills: {
//         js: true,
//         css: false
//     }
// }

// user.skills.js = false;

// user.certifications = {
//     js : true
// }
// console.log(user);
// user.certifications.js = false


// почему они имеют разные свойства на "выходе" (после вызова после объекта), хотя объект апартман (строка 24) имеет все ключи и апартман и адверт. Почему апартман не иметь все ключи при вызове после скобок ОБЪЕКТА
// ...так как это прототип??


// const keys = [];
// const values = [];

// const keys1 = [];
// const values1 = [];

// const advert = {
//   service: "apt",
// };

// const apartment = Object.create(advert);
// // console.log(apartment.service);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// console.table(apartment);

// console.table(advert);
// console.log(apartment);
// for (const key in apartment) {
// console.log(key);
// // console.table(apartment[key]);

//   if (apartment.hasOwnProperty(key)) {

//   keys.push(key);
//   values.push(apartment[key]);
//   } 

//   keys1.push(key);
//   values1.push(apartment[key]);
// };
// console.log("Sobstvennie imena", keys, values);
// console.log("Nesobstvennie imena", keys1, values1);
// console.table(advert);
// console.table(apartment);


// const user = {
//     name: 'value',
//     age: 22
// };
// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(user[key]);
// }
// console.log(keys);
// user.name = 'test';


// поясніть різницю у виклику властивостей між 
// const a = [ 'js' , 'cs' ]
// console.log(a);
// const b = [ { skills: ['js' , 'cs']} ]
// console.log(b[0].skills);

// Смогу просмотреть урок уже завтра в записи, поэтому если был уже ответ то прошу прощение.
// В конспекте про rest и spread сказано "Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині." Поясните пожалуйста, что значит в левой или правой части? В упор не вижу в чем отличие синтаксиса, вижу только разницу в контексте использования,
// Также, если можно, проясните условия задачи 41 автопровверки, а именно "Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів", ведь свойство potions и так со значением массива объектов.