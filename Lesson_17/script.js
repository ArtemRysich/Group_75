// https://www.jscamp.app/ru/docs/javascript25/
// https://uk.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81_Unix

// console.log('start');

// setTimeout(()=>{
//     console.log('setTimeout');
// },1000)

// console.log('end');

// console.time('timer')
// console.log('start');

// setTimeout(()=>{
//     console.log('setTimeout');
// },0)

// for(let i = 0; i < 50000; i+=1){
//     console.log(i);
// }
// console.log('end');
// console.timeEnd('timer')

// const id = setTimeout(
//   (a, b, c) => {
//     console.log(a, b, c);
//   },
//   2000,
//   5,
//   10,
//   15
// );

// const id2 = setInterval(
//   (a, b, c) => {
//     console.log(a, b, c);

//     clearInterval(id2)
//   },
//   2000,
//   7,
//   9,
//   11
// );

// console.log('setTimeout',id);
// console.log('setInterval',id2);

// const box = document.querySelector(".js-box");
// const timer = document.querySelector(".js-timer");

// setTimeout(() => {
//   box.style.display = "block";
//   let counter = 10;

//   const id = setInterval(() => {
//     counter -= 1;
//     timer.textContent = counter;
//     if (!counter) {   //!counter     counter === 0
//       clearInterval(id);
//       timer.textContent = "X";
//       timer.addEventListener("click", () => {
//         timer.style.cursor = "pointer";
//         box.style.display = "none";
//       });
//     }
//   }, 1000);
// }, 5000);

// const currentTime = new Date();
// const futureTime = new Date('4 12 23')
// console.log(currentTime.getDate());
// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
// console.log(currentTime);
// console.log(namesOfMonth[currentTime.getMonth()]);
// console.log(arrDay[currentTime.getDay()]);
// console.log(currentTime.getFullYear());
// console.log(convertMs(currentTime.setFullYear(2024)-Date.now()));
// console.log(currentTime);

// const targetDate = currentTime.setFullYear(2024)

// setInterval(()=>{
// console.log(convertMs(targetDate - Date.now()));
// },1000)

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

//--------------------------------------------------------/

const year = document.querySelector(".date-year");
const month = document.querySelector(".date-month");
const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const digitalClock = document.querySelector(".digital-clock");
const hoursArrow = document.querySelector(".clock-hours__arrow");
const minutesArrow = document.querySelector(".clock-minutes__arrow");
const secondsArrow = document.querySelector(".clock-seconds__arrow");

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

setInterval(() => {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentDay = arrDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const secondDeg = 360 / 60;
  const minuteDeg = 360 / 60;
  const hourDeg = 360 / 12;

  const formatTime = `Поточний час: ${hours
    .toString()
    .padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  secondsArrow.style.transform = `rotate(${seconds * secondDeg}deg)`;
  minutesArrow.style.transform = `rotate(${minutes * minuteDeg}deg)`;
  hoursArrow.style.transform = `rotate(${
    hours * hourDeg + (hourDeg / 60) * minutes
  }deg)`;

  //   year.textContent = currentYear;
  //   month.textContent = currentMonth;
  day.textContent = currentDay;
  date.textContent = currentDate;
  digitalClock.textContent = formatTime;
}, 1000);




