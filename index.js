const api = {
    key: "ea8fc3c5545257137a11fdc279b34d3b",
    base: "https://api.openweathermap.org/data/2.5/"
}

var element = document.getElementById("box-item-id");
element.classList.remove("cold");

document.getElementById("btn-id").addEventListener('click', (e) => {
    e.preventDefault();
    let query = document.getElementById("search-bar").value;
    console.log(query);
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            let temp = Math.round(result.main["temp"]);
            let weather = result.weather[0]['main'];
            let name = result['name'];
            let country= result.sys['country'];
            console.log(name, weather, temp);
            document.getElementById("city").innerHTML = name+", "+country;
            document.getElementById("temp").innerHTML = temp + "°C";
            document.getElementById("climate").innerHTML = weather;

            if (temp > 20) {
                var element = document.getElementById("box-item-id");
                element.classList.remove("cold");
                element.classList.add("warm");

                var elementbtn=document.getElementById("btn-id");
                elementbtn.classList.remove("btn-primary");
                elementbtn.classList.add("btn-danger");
            }
            else {
                var element = document.getElementById("box-item-id");
                element.classList.remove("warm");
                element.classList.add("cold");

                var elementbtn=document.getElementById("btn-id");
                elementbtn.classList.remove("btn-danger");
                elementbtn.classList.add("btn-primary");
            }

            
        });

})



function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`;

}
