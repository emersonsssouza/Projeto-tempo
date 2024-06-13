//Data atual
const dataSemana = document.getElementById("data_semana");
const hoje = new Date().toLocaleDateString();
dataSemana.innerHTML = hoje;

const keyApi = "2dbe5e83c85862babf43f0563f61653b";

function cidadeAtual() {
    const cidade = document.getElementById("cidade").value;
    const tempoCidade = document.getElementById("localCidade");
    if (cidade == "") {
        tempoCidade.innerHTML = "Tempo agora em...";
        temp.innerHTML = "0° C";
    } else {
        buscarCidade(cidade);
    }
}
async function buscarCidade(cidade) {
    const dados = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyApi}&lang=pt_br&units=metric`
    ).then((Response) => Response.json());
    console.log(dados);
    if (dados == '' || dados === '') {
        alert('Há uma instabilidade momentanea por favor aguarde!')
    } else {
        infoTela(dados);
    }
}
function infoTela(dados) {
    const fundo = document.getElementById("BColor");
    document.getElementById("localCidade").innerHTML = "Tempo em " + dados.name;
    document.getElementById("temp").innerHTML =
        Math.floor(dados.main.temp) +
        "°C";
    document.getElementById("tempMin").innerHTML =
        ' Temp min: ' +
        Math.floor(dados.main.temp_min) +
        "°C";
    document.getElementById("tempMax").innerHTML =
        ' Temp max: ' +
        Math.floor(dados.main.temp_max) +
        "°C";
    document.getElementById("clima").innerHTML =
        ' Clima: ' + dados.weather[0].description;
    if (dados.weather[0].description == 'nublado') {
        fundo.style.backgroundImage = 'url("imagens/Nublado.jpg")';
    } else if (dados.weather[0].description == 'céu limpo') {
        fundo.style.backgroundImage = 'url("imagens/Ensolarado.jpg")';
    } else if (dados.weather[0].description == 'nuvens dispersas') {
        fundo.style.backgroundImage = 'url("imagens/Dispersas.jpg")';
    } else if (dados.weather[0].description == 'algumas nuvens') {
        fundo.style.backgroundImage = 'url("imagens/Dispersas.jpg")';
    } else if (dados.weather[0].description == 'chuva leve') {
        fundo.style.backgroundImage = 'url("imagens/Chuva.jpg")';
    } else if (dados.weather[0].description == 'chuva moderada') {
        fundo.style.backgroundImage = 'url("imagens/Moderada.jpg")';
    } else if (dados.weather[0].description == 'chuva forte') {
        fundo.style.backgroundImage = 'url("imagens/Chuva.jpg")';
    } else if (dados.weather[0].description == 'trovoada com chuva fraca') {
        fundo.style.backgroundImage = 'url("imagens/Trovoada.jpg")';
    } else {
        console.log("Clima não especificado!")
    }

    document.getElementById("desc").innerHTML =
        ' Humidade: ' + dados.main.humidity + "%";
    document.getElementById("vento").innerHTML =
        ' Vel vento: ' +
        Math.floor(dados.wind.speed) +
        " km/h";
    document.getElementById("sensation").innerHTML =
        'Sensação: ' +
        Math.floor(dados.main.feels_like) +
        "°";
}

