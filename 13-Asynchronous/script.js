'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/** Our First AJAX Call XMLHttpRequest */
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `<article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               data.population / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('vietnam');
// getCountryData('usa');

/** Welcome to Callback Hell */
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render country 1
//     renderCountry(data);
//     const neighbor = data.borders?.[0];
//     if (!neighbor) return;
//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       //Render country 2
//       renderCountry(data2);
//     });
//   });
// };
// getCountryAndNeighbor('vietnam');
/** Consuming Promises */
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('vietnam');

/** Chaining Promises */
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
    return response.json();
  });
};
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 💥💥`);
//       renderError(`Some thing went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/** Handling Rejected Promises */
btn.addEventListener('click', function () {
  // getCountryData('vietnam');
  getCountryData('australia');
});
/** Throwing Errors Manually */
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderError(`Some thing went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

/** Building A Simple Promise */
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(res => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 seconds'));

/** Promisify Geolocation API */
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //     navigator.geolocation.getCurrentPosition(
    //       position => resolve(position),
    //       err => reject(err)
    //     );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

/** Consuming Promises with AsyncAwait */
const whereAmI = async function (country) {
  try {
    //Geolocation
    // const pos = await getPosition();
    // const { latitude: lat, longitude: lng } = pos.coords;
    // //Reverse geocoding
    // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    // if (!resGeo.ok) throw new Error('Problem with getting location data');
    // const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    //Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem with getting country');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (error) {
    console.log(`${error} 💥`);
    renderError(`Something went wrong 💥💥💥${error.message}`);
  }
};
whereAmI('vietnam');
console.log('FIRST');

/** Running Promises in Parallel */
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    //   const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    //Promise.all will short-circuit as soon as one promise reject
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital[0]));
  } catch (error) {
    console.log(error);
  }
};
get3Countries('vietnam', 'usa', 'portugal');

/** Other Promise Combinators race, allSettled and any */
//Promise.race(): return the first promise win the race (no matter it is fulfilled or rejected)
//Promise.race is short-circuiting
(async function () {
  const res = await Promise.all([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

//Promise.allSettled() [ES2020]: return all settled promises (no matter it is fulfilled or rejected)
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//Promise.any() [ES2021]: return the first fulfilled promise, ignore rejected promises.
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));
