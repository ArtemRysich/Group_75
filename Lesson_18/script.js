// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// https://www.makeuseof.com/mvc-mvp-mvvm-which-choose/

// Мікро процеси мають більший пріорітет ніж макро
// Мікро процеси
// 1 Promise
// 2 Observer

// Макро процеси
// 1 setTimeout
// 2 setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// 3 setImmediate
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// 4 requestAnimationFrame

// console.log('1');

// setTimeout(()=>{console.log('2')},1000)

// Promise.reject('3').then((value)=>{console.log(value)}).catch(err => console.log(err))

// Promise.resolve('4').then((value)=>{console.log(value)})
// Promise.resolve('5').then((value)=>{console.log(value)})
// Promise.resolve('6').then((value)=>{console.log(value)})
// Promise.resolve('7').then((value)=>{console.log(value)})
// console.log('8');

// const promise = new Promise((res, rej) => {
//   const random = Math.random(); // 0 - 1

//   setTimeout(() => {
//     if (random > 0.5) {
//       res({ name: "User", email: "test@gmail.com" });
//     } else {
//       rej({ err: 404, text: " Not found" });
//     }
//   }, 3000);
// });

///promise

// promise
//   .then(
//     (response) => response, (err) => console.log(err)
//   )
//   .then((value) => console.log(value.name))
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(()=>{})

// console.log(promise);

// const promise = () => {
//   const random = Math.random(); // 0 - 1
//   let result;
//   setTimeout(() => {
//     if (random > 0.5) {
//       result = "Yeees 😎";
//     } else {
//       result = "Nooooo 😱";
//     }
//   }, 0);

//   return result
// };
// console.log(promise());

// const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

// console.log(promise);
// promise
// .then(resp => resp.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Перерва до 21.10

const start = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

start.addEventListener("click", onStart);

function onStart() {
    start.disabled = true;

  const promises = [...container.children].map((item, idx) => {
    item.textContent = "";

    const promise = createPromise(idx);
    promise
      .then((value) => (item.textContent = value))
      .catch((err) => (item.textContent = err));
    return promise;
  });

  Promise.allSettled(promises).then((promise) => {
    const isAllRej = promise.every(({ status }) => status === "rejected");
    const isAllRes = promise.every(({ status }) => status === "fulfilled");

    setTimeout(() => {
      if (isAllRej || isAllRes) {
        alert("Winner");
      } else {
        alert("Try again");
      }
      start.disabled = false;
    }, 1000);
  });
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        res("🤑");
      } else {
        rej("😈");
      }
    }, delay * 1000);
  });
}

