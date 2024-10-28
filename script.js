const result = document.querySelector(".res");


function convert(from, to, amount) {
  fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => { console.log(data.rates[to])
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      result.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`
    });
  }

convert("USD", "INR", 10);
