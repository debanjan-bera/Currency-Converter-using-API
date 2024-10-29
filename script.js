import { currencyCountryCodes,selecteFirstEle,insertOptionData} from "./countrylist.js";
const countryNames = [];
const resultOfConversion = document.querySelector(".res")
const selectFirstCountryName = document.getElementById("nation1");
const selectSecondCountryName = document.getElementById("nation2");
const firstNatImg = document.querySelector(".pic1");
const secondNatImg = document.querySelector(".pic2");
let fromSelectNat = null;
let toSelectNat = null;

function convert(from, to, amount) {
  fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.rates[to]);
      console.log(from);
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      resultOfConversion.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`
    });
}

convert("USD", "INR", 10);

const countryCode = async () => {
  try {
    const countryData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
    const data = await countryData.json();
    console.log(data.supportedCurrenciesMap);

    // Push country names into countryNames array
    for (const key in data.supportedCurrenciesMap) {
      for (const key2 in currencyCountryCodes)
        if (key2 === key) {
          if (data.supportedCurrenciesMap[key].countryName === "Global") continue;
          else countryNames.push(data.supportedCurrenciesMap[key].countryName);
        }
    }
    for (const key in data.supportedCurrenciesMap) {
      selecteFirstEle(key,data.supportedCurrenciesMap,selectFirstCountryName,firstNatImg);
      selecteFirstEle(key,data.supportedCurrenciesMap,selectSecondCountryName,secondNatImg);
    }
    // console.log(countryNames);
    countryNames.sort();
    insertOptionData(countryNames,selectFirstCountryName,selectSecondCountryName);

  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
};
countryCode();


selectFirstCountryName.addEventListener("change", () => {
  const selectedValue = selectFirstCountryName.value;
  console.log(selectedValue);
})