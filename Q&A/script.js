//-------------------LINKS------------------//

// https://uk.javascript.info/garbage-collection
// https://javascriptpatterns.vercel.app/patterns/design-patterns/observer-pattern
// https://trailheadacademy.salesforce.com/classes/crt600-prepare-for-your-javascript-developer-i-certification-exam?_ga=2.227263647.388775754.1678824740-169061270.1671528580
// https://uk.javascript.info/recursion
// каррирование js
//------------------------------------------//
// Додаткове завдання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
//   toggle(){
//     this.on = !this.on;// true + ! => false  false + ! => true
//   }
// }
// const firstToggle = new Toggle({ isOpen: true });
// console.log('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// // console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.log('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// // console.groupEnd('secondToggle');

// 'use strict';
// function foo() {
//   this.customValue = "qwerty";
// }
// foo();
// const customValue = 123;
// console.log(customValue);
// console.log(window.customValue);

//declaration
// foo()
// function foo(){
// console.log('declaration');
// }
// foo()

// (function(){
//     console.log('NO name function');
// })()

//expression

// const boo = function(){
//     console.log('expression');
// }
// boo()

// //arrow
// const arrow = () => console.log('arrow')
// arrow()

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }

//     // this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         console.log(potionIndex);
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;

//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// atTheOldToad.removePotion("Stone skin")

// class User {
//     #email;
//     constructor(email) {
//       this.#email = email;
//     }

//     get email() {
//       return this.#email;
//     }

//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }
//   class Admin extends User {

//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     constructor({email, accessLevel}) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }

//       blacklist(email)
//       {
//         this.blacklistedEmails.push(email);
//       }

//       isBlacklisted(email)
//       {
//         //!! this.blacklistedEmails.some(value => value === email); /*Закоментована строка*/
//         return this.blacklistedEmails.some(value => value === email);

//       }
//   }

//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
//   mango.email;
//   mango.email = 'newmango@gmail.com';
//   console.log(mango.email); // "mango@mail.com"
//   mango.email = 'newmango@gmail.com'
//   console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// mango.blacklist("test@gmail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]

//   console.log('mango@mail.com',mango.isBlacklisted("mango@mail.com")); // false
//   console.log('test@gmail.com',mango.isBlacklisted("test@gmail.com")); // true

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));
// function getProductPrice(productName) {
//     // Change code below this line
//   let result = null;
//     for (const {name,price} of products) {
//       if (name === productName) {
//         result = price;
//         break;
//       }
//     }
//     return result;
//     // Change code above this line
//   }
//   Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// function add(...args) {
//     return args.reduce((acc,item) => acc+item,0)
//     // Change code above this line
//   }

// const arr = [
//   1,
//   [
//     1,
//     1,
//     [
//       1,
//       1,
//       [
//         1,
//         2,
//         [
//           1,
//           [
//             1,
//             [
//               1,
//               1,
//               [
//                 1,
//                 1,
//                 [
//                   1,
//                   2,
//                   [
//                     1,
//                     1,
//                     [
//                       1,
//                       [1, 1, [1, 1, [1, 2, [1, 1]]]],
//                       [
//                         1,
//                         2,
//                         [
//                           1,
//                           [
//                             1,
//                             [1, 1, [1, 1, [1, 2, [1, 1]]]],
//                             [
//                               1,
//                               [
//                                 1,
//                                 [1, 1, [1, 1, [1, 2, [1, 1]]]],
//                                 [1, 2, [1, 1]],
//                                 1,
//                                 1,
//                               ],
//                               2,
//                               [1, 1],
//                             ],
//                             1,
//                             1,
//                           ],
//                           1,
//                         ],
//                       ],
//                       1,
//                       1,
//                     ],
//                   ],
//                 ],
//               ],
//             ],
//             [1, 2, [1, 1]],
//             1,
//             1,
//           ],
//           1,
//           [
//             1,
//             [1, 1, [1, 1, [1, 2, [1, 1]]]],
//             [
//               1,
//               2,
//               [
//                 1,
//                 [
//                   1,
//                   [1, 1, [1, 1, [1, 2, [1, 1]]]],
//                   [
//                     1,
//                     [1, [1, 1, [1, 1, [1, 2, [1, 1]]]], [1, 2, [1, 1]], 1, 1],
//                     2,
//                     [1, 1],
//                   ],
//                   1,
//                   1,
//                 ],
//                 1,
//               ],
//             ],
//             1,
//             1,
//           ],
//         ],
//       ],
//     ],
//   ],
//   [1, 2, [1, 1]],
//   1,
//   1,
// ];
// const arr = [1, [1, 1, [1, 1]], [1, 2, [1, 1]], 1, 1];

