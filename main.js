"use strict";

const form = document.querySelector(".weather-form");
const wrapper = document.querySelector(".wrapper");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weatherDataToObj = function (data) {
  const weatherDataObj = {
    icon: data.current.condition.icon,
    text: data.current.condition.text,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
    high: data.forecast.forecastday[0].day.maxtemp_c,
    low: data.forecast.forecastday[0].day.mintemp_c,
    feelsC: data.current.feelslike_c,
    feelsF: data.current.feelslike_f,
    uv: data.current.uv,
    wind: data.current.wind_mph,
    gust: data.current.gust_mph,
    precip: data.current.precip_mm,
    humidity: data.current.humidity,
    air_qual: data.current.air_quality["gb-defra-index"],
    cloud: data.current.cloud,
    vis: data.current.vis_miles,
    name: data.location.name,
    country: data.location.country,
    timezone: data.location.tz_id,
    lat: data.location.lat,
    long: data.location.lon,
    forTempC1: data.forecast.forecastday[1].day.avgtemp_c,
    forTempC2: data.forecast.forecastday[2].day.avgtemp_c,
    forHighC1: data.forecast.forecastday[1].day.maxtemp_c,
    forHighC2: data.forecast.forecastday[2].day.maxtemp_c,
    forLowC1: data.forecast.forecastday[1].day.mintemp_c,
    forLowC2: data.forecast.forecastday[2].day.mintemp_c,
    forCondition1: data.forecast.forecastday[1].day.condition.icon,
    forCondition2: data.forecast.forecastday[2].day.condition.icon,
    forText1: data.forecast.forecastday[1].day.condition.text,
    forText2: data.forecast.forecastday[2].day.condition.text,
    forDate1: data.forecast.forecastday[1].date,
    forDate2: data.forecast.forecastday[2].date,
  };
  return weatherDataObj;
};

