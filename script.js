const myAPI = "https://covid-api.mmediagroup.fr/v1/cases"

console.log(myAPI)

const resultContainer = document.querySelector(".container");


async function cryptoNames() {
    try{
        const response = await fetch(myAPI);
        console.log(response)
        const responseJSON = await response.json(); // convert the response to json data
        const cryptoData = responseJSON.data;
        console.log( )
        for (let i = 0; i < cryptoData.length; i++) {
           
            resultContainer.innerHTML += `<li>${cryptoData[i].Albania.All}</li>`;
        }
    }
    catch(error) {
        resultContainer.innerHTML += `<li>there is an error happening</li>`;
       
    }
}
cryptoNames();


