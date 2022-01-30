function searchFunction() {
    let place = document.forms["search"]["inpt"].value;
    console.log(place);
    const api = "5c3719064a54df73b8e20ea80f7726ee";

    let city = document.querySelector("#city")
    let temp = document.querySelector("#temp")
    let cond = document.querySelector("#cond")
    let input = document.querySelector("#inpt")
    let submit = document.querySelector("#submit")
    let speed = document.querySelector("#speed")
    const kelvin = 272.15;

    const base = `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api}`

    fetch (base)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            //calculate hue
            var h = 2 * ((data.main.temp - kelvin) * -1) + 120;
            if (h <= 0) {
                h = 0;
            }
            else if (h >= 240) {
                h = 240;
            }
        console.log(h);

        //Background
        

        //display data
        city.textContent = data.name + ", " + data.sys.country;
        temp.textContent = Math.floor(data.main.temp - kelvin) + "°C";
        cond.textContent = data.weather[0].description;
        speed.textContent = `Wind: ${data.wind.speed} km/h`

        //adapting the colorscheme
        body.style.backgroundImage = `linear-gradient(hsl(${h},${100}%,${70}%), hsl(${h},${100}%,${40}%))`
        body.style.color = `hsl(${h},${100}%,${10}%)` 
        input.style.backgroundColor = `hsl(${h},${100}%,${90}%)`
        input.style.borderColor = `hsl(${h},${100}%,${30}%)`
        submit.style.backgroundColor = `hsl(${h},${100}%,${90}%)`
        submit.style.borderColor = `hsl(${h},${100}%,${30}%)`
        })
}