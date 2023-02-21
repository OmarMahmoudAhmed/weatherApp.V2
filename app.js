let apiKey = `01cae74df365b5a614a7f7a6baeb7181`;

let dataContainer = {};

let input1 = document.getElementById(`cityName`);

let button = document.getElementById(`generate`);

let day = document.getElementById(`day`),
    degree = document.getElementById(`degree`),
    city = document.getElementById(`city`);

button.addEventListener(`click`, generate);

async function generate() {
    let cityName = input1.value;

    console.log(cityName);

    fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    ).then((response) => response.json())
    .then((data) => {
        dataContainer.content = data;

        degree.textContent = `${Math.round(dataContainer.content.main.temp)}\u00B0`;
        city.textContent = dataContainer.content.name;
        day.textContent = dataContainer.content.weather[0].description;
    })

    degree.style.cssText = `transition: 0.5s; visibility: visible;`;
    city.style.cssText = `transition: 0.5s; visibility: visible;`;
    day.style.cssText = `transition: 0.5s; visibility: visible;`;
}