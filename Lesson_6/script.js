// https://www.geeksforgeeks.org/lodash-_-clone-method/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// const arr = [1, 2, 4];
// const arr1 = arr;

// console.log(arr === arr1);


// const arr = [1, 2, 4];
// const arr1 = [...arr];
// console.log(arr == arr1);




// const arr = [1, 2, 3];
// const arr1 = [1, 2];
// const [, , third = 9] = arr;

// // console.log(second);
// console.log(third);

// const name = 'USER';

// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {},
// }

// const {
//     name: userName
// } = user

// console.log(name);
// console.log(userName);
// // const {
// //     name = "value",
// //         age
// // } = user;
// const {
//     name : userName,
//         age
// } = user;
// console.log(userName);
// // console.log(userName);
// console.log(age);

// console.log(user);








// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//         cars : {
//             audi : 'A8'
//         }
//     },
// }

// const {name, skills : {js, cars:{audi}}, skills} = user;

// console.log(user.name);
// console.log(user.skills.js);
// console.log(user.skills.cars.audi);

// console.log(skills);
// console.log(js);
// console.log(audi);



// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//     },
// }

// const user1 = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         react: true
//     },
// }

// function foo({name , skills:{js = false}} = {}){
// console.log(name);
// console.log(js);
// }

// foo()

// const user = {
//     name: 'Test - user',
//     age: 22,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//     },
// }

// const user1 = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: false
//     },
// }

// const user2 = {
//     name: 'Test',
//     skills: {
//         html: false,
//         css: false,
//     },
// }

// const arr = [user, user1, user2];
// // name : userName

// for (const {
//         age: userAge = 0,
//         skills: {
//             js = false
//         }
//     } of arr) {
//     // console.log(userAge);
//     console.log(js);
// }















// const arr = [44, 11, 22, 4, 33];

// const min = Math.min( 44, 11, 22, 4, 33)
// const min = Math.min(...arr)
// const arr1 = [44, 11, 22, 4, 33];
// const arr1 = [...arr];

// console.log(arr === arr1);

// const user = {
//     name: 'Test',
//     age: 12,
//     skills: {
//         html: false,
//         css: false,
//         js: false
//     },
// };

// const user1 = {...user};
// console.log(user === user1);

// console.log(user.skills);
// console.log(user1.skills);

// console.log(user.skills === user1.skills);



// const arr = [1, 2, 3, 4, 5]
// //spread
// const copy = [...arr];
// console.log(copy);
// //rest
// const [first, second, ...args] = arr;
// console.log(first);
// console.log(second);
// console.log(args);



// const arr = [1, 2, 3, 4, 5];

// function foo(a, b, c, d, e) {
// console.log(a,b,c,d,e);
// }
// foo(...arr); // аргументи це spread

// function foo(a, b, c, ...args) { // параметри це rest
//     console.log(a, b, c);
//     console.log(args);
// }
// foo(1, 2, 3, 4, 5);
// foo(11, 32, 43, 4, 5, 6, 7)



// Перерва до 21.20






// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({weight, height}) {
// // console.log('weight',weight);
// // console.log('height',height);
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));



// Example 2 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//     companyName,
//     bots: {
//         repairBots,
//         defenceBots
//     }
// }) {
//     // console.log(companyName);
//     // console.log(repairBots);
//     // console.log(defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50
//     }
// }));



// Example 3 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// Рішення
// function getStockReport({
//     companyName,
//     stock
// }) {
//     const values = Object.values(stock)

//     let total = 0;

//     for (const value of values) {
//         total += value;
//     }

//     return `${companyName} has ${total} items in stock`
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"



// Example 4 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// Рішення
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list: 'default,',
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }
// Example 5 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// // Рішення
// function transformId({firstName,lastName, ...props}) {
// console.log(firstName);
// console.log(lastName);
// // console.log(props);

// props.fullName = firstName + ' ' + lastName
// return props
// // return {
// //     fullName: `${firstName} ${lastName}`,
// //     ...props
// // }
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );
// // {
// //     id: 1,
// //     fullName: 'Jacob Mercer',
// //     email: 'j.mercer@mail.com',
// //     friendCount: 40,
// //   }

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );


// const products = [{
//         name: "Radar",
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: "Scanner",
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: "Droid",
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: "Grip",
//         price: 1200,
//         quantity: 9,
//         cauntProp : true
//     },
// ];

// function getAllPropValues(propName) {
//     let cauntProp = [];
//     for (let product of products) {
//         // console.log(product[propName]);
//         // console.log(product["name"]);
//         if (product[propName]) {
//             cauntProp.push(product[propName]);
//         }
//     }
//     return cauntProp;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("namттттe"));

// product[propName] те саме, що product === propName?
// product[propName] === product.name
// "Grip" === "name"
// {
//     name: "Grip",
//     price: 1200,
//     quantity: 9,
//     cauntProp : true
// }

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk
// (function (x) {
//     delete x;
//     return x;
//   })(1)


// const x = 1;
// delete x;
// console.log(x); 

// const obj ={
//     x : 1,
//     y: 2
// }

// delete obj.x
// delete obj.y
// console.log(obj);


// x = 1;
// y = 100500
// console.log(x);
// console.log(window);
// delete window.x
// console.log(x);




// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//     icon: ''
// };
// // Change code below this line
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon : highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;
// // Change code above this line


// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// function makeTask(data) {
//     const completed = false;
//     const category = data.category || "General";
//     const priority = data.priority || "Normal";
//     const text = data.text;

//     const task = {
//         category,
//         priority,
//         text,
//         completed
//     };
//     return task;
// }
// а якщо так 30 зробити


function findLongestWord(string) {
    // Change code below this line
    return string.split(' ').sort((a, b) => b.length - a.length)[0]


    // Change code above this line
}
console.log(findLongestWord("May thethethe force be with you"));