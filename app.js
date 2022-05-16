const locationInput = document.querySelector('#location');
const form = document.querySelector('form');
const container = document.querySelector('.container');

// 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c6332489d214b5eefb799cffe1ca4f0e'
//colour palette 4395

async function getWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c6332489d214b5eefb799cffe1ca4f0e`, {mode:'cors'});
    const weatherData = await response.json();
    const { name, main, weather } = weatherData;
    const returnData = {
        name,
        feelsLike: main.feels_like,
        temp: main.temp,
        weather: weather[0].main,
        description: weather[0].description
    };
    return returnData;
};

//Function for displaying info
function fillInfo(info) {
    container.innerHTML = '';
    createLayout();
    const locationName = document.querySelector('h2');
    locationName.textContent = info.name;
    const weatherType = document.querySelector('#weatherType');
    weatherType.textContent = info.weather;
    const description = document.querySelector('#description');
    description.textContent = info.description;
    const tempValue = document.querySelector('#value');
    tempValue.textContent = `${tempConverter(info.temp).toFixed(0)}`;
    const unit = document.querySelector('#unit');
    unit.textContent = ' °C';
    const feelsLike = document.querySelector('#feels-like');
    feelsLike.innerHTML = `Feels like <span id="feelsLikeValue">${tempConverter(info.feelsLike).toFixed(0)}</span><span id="feelsLikeUnit"> °C</span>`;
};

//listeners
function addListeners() {
    const tempControl = document.querySelector('.temp');
    const temp = document.querySelector('#value');
    const feelsLikeTemp = document.querySelector('#feelsLikeValue');
    const unit = document.querySelector('#unit');
    const feelsLikeUnit = document.querySelector('#feelsLikeUnit');

    tempControl.addEventListener('click', () => {
    if (unit.textContent == ' °C') {
        const celsius = temp.textContent;
        const celsius2 = feelsLikeTemp.textContent;
        const fahrenheit = ((celsius * 1.8) + 32).toFixed(0);
        const fahrenheit2 = ((celsius2 * 1.8) + 32).toFixed(0);
        changeValue(fahrenheit, ' °F');
        changeValue(fahrenheit2, ' °F')
    } else {
        const fahrenheit = temp.textContent;
        const fahrenheit2 = feelsLikeTemp.textContent;
        const celsius = ((fahrenheit - 32) / 1.8).toFixed(0);
        const celsius2 = ((fahrenheit2 - 32) / 1.8).toFixed(0);
        changeValue(celsius, ' °C');
        changeValue(celsius2, ' °C');
    } 
    });

    function changeValue(value, value2) {
        temp.textContent = value;
        feelsLikeTemp.textContent = value;
        unit.textContent = value2;
        feelsLikeUnit.textContent = value2;
    };
};

function checkWindowSize() {
    if (window.innerWidth < 600) {
        window.addEventListener('resize', addAnimation);
    } else if(window.innerWidth > 600) {
        window.removeEventListener('resize', addAnimation);
        const weatherType = document.querySelector('#weatherType');
        weatherType.removeEventListener('click', animate);
         const description = document.querySelector('#description');
        description.style.opacity = 1;
    }
};

window.onresize = checkWindowSize;

function addAnimation() {
    const weatherType = document.querySelector('#weatherType');
    const description = document.querySelector('#description');
    description.style.opacity = 0;
    weatherType.addEventListener('click', animate);
};

function animate() {
    weatherType.style.transform = `translateY(-${weatherType.getBoundingClientRect().height}px)`;
        weatherType.style.opacity = '0';
        description.style.transform = `translateY(-${weatherType.getBoundingClientRect().height}px)`;
        description.style.opacity = '1';
        setTimeout(() => {
            weatherType.style.transform = '';
            weatherType.style.opacity = '1';
            description.style.transform = '';
            description.style.opacity = '0';
        }, 2000);
}

function tempConverter(temp) {
    return temp - 275;
};

// Function that fills the page
function createLayout() {
    const locationName = document.createElement('h2');

    //weather block
    const weather = document.createElement('div');
    weather.id = 'weather';
    const weatherType = document.createElement('p');
    weatherType.id = 'weatherType';
    const description = document.createElement('span');
    description.id = 'description';
    weather.append(weatherType);
    weather.append(description);

    //temperature block
    const temp = document.createElement('div');
    temp.classList.add('temp');
    const mainTemp = document.createElement('p');
    mainTemp.id = 'main-temp';
    const tempValue = document.createElement('span');
    tempValue.id = 'value';
    const unit = document.createElement('span');
    unit.id = 'unit';
    
    const feelsLike = document.createElement('span');
    feelsLike.id = 'feels-like';
    const feelsLikeValue = document.createElement('span');
    const feelsLikeUnit = document.createElement('span');
    feelsLikeValue.id = 'feelsLike-value';
    feelsLikeUnit.id = 'feelsLike-unit';
    feelsLike.append(feelsLikeValue);
    feelsLike.append(feelsLikeUnit);

    mainTemp.append(tempValue);
    mainTemp.append(unit);
    temp.append(mainTemp)
    temp.append(feelsLike);

    container.append(locationName);
    container.append(weather);
    container.append(temp);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchLocation = await getWeather(locationInput.value);
    console.log(searchLocation);
    fillInfo(searchLocation);
    locationInput.value = '';
    addListeners();
});

createLayout();
addListeners();
