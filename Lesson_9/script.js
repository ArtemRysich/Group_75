// this є тільки в функціях

// declaration expression
// 'use strict'
// function foo(){
// console.log(this);
// }
// foo()

// const foo = function () {
//     console.log(this);
// }
// foo()


// arrow
// const foo = ()=> {
// console.log(this);
// }
// foo()



// const objA = {
//     name: 'A',
//     sayHello(){
//         console.log(this);
//     }
// }


// const objA = {
//     name: 'A',
//     skills : {
//         skil : 'html',
//         sayHello(){
//             console.log(this);
//         }
//     }

// }
// objA.skills.sayHello()


// const objB = {
//     name:'B',
//     skills : {
//         skill: "CSS",
//         sayHello: ()=>{
//             console.log(this);
//         }
//     }

// }
// 'use strict'
// const objB = {
//     name: 'B',
//     customThis: this,
//     foo() {
//         const sayHello = () => {
//             console.log(this);
//         }
//         sayHello()
//     }
// }
// // objB.foo()
// console.log(objB.customThis);






// const objA = {
//     name: 'A',
//     foo(){
//         console.log(this);
//     }
// }
// objA.foo()

// function boo (){
//     console.log(this);
// }
// boo()


// const objB = {
//     name: 'B',
//     foo: ()=> {
//         console.log(this);
//     }
// }
// objB.foo()


// const objB = {
//     name: 'B',
//     boo(){
//         const foo = ()=> {
//             console.log(this);
//         }
//         foo()
//     // (this in boo === this in foo)
//     }

// }
// objB.boo()




// const objB = {
//     name: 'B',
//     foo: () => {
//         const boo = () => {
//             console.log(this);
//         }
//         boo()
//     }
// }
// objB.foo()
// 'use strict'

// const objB = {
//     name: 'B',
//     foo: () => {
//         function boo ()  {
//             console.log(this);
//         }
//         boo()
//     }
// }
// objB.foo()


// const objB = {
//     name: 'B',
//     foo() {
//         function boo ()  {
//             console.log(this);
//         }
//         boo()
//     }
// }
// objB.foo()


// const objB = {
//     name: 'B',
//     foo() {
//         const boo = () => {
//             console.log(this);
// //Arrow хто буде this для foo той і буде для нас this
//         }
//         boo()
//     }
// }
// objB.foo()


// const objB = {
//     name: 'B',
//     foo() {
//         const boo = () => {
//             console.log(this);
//         }
//         boo()
//     }
// }


// console.log(objB.foo);
// const objA = {
//     name: 'A',
//     testFn : objB.foo
// }
// objA.testFn()



// const objB = {
//     name: 'B',
//     foo: () => {
//         const boo = () => {
//             console.log(this);
//         }
//         boo()
//     }
// }


// console.log(objB.foo);
// const objA = {
//     name: 'A',
//     testFn : objB.foo
// }
// objA.testFn()





// function foo(){
//     console.log(this);
// }



// const objA = {
//     name: 'A',
//     skills: {
//         skill: 'JS',
//         fn : foo
//     }
// }

// objA.skills.fn()


// const foo = () => {
//     console.log(this);
// }

// const objA = {
//     name: 'A',
//     skills: {
//         skill: 'JS',
//         boo() {
//             //    const myFunction = foo;
//             //    myFunction() // window
//             const foo = () => {
//                 console.log(this);
//             }
//             foo() // skills
//         }

//     }
// }

// objA.skills.boo()




// function foo(a, b, c) {
//     // console.log(arguments);
//     console.log(this, a, b, c);
// }
// call
// const objA = {
//     name: "A"
// }
// const objB = {
//     name: "B"
// }
// foo.call(objA, 22, 33, 44)
// foo.call(objB, 11, 12, 13)
// apply
// const objA = {
//     name: "A"
// }
// const objB = {
//     name: "B"
// }
// const args = [22, 33, 44];
// foo.apply(objA, args)
// foo.call(objA, ...args)
// bind


// function foo(a, b, c) {
//     // console.log(arguments);
//     console.log(this, a, b, c);
// }

const objA = {
    name: "A"
}

// const objB = {
//     name: "B"
// }

// const boo = foo.bind(objA)
// boo(11, 22, 33)
// boo(44, 55, 66)
// boo(77, 88, 99)
// const copy = foo.bind(objB)
// copy(00, 00, 00, 00)
// copy(01, 02, 03, 04)



// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [{
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],
//     calcTotalPrice(stoneName) {
//         console.log(stoneName);
//         console.log(this);
//         const {
//             price,
//             quantity
//         } = this.stones.find(({
//             name
//         }) => name === stoneName)
//         return price * quantity
//     },
// };

// const testObj = {
//     stones: [{
//             name: 'Щебінь',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Пісок',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Вугілля',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Граніт',
//             price: 800,
//             quantity: 2
//         },
//     ],
// }
// const foo = chopShop.calcTotalPrice.bind(testObj)
// console.log(foo);
// console.log(foo('Граніт'));
// console.log(foo('Вугілля'));
// console.log(foo('Щебінь'));
// // console.log(chopShop.calcTotalPrice.call(testObj, 'Граніт'));
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );



// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    add() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
        return (this.a ?? 0) + (this.b ?? 0)
    },
    mult() {
        return (this.a ?? 1) * (this.b ?? 1)
    }
};
calculator.read(5)
// console.log(calculator.add());
console.log(calculator.mult());