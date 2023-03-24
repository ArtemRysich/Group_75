// // const inputEl = document.querySelector('.js-input');
// // inputEl.addEventListener('input', onInput)
// // inputEl.addEventListener('change', onChange)

// // function onInput(evt='hello'){
// //     // console.log(evt);
// //     console.log(inputEl.value);
// //     // log()
// // }

// // function onChange(evt){
// //     alert('Напишіть ще щось')
// // }

// // function log(){
// //     console.log('test value');
// // }

// // submit

// // const form = document.querySelector(".js-form");
// // form.addEventListener("submit", onSubmit);

// // function onSubmit(evt) {
// //   evt.preventDefault();
// //   const { userName, userEmail } = evt.currentTarget.elements;
// //   const data = {
// //     name : userName.value,
// //     email: userEmail.value
// //   }

// //   console.log(data);
// // }

// // const button = document.querySelector(".js-click");
// // const box = document.querySelector(".js-box");
// // let step = 0;

// // button.addEventListener("click", onClick);

// // function onClick() {
// //   step += 50;
// //   box.style.marginTop = step + 'px';
// //   box.style.marginLeft = `${step}px`
// // }
// // const list = document.querySelector(".js-list");
// // const maxLength = 7;
// // const pointLength = 3;
// // const totalLength = maxLength + pointLength;

// // function formatString (title) {
// //     const result = title.textContent.slice(0, maxLength);
// //     const data = title.textContent.slice(maxLength);
// //     title.setAttribute("data-value", data);
// //     title.textContent = result + "...";
// //     title.addEventListener("click", onClick);
// //   }

// // [...list.children].forEach(formatString);

// // function onClick(evt) {
// //   const element = evt.currentTarget;
// //   if (element.textContent.length <= totalLength) {
// //     const { value } = element.dataset;
// //     element.textContent = element.textContent.slice(0, maxLength) + value;
// //   } else {
// //     formatString(element);
// //   }
// // }

// //

// // const box = document.querySelector(".js-box");
// // const button = document.querySelector('.js-click')
// // button.addEventListener('click',onClick)

// // function onClick(){
// //     box.classList.remove('box-hidden');
// //     document.addEventListener("keydown", onKey);
// // }

// // function onKey(evt) {
// //   if (evt.code === "Escape") {
// //     box.classList.add('box-hidden')
// //     document.removeEventListener("keydown", onKey)
// //   }
// // }

// // document.addEventListener('keydown', onKey);

// // function onKey(evt){
// //     console.log(evt);
// //     if(evt.ctrlKey && evt.code === 'KeyC'){
// //         console.log('copy paste');
// //         evt.preventDefault();
// //     }
// // }

// const cars = [
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 33,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 4,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// // {
// //     id: 1,
// //     car: "Honda",
// //     type: "Civic",
// //     price: 12000,
// //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
// //   },

// const list = document.querySelector(".js-list");
// const form = document.querySelector(".js-search-form");

// form.addEventListener("submit", onSearch);

// function createMarkup(arr) {
//   const markup = arr
//     .map(
//       ({ id, car, type, price, img }) => `
// <li data-id="${id}">
//     <img src="${img}" alt="${car}" width="300">
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <p>${price}</p>
// </li>`
//     )
//     .join("");
//   return markup;
// }
// list.insertAdjacentHTML("beforeend", createMarkup(cars));

// function onSearch(evt) {
//   evt.preventDefault();
//   const { query, option } = evt.currentTarget.elements;
// //   const fullPathQuery = evt.currentTarget.elements.query;
// //   const fullPathOption = evt.currentTarget.elements.option;
//   console.log(option.value);
//   obj.property;
//   obj['property']
//                                             //car type
//   const result = cars.filter((item) => item[option.value].toLowerCase().includes(query.value.toLowerCase()));
//   list.innerHTML = createMarkup(result);
// }


const button = document.querySelector('.js-click')
const input = document.querySelector('.js-amount')
button.addEventListener('click', onClick)

function onClick(){
    console.log(input.value);
    for(let i = 0; i < Number(input.value); i+=1){
        console.log(`Ітерація номер ${i}`);
    }
}