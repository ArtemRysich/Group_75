// IIFE
// https://developer.mozilla.org/ru/docs/Glossary/IIFE
// closest
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

// const container = document.querySelector(".js-container");

// container.addEventListener('click', onClick)
// // [...container.children].forEach(item => item.addEventListener('click', onClick));

// function onClick(evt){
//     // console.log(evt.currentTarget);
//     // console.log(evt.target);
//     // console.log(evt.currentTarget.dataset.color);
//     if(!evt.target.classList.contains('js-box')){
//         return;
//     }
//     console.log(evt.target.dataset.color);
// }

// const item = document.querySelector('.js-item');

// item.addEventListener('click', onClick)

// function onClick(evt){
//     console.log(evt.target);
// }

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
//     id: 3,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const list = document.querySelector(".js-list");
// (function () {
//   const markup = cars
//     .map(
//       ({ img, car, id }) => `
// <li data-car-id="${id}" class="js-card">
// <img src="${img}" alt="${car}" class="js-target">
// <h2>${car}</h2>
// </li>`
//     )
//     .join("");

//   list.insertAdjacentHTML("beforeend", markup);
// })();

// list.addEventListener("click", onclick);

// function onclick(evt) {
//   if (!evt.target.classList.contains("js-target")) {
//     return;
//   }

//   const currentCard = evt.target.closest(".js-card");
//   const carId = Number(currentCard.dataset.carId);
//   const data = cars.find(({ id }) => id === carId);

//   const instance = basicLightbox.create(`
//   <div class="bg">
//   <img src="${data.img}" alt="${data.car}">
//   <h2>${data.car}</h2>
//   <h3>${data.type}</h3>
//   <p>${data.price}</p>
// </div>
// `);
//   instance.show();
// }
// {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },

// Перерва до 21.10

// const content = document.querySelector(".js-content");
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// let player = "X";
// const historyX = [];
// const historyO = [];

// function createMarkup() {
//   let markup = "";

//   for (let i = 1; i <= 9; i += 1) {
//     markup += `<div class="item js-target" data-id="${i}"></div>`;
//   }
//   content.innerHTML = markup;
// }
// createMarkup();

// content.addEventListener("click", onClick);

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-target") || target.textContent) {
//     return;
//   }

//   const { id } = target.dataset;
//   let result = false;

//   if (player === "X") {
//     historyX.push(Number(id));
//     result = historyX.length < 3 ? false : isWinner(historyX);
//   } else {
//     historyO.push(Number(id));
//     result = historyO.length < 3 ? false : isWinner(historyO);
//   }

//   target.textContent = player;

//   if (result) {
//     const instance = basicLightbox.create(`<h1>Winner ${player} 😎😎😎</h1>`);
//     instance.show();
//     resetGame();
//     return;
//   } else if (historyO.length + historyX.length === 9) {
//     const instance = basicLightbox.create(`<h1>Try again 😂😂😂</h1>`);
//     instance.show();
//     resetGame();
//     return;
//   }

//   player = player === "X" ? "O" : "X";
// }

// // some every includes
// // const wins = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9],
// //     [1, 4, 7],
// //     [2, 5, 8],
// //     [3, 6, 9],
// //     [1, 5, 9],
// //     [3, 5, 7],
// //   ];

// function isWinner(arr) {
//                         //[1, 2, 3]       historyX historyO
//   return wins.some((item) => item.every((num) => arr.includes(num)));
// }

// function resetGame() {
//   createMarkup();
//   player = "X";
//   historyX.length = 0;
//   historyO.splice(0, historyO.length);
// }



const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert(
    "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

child.addEventListener("click", () => {
  alert(
    "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

descendant.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  alert("Descendant click handler");
})

descendant.addEventListener("click", (event) => {
    alert("Descendant click handler one more");
  })