const renderCurrentHtml = function (obj) {
  const myDate = new Date(obj.forDate1);
  const myDate1 = new Date(obj.forDate2);
  const dayOfWeek = myDate.getDay();
  const dayOfWeek1 = myDate1.getDay();
  return `<div class="geo">
  <div class="location">${obj.name}, ${obj.country}</div>
  <div class="date"></div>
  </div>
  <div class="temps">
  <div class="t">
  <div class="temp">${obj.tempC}&deg;C</div>
  <div class="for-temp">
  <div class="high">H: ${obj.high}&deg;</div>
  <div class="low">L: ${obj.low}&deg;</div>
  </div>
  </div>
  <div class="description">
  <div class="icon-container">
  <img
  src= ${obj.icon}
  alt="Weather Icon"
  class="icon-1"
  />
  </div>
  <div class="text">${obj.text}</div>
  </div>
  </div>
  <div class="f">
          <div class="day-hours">
          <div class="slider">
          <div class="slide">
            <div class="hour-container">
              <div class="hour-title">12:00</div>
              <div class="hour-info">
                <div class="hour-conditions">
                  <div class="hour-icon">
                    <img
                      src="${obj.forCondition1}"
                      alt="Weather Icon"
                      class="icon-1"
                    />
                  </div>
                  <div class="hour-text">Sunny</div>
                </div>
                <div class="hour-temp">20&deg;C</div>
              </div>
            </div>
            <div class="hour-container">
              <div class="hour-title">12:00</div>
              <div class="hour-info">
                <div class="hour-conditions">
                  <div class="hour-icon">
                    <img
                      src="${obj.forCondition1}"
                      alt="Weather Icon"
                      class="icon-1"
                    />
                  </div>
                  <div class="hour-text">Sunny</div>
                </div>
                <div class="hour-temp">20&deg;C</div>
              </div>
            </div>
            <div class="hour-container">
              <div class="hour-title">12:00</div>
              <div class="hour-info">
                <div class="hour-conditions">
                  <div class="hour-icon">
                    <img
                      src="${obj.forCondition1}"
                      alt="Weather Icon"
                      class="icon-1"
                    />
                  </div>
                  <div class="hour-text">Sunny</div>
                </div>
                <div class="hour-temp">20&deg;C</div>
              </div>
            </div>
            <div class="hour-container">
              <div class="hour-title">12:00</div>
              <div class="hour-info">
                <div class="hour-conditions">
                  <div class="hour-icon">
                    <img
                      src="${obj.forCondition1}"
                      alt="Weather Icon"
                      class="icon-1"
                    />
                  </div>
                  <div class="hour-text">Sunny</div>
                </div>
                <div class="hour-temp">20&deg;C</div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="hour-container">
              <div class="hour-title">13:00</div>
              <div class="hour-info">
                <div class="hour-conditions">
                  <div class="hour-icon">
                    <img
                      src="${obj.forCondition1}"
                      alt="Weather Icon"
                      class="icon-1"
                    />
                  </div>
                  <div class="hour-text">Sunny</div>
                </div>
                <div class="hour-temp">21&deg;C</div>
              </div>
            </div>
          </div>
          <button class="slider__btn slider__btn--left">&larr;</button>
          <button class="slider__btn slider__btn--right">&rarr;</button>
        </div>
        </div>
          <div class="day-forecast">
            <div class="day-container">
              <div class="day-title">${daysOfWeek[dayOfWeek]}</div>
              <div class="day-info">
                <div class="day-conditions">
                  <div class="day-text">${obj.forText1}</div>
                  <div class="day-icon"><img
                  src= ${obj.forCondition1}
                  alt="Weather Icon"
                  class="icon-1"
                  /></div>
                </div>
                <div class="day-temp">${obj.forTempC1}&deg;C</div>
              </div>
              <div class="day-temps">
                <div class="day-high">${obj.forHighC1}&deg;C</div>
                <div class="day-low">${obj.forLowC1}&deg;C</div>
              </div>
            </div>
            <div class="day-container">
              <div class="day-title">${daysOfWeek[dayOfWeek1]}</div>
              <div class="day-info">
                <div class="day-conditions">
                  <div class="day-text">${obj.forText2}</div>
                  <div class="day-icon"><img
                  src= ${obj.forCondition2}
                  alt="Weather Icon"
                  class="icon-1"
                  /></div>
                </div>
                <div class="day-temp">${obj.forTempC2}&deg;C</div>
              </div>
              <div class="day-temps">
                <div class="day-high">${obj.forHighC2}&deg;C</div>
                <div class="day-low">${obj.forLowC2}&deg;C</div>
              </div>
            </div>
          </div>
        </div>`;
};

