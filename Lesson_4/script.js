// https://codeguida.com/post/199
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=uk

// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];

// // declaration
// function someName(arr, value) {
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] *= value;
//     }
// }
// console.log(someName(arr, 3));
// console.log(someName(arr1, 4));
// console.log(arr);
// console.log(arr1);


// expression

// const someName = function (arr, value) {
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] *= value;
//     }
// }

// someName(arr, 3)
// someName(arr1, 4)
// console.log(arr);
// console.log(arr1);


// const arr = [423, 56, 23, 4];
// const arr1 = [1, 45, 1, 2]

// function add(param) {
//     let sum = 0;
//     for (const num of param) {
//         sum += num
//     }
//     return sum;
// }
// console.log(add(arr));
// console.log(add(arr1));





// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];


// function someName(arr, value = 1) {
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] *= value;
//     }
// }

// someName(arr)
// someName(arr1, 4)
// console.log(arr);
// console.log(arr1);



// function add() {

//     // const arr = Array.from(arguments);
//     // const arr = [...arguments];
//     // console.log(arr);
// }


// add(1, 2, 3, ['a', 'b']);
// add(4, 5, 6, 7);
// add(7, 8, 9, 1, 1, 2);




// function checkValue(a, b) {
//     const result = a + b;
//     if (result > 0) {
//         return true;
//     } else if (result < 0) {
//         return false;
//     }

//     return 'це нуль'
// }

// console.log(checkValue(1, 4));

// console.log(checkValue(1, -4));

// console.log(checkValue(1, -1));

// let a = 10

// function foo() {
//     a = 15;
// }
// foo()
// a = 22;
// foo()
// console.log(a);






// let a = 10;

// function foo(){
//     a = 11;
//     let a = 14;

// }
// foo()
// a = 19;

// console.log(a);



// let a = 10;

// function foo() {
//     let a = 14;
//     a = 11;

// }
// foo()
// a = 19;

// console.log(a);


// let a = 10;

// function foo() {
//     a = 100;
// }
// foo()
// a = 19;

// if (a < 100){
//     foo()
//     a = 14
// }else{
//     a = 13;
// }

// console.log(a);

// const arr = [1, 2, 3];

// function foo(a) {
//     a.splice(0, 1)
// }
// arr.splice(0, 1)
// foo(arr)
// console.log(arr);




// let a = 15;


// function foo(x) {
//     x = 10;
// };

// console.log(foo(a));
// console.log('a', a);




// function add(a, b) {
//     return a + b
// }


// function checkValue(a, b) {
//     const value = add(a, b)
//     if (value > 0) {
//         return true;
//     } else if (value < 0) {
//         return false;
//     }

//     return 'це нуль'
// }

// checkValue(1, 1)


// function foo() {
//     boo()
// }

// function boo() {
//     foo()
// }
// foo()


// якщо після двох функцій записати функцію що буде результатом перших двох яким буде правильний синтакс - до прикладу function add (a,b) + function checkVelue (a,b)?

// const result = add(1, 2) + checkValue(4, -3)
// console.log(result);


// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number(weight / Math.pow(height, 2).toFixed(1))
//     return Number((weight / height ** 2).toFixed(1))

// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8



// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.


// function min(a, b) {
//     if (a > b) {
//         return b;
//     }

//     return a;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1





// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');

//     // const first = Number(dimensions[0]);
//     // const second = Number(dimensions[1]);

//     // return first * second

//     return Number(dimensions[0]) * Number(dimensions[1]).toString()
//     console.log(second);
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('18 11'));




// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 -'Poly' виведе  3 - Ajax.

// function logItems(items) {
//     console.log('--------------');
//     // for (let i = 0, num = 1; i < items.length; i+=1, num+=1){
//     //     console.log(`${num} - ${items[i]}`);
//     // }
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i+1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);





// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//     names = names.split(',')
//     phones = phones.split(',')

//     // for(let i = 0; i< names.length; i+=1){
//     //     console.log(`${names[i]} - ${phones[i]}`);
//     // }
//     // console.log(phones);

//     for (let i = 0; i < names.length, i < phones.length; i += 1) {
//         console.log(`${names[i]} - ${phones[i]}`);
//     }
//     console.log(phones);

// }
// printContactsInfo(
//     'Jacob,William,Solomon,Artem',
//     '89001234567,89001112233,890055566377,890055566378',
// );




// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber() {
//     // let max = arguments[0];
//     // for(const arg of arguments){
//     //     if(max < arg){
//     //         max = arg
//     //     }
//     // }

//     // return max;
// // console.log(arguments);
//     return Math.max(...arguments);
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83




// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     // const numbers = Array.from(arguments)
//     // const numbers = [...arguments]
//     // console.log(numbers);
//     let sum = 0;

//     for (const num of numbers) {
//         sum += num
//     }

//     return sum / numbers.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2





// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.


// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60).toString().padStart(2,'0');
//     minutes = (minutes % 60).toString().padStart(2,'0');
//     console.log(typeof minutes);
//     return `${hours}:${minutes}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"




// Example 9 - Колекція курсів (includes, i ndexOf,push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// function addCourse(name){
//     if(courses.includes(name)){
//         return 'Ви вже маєте такий курс'
//     }
//     courses.push(name)
// }

// // addCourse('Express');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS'));; // 'Ви вже маєте такий курс'
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function removeCourse(name) {
//     // if (courses.includes(name)) {
//     //     const idx = courses.indexOf(name);
//     //     courses.splice(idx, 1);
//     //     return;
//     // }
// // includes => !!~indexof
//     const idx = courses.indexOf(name);
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курс із таким ім'ям не знайдено"
// }


// const arr = ['a', 'b', 'c'];
// // const idx = arr.indexOf('a');//0 => false
// // console.log(!!~idx);//-1 => true
// // console.log(!!-(idx + 1));//-1 => true

// const idx = arr.indexOf('d') // -1 => true
// console.log(!!~idx); // 0 => false
// console.log(!!-(idx + 1));
// if (!!~idx) {
//     console.log('yes');
// } else {
//     console.log('no');
// }



// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// const courses = ['HTML', 'CSS', 'JavaScript', 'Express', 'React', 'PostgreSQL'];

// function updateCourse(oldName, newName) {
//     // if (courses.includes(oldName)) {
//     //     const idx = courses.indexOf(oldName);
//     //     courses.splice(idx, 1, newName);
//     //     return;
//     // }

//     const idx = courses.indexOf(oldName);
//     if (!!~idx) {
//         courses.splice(idx, 1, newName);
//         return;
//     }

//     return 'Курс із таким ім\'ям не знайдено'

// }

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// // console.log(updateCourse('Vue','NestJS')); // 'Курс із таким ім'ям не знайдено'

// const arr = [1,2,3]
// console.log(arr);

// function foo(){
// console.log(arguments);
// }
// foo(1,2,3)

// поясніть будь ласка 24 завдання автоперевірки чому непрацює ? 
function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
    return fruits.includes(fruit)
    // for (let i = 0; i < fruits.length; i += 1) {
    //     if (fruits.includes(fruit)) {
    //         return true;
    //     }
    // }

    // return false
}
checkFruit("mandarin")