// function getSum(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       sum += getSum(item);
//     } else {
//       sum += item;
//     }
//   }
//   return sum;
// }
// console.log(getSum(arr));
// function nameInStr(str, name) {
//     str = str.toLowerCase();
//     name = name.toLowerCase();
//     let obj = {};
//     let obj2 = {};
//     let result = false;
//     for (let i = 0; i < str.length; i += 1) {
//       if (str[i] in obj) {
//         obj[str[i]] += 1;
//       } else {
//         obj[str[i]] = 1;
//       }
//     }
//     for (let i = 0; i < name.length; i += 1) {
//       if (name[i] in obj2) {
//         obj2[name[i]] += 1;
//       } else {
//         obj2[name[i]] = 1;
//       }
//     }

//     const keys = Object.keys(obj2);
//     let idx = 0;
//     for (const key of name) {
//       if (key in obj) {
//         const itemIdx = str.indexOf(key, idx);
//         if (obj[key] >= obj2[key] && itemIdx >= idx) {
//           result = true;
//         } else {
//           return false;
//         }
//         idx = itemIdx;
//       } else {
//         return false;
//       }
//     }

//     return result;
// }

// function nameInStr(str, name) {
//   str = [...str.toLowerCase()];
//   name = [...name.toLowerCase()];
//   const obj = str.reduce((acc, key) => {
//     if (key in acc) {
//       acc[key] += 1;
//     } else {
//       acc[key] = 1;
//     }
//     return acc;
//   }, {});

//   const obj2 = name.reduce((acc, key) => {
//     if (key in acc) {
//       acc[key] += 1;
//     } else {
//       acc[key] = 1;
//     }
//     return acc;
//   }, {});

//   let idx = 0;
//   return name.every((key) => {
//     if (key in obj) {
//       const itemIdx = str.indexOf(key, idx);

//       if (obj[key] < obj2[key] || itemIdx < idx) {
//         return false;
//       }
//       idx = itemIdx;
//       return true;
//     }
//   });
// }

const nameInStr = (str, name) =>
  [...str.toLowerCase()].reduce(
    (acc, item) => acc < name.length && item === name[acc].toLowerCase() ? acc + 1 : acc,
    0
  ) === name.length;

console.log(nameInStr('ilirptyrwdihfarboeraendebejdvo  ba y    nzxfjyeaamdfe deiablea hjlmria ui  eeeulerwnawrdnn lnea',
'Tim')); //true
// console.log(nameInStr("Next to a lake", "chris")); //false
// console.log(nameInStr("Under a sea", "chris")); //false
// console.log(nameInStr("A crew that boards the ship", "chris")); //false
// console.log(nameInStr("A live son", "Allison")); //false
// console.log(
//   nameInStr(
//     "kd dyj rleyhrralec tayetjoxahhmiplqyd aj ttarac gbprydo riierdl n ch ttnroimdh  trbarim ej",
//     "Alexandria"
//   )
// );
// Task
// Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

// The function should return true if that is the case, and else false. Letter comparison should be
// nameInStr("A live son", "Allison") --> false
//                ^ ^^   ^^^
//                A li   son

//     Contains all of the correct letters in "Allison", in order,
//     but not enough of all of them (missing an 'l').

[
  "kd dyj rleyhrralec tayetjoxahhmiplqyd aj ttarac gbprydo riierdl n ch ttnroimdh  trbarim ej",
  "Alexandria",
];
// [ 'mhbd dosadwemnd esfio cmrtsyyaoeyiseaphajw rjhsyn  trtnneacfr e irasarrmd ltsijj eneyiixedwlk  rehjnyolroo n',
//   'Ashley' ]

//   [ 'corymheaea  adotaatlora manantyaeyyl hxqnyqj iirtr aon  whlwtatrribeezjet  etil',
//   'Joy' ]

//   [ 'exlaxrayrber i ajy efheryatrkypnrimyiriyrdcale g enx jmh sdt ayl i mryrnesdj iedj mmwuhsim bsxnipleglamrjteo',
//   'Brittany' ]

//   [ 'oeirjiyymnmbrj  etliyeox aamneedalij rr mlbetooei y eha cvjslj  ewyieeu nyifio  t',
//   'Jeremy' ]
