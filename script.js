const myAPI = "https://coronavirus.m.pipedream.net/"

console.log(myAPI);

const resultContainer = document.querySelector(".container");


async function cryptoNames() {
    try{
        const response = await fetch(myAPI);
        console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        const cryptoData = responseJSON.data;
        console.log(responseJSON);
        for (let i = 0; i < cryptoData.length; i++) {
           
            resultContainer.innerHTML += `<li>${cryptoData[i].summaryStats.global}</li>`;
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
     ? 'Covid-19': '(1) New Message';

     showingAlert = !showingAlert;
 }, 1000);


