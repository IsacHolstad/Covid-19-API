const myAPI = "https://covid19.mathdro.id/api"

//console.log(myAPI);

const resultContainer = document.querySelector(".container");


async function cryptoNames() {
    try{
        const response = await fetch(myAPI);
        //console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        const cryptoData = responseJSON.data;
        //console.log(responseJSON);
        for (let i = 0; i < responseJSON.length; i++) {
           
            resultContainer.innerHTML += `<li>${responseJSON[i].confirmed.value}</li>`;
        }
    }
    catch(error) {
        resultContainer.innerHTML += `<li>there is an error happening</li>`;
       
    }
}
cryptoNames();

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 

 let showingAlert = false;
 const interval = setInterval(() => {
     document.title = showingAlert
     ? 'Covid-19': 'Covid-18';

     showingAlert = !showingAlert;
     
 }, 1000);

 //TRYING SOMETHING FROM INSTAGRAM
 const year =  2022;
 const month = 5;
 const date = 9;
 const dateObj = new Date(year, month, date);
 //console.log(dateObj)
//ANSWER: thu.09.2022

//console.log(window.document.location)

//console.log(Math.PI)