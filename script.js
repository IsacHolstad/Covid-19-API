console.log(document.location);

const myAPI = 'https://covid.mathdro.id/api'
console.log(myAPI);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;

const container = document.querySelector(".covid-container");

async function results(){
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const covidData = responseJSON.results;
        console.log(covidData);
        for (let i = 0; i < covidData.length; i++) {
            console.log(covidData[i]);

            container.innerHTML += `<li>${covidData[i].confirmed.value}</li>`
        };
        
    }
    catch(error){
        console.log(error)
    }
}
results()
