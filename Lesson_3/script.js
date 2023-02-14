// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/
// // index     0    1     2      3
// const arr = [1, null, true, 'hello'];
// //           1    2     3      4

// const first = arr[0];
// const last = arr[arr.length - 1]
// console.log(last);

//  Array.isArray()
// console.log(typeof arr);//object
// console.log(Array.isArray(arr));


// for(let item of arr){
//     if(typeof item === 'boolean'){
//         item = 'world'
//     }
//     console.log(item);
// // console.log(typeof item);

//     // console.log(item);
// }
// console.log(arr);



// // index     0    1     2      3
// const arr = [1, null, true, 'hello'];
// //           1    2     3      4
// for(let i = 0; i < arr.length; i+=1){
//     if(typeof arr[i] === 'boolean'){
//         arr[i] = 'world'
//     }
//     console.log(arr[i]);
// }
// console.log(arr);


// let a = 10;
// let b = a;

// a+=10;

// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;
// console.log(a === b);
// const c = [1, 2, 3];
// const d = [1, 2, 3];
// console.log([1, 2, 3] === [1, 2, 3]);
// console.log(c === d);
// a.push(4)
// b.push(5)
// console.log(a);
// console.log(b);




// let a = false

// let b = a;

// console.log(a);
// console.log(b);
// a+=2
// b+=' world'
// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;


// a.push(4)
// b.push(77)
// console.log(a);
// console.log(b);


// let number = 10;
// number += 12;

// number = number + 12
// const str = 'hello world';

// const arr = [1,2,3];
// arr.push(4)
// arr.shift()
// console.log(arr);






//  split join
// const str = 'hello  world';
// const result = str.split(' ');
// console.log(result);
// const respons = result.join('-')
// console.log(respons);



// indexof includes
// const arr = [1, 2, 3, 4, 5, 6];
// const idx = arr.indexOf(14);
// if(idx === -1){

// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// if(!!~idx){

// }
// console.log(idx);
// const arr = [1, 2, 3, 4, 5, 6];
// const idx = !!~arr.indexOf(111)
// console.log(idx);

// if(idx){

// }



// pop push
// const arr = [1, 2, 3, 4, 5, 6];
// arr.push(7, 8, 9);
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);


// shift unshift
// const arr = [1, 2, 3, 4, 5, 6];

// arr.unshift('hello', "world")
// arr.shift()
// arr.shift()
// console.log(arr);


// splice

// const arr = [1, 2, 3, 4, 5, 6];

// arr.splice(2, 2, 99)
// console.log(arr);


// slice
//       0  1  2  3  4  5
// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.slice(2, 3)
// console.log(arr);
// console.log(result);


// const arr = [1, 2, 3, 4, 5, 6];
// const copy = arr.slice();
// const result = [...arr]
// // console.log(result);
// console.log(result === copy);


// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.concat([9, 10], [7, 8])
// const result = [...arr, ...[7, 8], ...[9, 10]]
// console.log(result);




// Перерва до 21.20



// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол')

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae')
// genres.splice(genres.length, 0, "Рок-н-рол");
// // genres.splice(0, 1)
// // genres.splice(0, 0, 'Country', 'Reggae')


// genres.splice(0, 1, 'Country', 'Reggae')
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(' ')
// const first = Number(arr[0]);
// const second = Number(arr[1]);
// console.log(first * second);



// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i+=1){
//     console.log(`${i+1} - ${fruits[i]}`);
// }

// for(let i = 0, num = 1; i < fruits.length; i+=1, num+=1){
//     console.log(`${num} - ${fruits[i]}`);
// }


// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377';

// names = names.split(',');
// phones = phones.split(',');

// for (let i = 0; i < names.length; i += 1) {
// console.log(`${names[i]} - ${phones[i]}`);
// }
// console.log(phones);

// for (let i = 0; i < names.length, i < phones.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//     }
// console.log(phones);



// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.pop()
// arr.shift()
// console.log(arr.join(' '));

// const arr = string.split(' ')
// const result = arr.slice(1, arr.length - 1);

// const arr = string.split(' ').slice(1, -1);
// console.log(arr.join(' '));


// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const arr = string.split('').reverse().join('');
// console.log(arr);




// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort((a, b) => a.localeCompare(b));
// console.log(langs);







// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// // const min = numbers.sort((a,b) => a - b)[0]
// let min = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }


// console.log(min); // 1




const str = "hello, world  my, name"
const result = str.replaceAll(',', '').split(' ')

for (let i = 0; i < result.length; i += 1) {
    if (!result[i]) {
        result.splice(i, 1)
    }
}
console.log(result);