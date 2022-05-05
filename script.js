console.log(document.location);

const myAPI = 'https://covid.mathdro.id/api'
console.log(myAPI);

const container = document.querySelector(".covid-container");

async function results(){
    try{
        const response = await fetch(myAPI);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON)
        
    }
    catch(e){
        console.log("errrrror")
    }
}
results()
