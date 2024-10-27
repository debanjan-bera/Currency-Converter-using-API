const result = document.querySelector(".res");

const apiURL = "https://api.currencyfreaks.com/v2.0/supported-currencies";
// https://api.frankfurter.app/latest?



// const fetchData = async() =>{
//     let promise = await fetch(apiURL);
    
//     console.log(promise);
//     let data = await promise.json();
//     console.log(data.supportedCurrenciesMap.INR
//     );
// }
// fetchData()
// // request('https://api.currencyapi.com/v3/latest?apikey=YOUR-APIKEY&base_currency=USD')
// // .then(response => {
// // console.log(response)
// // })
// // .catch(error => {
// // console.log(error)
// // })
// fetch('https://api.currencyfreaks.com/v2.0/supported-currencies').then((res)=>{
//     console.log(res.json());
// })
function convert(from, to, amount) {
    fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
      .then((resp) => resp.json())
      .then((data) => {
        const convertedAmount = (amount * data.rates[to]).toFixed(2);
            result.innerHTML=(`<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`);
      });
    }
  
  convert("USD", "INR", 10);
