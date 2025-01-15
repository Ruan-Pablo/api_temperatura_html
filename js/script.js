function colocarTela(data){
    const fieldCity = document.querySelector('#city')
    const fieldTemp = document.querySelector('#temparature span')
    const fieldDesc = document.querySelector('#description')
    const fieldIcon = document.querySelector('#weather-icon')
    const fieldHumidity = document.querySelector('#humidity span')
    const fieldWind = document.querySelector('#wind span')

    fieldCity.innerText = data.name
    fieldTemp.innerText = parseInt(data.main.temp)
    fieldDesc.innerText = data.weather[0].description
    fieldIcon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    fieldHumidity.innerText = data.main.humidity
    fieldWind.innerText = data.wind.speed

    const container = document.querySelector('#response')
    container.classList.remove("hide")
}

async function consultarTEMP(){
    const key = ''; // API key
    const city = document.getElementById("city-input").value;
    console.log(city);

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`;
        const res = await fetch(url);


        if (!res.ok) {
            console.log('Cidade não encontrada');
            const resul = document.getElementById('response');
            resul.classList.remove("hide");
            resul.innerHTML = '<p>Cidade não encontrada</p>';
            return;
        }

        const data = await res.json();
        console.log(data);
        colocarTela(data);

    } catch (err) {
        console.error("Erro ao consultar: ", err);
        const resul = document.getElementById('response');
        resul.classList.remove("hide");
        resul.innerHTML = '<p>Erro na consulta. Tente novamente</p>';
    }
}