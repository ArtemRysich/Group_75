// async function getDeclaration(){}
// const getExpression = async function(){}
// const getArrow = async () => { }


// const APIobject = {
//     async getDeclaration() { },
//     getExpression: async function () { },
//     getArrow: async () => { }
// }


// const arr = [1, 2, 3];

// arr.map(async function(item){})
// arr.map(async (item) => {})

// 'https://restcountries.com/v3.1/name/'

// function getCountry() {
//     console.log('start');
//     const response = fetch('https://restcountries.com/v3.1/name/Ukraine');
//     const data = response.json();
//     console.log(data);
// }
// getCountry()


// async function getCountry() {
//     try {
//         console.log('start');
//         const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//         const data = await response.json()
//         console.log(data);
//         console.log("end");
//         return data
//     } catch (e) {
//         console.log(e);
//     }
//     // return 'Hello'
// }
// getCountry()
// .then(data => console.log(data))
// .catch(err => console.log(err))




// async function getCountry() {
// const ukraine = await fetch('https://restcountries.com/v3.1/name/Ukraine');
// const france = await fetch('https://restcountries.com/v3.1/name/France');
// const greece = await fetch('https://restcountries.com/v3.1/name/Greece');
// try {
//     const arr = ['Ukraine', 'France', 'Greece', 'fdghdgsekghdjk'];
//     const resps = arr.map(async (country) => {
//         const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//         const data = await resp.json()
//         return data;
//     })


// Promise.all
// Promise.allSettled
// Promise.race
// const data = await Promise.allSettled(resps)
// data.forEach(item => {
//     if(item.status === 'fulfilled'){
//         console.log(item);
//     }
// })
// console.log(data);


// const data = await Promise.all(resps)
// console.log(data);


// const data = await Promise.race(resps)
//     console.log(data);
// } catch (e) {
//     console.log(e);
// }
// }
// getCountry()


const form = document.querySelector('.js-form');
const inputContainer = document.querySelector('.js-input-container');
const addField = document.querySelector('.js-add-field');
const list = document.querySelector('.js-list')

addField.addEventListener('click', handlerAddField);
form.addEventListener('submit', handlerSearch);

function handlerAddField() {
    const input = '<input type="text" name="country">'
    inputContainer.insertAdjacentHTML('beforeend', input)
}

function handlerSearch(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const countries = formData.getAll('country');
    getWeather(countries)
        .then(data => list.innerHTML = createMarkup(data))
        .catch(err => console.log(err))
        .finally(() => evt.target.reset());
}

async function getCapitals(countries) {
    const URL = 'https://restcountries.com/v3.1/name/';

    const responses = countries.map(async (country) => {
        const respons = await fetch(`${URL}${country}`)
        if(!responses.ok){
            throw new Error(respons.statusText)
        }
        return respons.json();
    });

    const data = await Promise.allSettled(responses);

    const result = data
        .filter(({ status }) => status === "fulfilled")
        .map(({ value }) => value[0]);

    console.log(result);

    return result;
}

async function getWeather(countries) {
    const BASE_URL = "http://api.weatherapi.com/v1";
    const ENDPOINT = '/current.json';
    const API_KEY = "ce2cb9b2a3da414bb5b172546231704";

    const respCountries = await getCapitals(countries);
    const responses = respCountries.map(async ({ capital }) => {
        const city = capital[0];
        const params = new URLSearchParams({
            key: API_KEY,
            q: city,
            lang: 'uk'
        })
        const respons = await fetch(`${BASE_URL}${ENDPOINT}?${params}`);
        if(!responses.ok){
            throw new Error(respons.statusText)
        }
        return respons.json();
    })


    const data = await Promise.allSettled(responses);
    const result = data
        .filter(({ status }) => status === 'fulfilled')
        .map(({ value }) => value);

    return result
}


function createMarkup(arr) {
    return arr.map(({ location: { country, name }, current: {
        temp_c, condition: { icon, text }
    } }) => `
    <li>
    <img src="${icon}" alt="${text}">
    <div>
        <h2>${country}</h2>
        <h3>${name}</h3>
    </div>
    <p>${text}</p>
    <p>${temp_c}</p>
</li>`).join('');

}