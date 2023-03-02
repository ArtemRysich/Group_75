// const arr = [1, 2, 3, 4, 5, 6, 7];

// const arr = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]


// const arr = [1, 2, 3, 4, 5, 6, 7];
// // const result = arr.map((item, idx,arr)=>{
// //     return item * 2
// // });

// const result = arr.map((item) => {
//     if (!(item % 2)) {
//         return item;
//     }
// })
// console.log(result);
// console.log(arr);

// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]


// flatMap
// const result = users.flatMap((item)=>{
//     return item.skills
// })
// const result = users.map(item => {
//     return [...item.skills]
// // })
// Аналог до методу flatMap
// let result = [];
// users.forEach(item => {
// console.log(item.skills);
// result = result.concat(item.skills)
// result = [...result, ...item.skills]
// })
// console.log(result);



//filter
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.filter((item)=>{
//     if(!(item%2)){
//         return item
//     }
// })

// const result = arr.filter(item => !(item % 2))
// console.log(!(1 % 2));
// console.log(!(2 % 2)); 

// const result = arr.filter(item => item > 8)

// const result = arr.filter(item => item > 3 && item < 6)
// console.log(result);



// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['js', 'express']
// }]

// const result = users.filter(({skills}) =>skills.includes('js')).map(({name}) => name)
// console.log(result);


//find

// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['js', 'express']
// }]
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = users.find(({skills}) => skills.includes('js'))
// const result = users.find(({skills}) => skills.includes('angular'))

// const result = arr.find(item => item > 5)
// console.log(result);

// findIndex
// const arr = [1, 2, 5, 3, 4, 5, 6, 5, 7];
// const result = arr.indexOf(5)
// console.log(result);


const users = [{
    name: 'User1',
    skills: ['html', 'css']
}, {
    name: 'User2',
    skills: ['js', 'react']
}, {
    name: 'User3',
    skills: ['js', 'express']
}, {
    name: 'User2',
    skills: ['js', 'react']
}, {
    name: 'User2',
    skills: ['js', 'react']
}]

// const result = [];
// users.forEach(({
//     name
// }, idx) => {
//     if (name === 'User2') {
//         result.push(idx)
//     }
// })
// console.log(result);

// const result = users.indexOf('User2')
// const result = users.findIndex(({name}) => name ==='User2')
// // // const result = arr.findIndex(item => item === 5);
// console.log(result);



// every some
// const users = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['js', 'express']
// }];

// const result = users.every((item)=> item.skills.includes('js'))
// const result = users.every(({skills})=> skills.includes('js'))
// const result = users.some(({skills}) => skills.includes('angular'))

// console.log(result);


// sort

// const numbers = [5, 2, 7, 12, 9, 1];
// // const result = [...numbers].sort((a, b) => b - a)
// // // const result = numbers.sort() //Сортуємо по юнікоду
// // console.log(result);
// // console.log(numbers)
// numbers.sort().reverse()
// console.log(numbers);

// const str = ['B', 'y', 'c', 'q', 'b', 'i', 'C', 'A'];

// // const result = str.sort()
// const result = str.sort((a, b) => a.localeCompare(b))

// console.log(result);


// const test = [  'black','apple', 'car', 'red', 'js'];


// test.sort((a,b) => b.length - a.length)
// console.log(test);
// 1, 1111, 111, 1111,11
// 1 11 111 1111 1111



// reduce


const numbers = [5, 2, 7, 12, 9, 1];
// let total = 0;
// const result = numbers.reduce((acc, item, idx, arr) => acc + item, 0)
// const result = numbers.reduce((acc, item) => {
//     const test = acc.push(item * 2);
//     console.log(test);
//     return acc
// }, [])
// console.log(result);
// const result2 = numbers.reduce((acc, item) =>{
//     acc.push(item * 2)
//     return acc
// }, [])


// console.log(result2);

// Перерва до 21.35


















// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [{
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false
    }
];


// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getModels = cars => {
//     const models = cars.map(car => car.model)
//     return models
// };
// const getModels = cars => cars.map(({model}) => model);

// console.log(getModels(cars));

// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660, //25328
//     onSale: false
// }]

// const makeCarsWithDiscount = (cars, discount) => {
//     const result = cars.map(car => {
//         const newPrice = car.price * (1 -discount)
//         return {
//             ...car,
//             price: newPrice
//         }
//     })
//     return result
// };


// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({
//     ...car,
//     price: car.price * (1 -discount),
// }))


// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));



// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const filterByPrice = (cars, threshold) => {
//     const result = cars.filter(({price})=> price < threshold)
//     return result
// };
// const filterByPrice = (cars, threshold) => cars.filter(({price})=> price < threshold)


// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));



// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);

// console.table(getCarsWithDiscount(cars));



// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getCarsWithType = (cars, type) => cars.filter(({type : carType}) =>  type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));



// Example 6 - Метод find
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getCarByModel = (cars, model) => cars.find(({
//     model: carModel
// }) => model === carModel);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));


// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.
// console.log(cars);
// const sortByAscendingAmount = cars =>  cars.sort((a,b) => a.amount - b.amount)


// console.table(sortByAscendingAmount(cars));


// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a,b) => b.price - a.price);

// console.log(cars);
// console.table(sortByDescendingPrice(cars));


// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const sortByModel = (cars, order) => {
//     if(order === 'asc'){
//         return [...cars].sort((a,b)=> a.model.localeCompare(b.model) )
//     }else {
//         return [...cars].sort((a,b)=> b.model.localeCompare(a.model))
//     }
// };

// const sortByModel = (cars, order) => [...cars]
//     .sort(({
//         model: a
//     }, {
//         model: b
//     }) => order === 'asc' ? a.localeCompare(b) : b.localeCompare(a))



// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));


// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
const getTotalAmount = cars => cars.reduce((acc, {
    amount
}) => acc + amount, 0);

console.log(getTotalAmount(cars));


// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getModelsOnSale = cars => cars.filter(({onSale}) => onSale)
// .map(({model}, _ , arr)=>{
//     console.log("cars",cars);
//     console.log('filter',arr);
//     return model
// });
// const getModelsOnSale = cars => cars.filter(({
//         onSale
//     }) => onSale)
//     .map(({
//         model
//     }) => model);

// console.log(getModelsOnSale(cars));


// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
//[ {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false
// }]
// const getSortedCarsOnSale = cars => cars.filter(({
//     onSale
// }) => onSale)
// .sort((a,b) => a.price - b.price)
// console.log(cars);
// console.table(getSortedCarsOnSale(cars));



// const str = 'sdkghsuiokdhvikoahfozh';
// // {
// //     s: 2,
// //     d: 2,
// //     k: 3
// // }

// const foo = str => str.split('').reduce((acc, item) => {
//     // if (acc.hasOwnProperty(item)) {
//     //     acc[item] += 1
//     // } else {
//     //     acc[item] = 1
//     // }
//     acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1
//     return acc
// }, {})


// console.log(foo(str));

const cars2 = ["Ford", "Honda", "Mazda", "Toyota"]
const cars3 = []
// Кількість авто 4:
// 1 Ford
// 2 Honda
// 3 Mazda
// 4 Toyota

// Нажаль авто відсутні


// const boo = arr => arr.reduce((acc, car, idx) => {
//     acc += `${idx + 1} - ${car}\n`
//     return acc
// }, arr.length ? `Кількість авто ${arr.length}:\n` : {
//     errorMessage: 'Нажаль авто відсутні 😥'
// })

// console.log(boo(cars2));
// console.log(boo(cars3));

const arr = [1, 2, 3, 4, 5];
const result = arr.filter(item => item !== 3)
console.log(result);