const renderDetailsHtml = function (obj) {
  return `<div class="details-container">
  <div class="container">
  <div class="details">
  <div class="title">Feels Like</div>
  <div class="d">
  <svg
  class="icon feel"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  >
  <path
  d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z"
  />
  </svg>
  <div class="detail">${obj.feelsC}&deg;</div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="details">
  <div class="title">Precipitation</div>
  <div class="d">
  <svg
  class="icon precip"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  >
  <path
  d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"
  />
  </svg>
  <div class="detail">${obj.precip}mm</div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="details">
  <div class="title">Wind</div>
  <div class="d">
  <svg
  class="icon wind"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  >
  <path
  d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z"
  />
  </svg>
  <div class="detail">${obj.wind}mph</div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="details">
  <div class="title">UV</div>
  <div class="d">
  <svg
  class="icon uv"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  >
  <path
  d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"
  />
  </svg>
  <div class="detail">${obj.uv}</div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="details">
  <div class="title">Humidity</div>
  <div class="d">
  <svg
  class="icon humid"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  >
  <path
  d="M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64M14,15A1,1 0 0,0 13,14H3A1,1 0 0,0 2,15A1,1 0 0,0 3,16H13A1,1 0 0,0 14,15M22,15A1,1 0 0,0 21,14H17A1,1 0 0,0 16,15A1,1 0 0,0 17,16H21A1,1 0 0,0 22,15M10,19A1,1 0 0,0 11,20H20A1,1 0 0,0 21,19A1,1 0 0,0 20,18H11A1,1 0 0,0 10,19M3,19A1,1 0 0,0 4,20H7A1,1 0 0,0 8,19A1,1 0 0,0 7,18H4A1,1 0 0,0 3,19M12,9A3,3 0 0,1 15,12H17A5,5 0 0,0 12,7A5,5 0 0,0 7,12H9A3,3 0 0,1 12,9Z"
  />
</svg>
<div class="detail">${obj.humidity}%</div>
</div>
</div>
</div>
<div class="container">
<div class="details">
<div class="title">Air Quality</div>
<div class="d">
<svg
class="icon air"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
>
<path
d="M16 12C16 10.9 16.9 10 18 10S20 10.9 20 12 19.1 14 18 14 16 13.1 16 12M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12M4 12C4 10.9 4.9 10 6 10S8 10.9 8 12 7.1 14 6 14 4 13.1 4 12M13 18C13 16.9 13.9 16 15 16S17 16.9 17 18 16.1 20 15 20 13 19.1 13 18M7 18C7 16.9 7.9 16 9 16S11 16.9 11 18 10.1 20 9 20 7 19.1 7 18M13 6C13 4.9 13.9 4 15 4S17 4.9 17 6 16.1 8 15 8 13 7.1 13 6M7 6C7 4.9 7.9 4 9 4S11 4.9 11 6 10.1 8 9 8 7 7.1 7 6"
/>
</svg>
<div class="detail">${obj.air_qual}</div>
</div>
</div>
</div>
<div class="container">
<div class="details">
<div class="title">Cloud Coverage</div>
<div class="d">
<svg
class="icon cloud"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
>
<path
d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z"
/>
</svg>
<div class="detail">${obj.cloud}%</div>
</div>
</div>
</div>
<div class="container">
<div class="details">
<div class="title">Visibility</div>
<div class="d">
<svg
class="icon vis"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
>
<path
d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
/>
</svg>
<div class="detail">${obj.vis}mil</div>
</div>
</div>
</div>
</div>`;
};

const getWeatherData = async function (city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ba251a9ec49e494b938102113241301&q=${city}&aqi=yes&days=3`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch weather data. Status: ${response.status}`
      );
    }

    const weatherData = await response.json();
    console.log(weatherData);
    const weatherObj = weatherDataToObj(weatherData);
    return weatherObj;
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const location = Object.fromEntries(formData);
  const obj = await getWeatherData(location.cityName);
  console.log(obj);
  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/${obj.timezone}`
  );
  const formattedDateTime = await res.json().then((data) => {
    const rawDateTime = new Date(data.datetime);

    const locale = navigator.language;
    const options = {
      timeZone: obj.timezone,
      dateStyle: "full",
      timeStyle: "short",
    };
    const formattedDateTime = new Intl.DateTimeFormat(locale, options)
      .formatToParts(rawDateTime)
      .filter((part) => part.type !== "timeZoneName")
      .map((part) => part.value)
      .join("");

    return formattedDateTime;
  });
  const currentContainer = document.querySelector(".current-content");
  const forecastContainer = document.querySelector(".forecast");
  currentContainer.innerHTML = "";
  forecastContainer.innerHTML = "";
  currentContainer.insertAdjacentHTML("beforeend", renderCurrentHtml(obj));
  forecastContainer.insertAdjacentHTML("beforeend", renderDetailsHtml(obj));
  const date = document.querySelector(".date");
  date.textContent = formattedDateTime;
  slider();
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  // const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  // const createDots = function () {
  //   slides.forEach(function (_, i) {
  //     dotContainer.insertAdjacentHTML(
  //       'beforeend',
  //       `<button class="dots__dot" data-slide="${i}"></button>`
  //     );
  //   });
  // };

  // const activateDot = function (slide) {
  //   document
  //     .querySelectorAll('.dots__dot')
  //     .forEach(dot => dot.classList.remove('dots__dot--active'));

  //   document
  //     .querySelector(`.dots__dot[data-slide="${slide}"]`)
  //     .classList.add('dots__dot--active');
  // };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    // createDots();

    // activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  // dotContainer.addEventListener('click', function (e) {
  //   if (e.target.classList.contains('dots__dot')) {
  //     const { slide } = e.target.dataset;
  //     goToSlide(slide);
  //     activateDot(slide);
  //   }
  // });
};
