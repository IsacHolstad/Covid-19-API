console.log(document.location);

const myAPI = 'https://covid.mathdro.id/api'
console.log(myAPI);
//const proxy = "https://noroffcors.herokuapp.com/";
//const corsFixUrl = proxy + myAPI;

const container = document.querySelector(".covid-container");

async function results(){
    try{
        const response = await fetch(myAPI);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const covidData = responseJSON.data;
        console.log(responseJSON);
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i]);

           // container.innerHTML += `<li>${responseJSON[i]}</li>`
        };
        
    }
    catch(e){
        console.log("errrrror")
    }
}
results()
