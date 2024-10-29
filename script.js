// import { currencyCountryCodes,selecteFirstEle,insertOptionData} from "./countrylist.js";
// const countryNames = [];
// const resultOfConversion = document.querySelector(".res")
// const selectFirstCountryName = document.getElementById("nation1");
// const selectSecondCountryName = document.getElementById("nation2");
// const firstNatImg = document.querySelector(".pic1");
// const secondNatImg = document.querySelector(".pic2");
// let fromSelectNat =0;
// let toSelectNat;

// function convert(from, to, amount) {
//   fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data.rates[to]);
//       console.log(from);
//       const convertedAmount = (amount * data.rates[to]).toFixed(2);
//       resultOfConversion.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`
//     });
// }

// convert("USD", "INR", 10);

// const countryCode = async () => {
//   try {
//     const countryData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
//     const data = await countryData.json();
//     console.log(data.supportedCurrenciesMap);

//     // Push country names into countryNames array
//     for (const key in data.supportedCurrenciesMap) {
//       for (const key2 in currencyCountryCodes)
//         if (key2 === key) {
//           if (data.supportedCurrenciesMap[key].countryName === "Global") continue;
//           else countryNames.push(data.supportedCurrenciesMap[key].countryName);
//         }
//     }
//     // for (const key in data.supportedCurrenciesMap) {
//     //   selecteFirstEle(key,data.supportedCurrenciesMap,selectFirstCountryName,firstNatImg);
//     //   selecteFirstEle(key,data.supportedCurrenciesMap,selectSecondCountryName,secondNatImg);
//     // }
//     selecteFirstEle(data.supportedCurrenciesMap,selectFirstCountryName,firstNatImg);
//     selecteFirstEle(data.supportedCurrenciesMap,selectSecondCountryName,secondNatImg);


//     fromSelectNat = def(data.supportedCurrenciesMap)
//     function def(data){
//       selectFirstCountryName.addEventListener("change", () => {
//         const selectedValue = selectFirstCountryName.value;
//         for (const key in data) {
//           if (data[key].countryName === selectedValue) {
//             const selectOptNat = data[key].currencyCode;
//             return selectOptNat;
//           }
//         }
//       });
//     }
    
//     console.log(fromSelectNat);
//     // console.log(countryNames);
//     countryNames.sort();
//     insertOptionData(countryNames,selectFirstCountryName,selectSecondCountryName);

//   } catch (error) {
//     console.error("Error fetching currency data:", error);
//   }
// };
// countryCode();

// console.log(fromSelectNat);
// import {currencyCountryCodes,selecteFirstEle, insertOptionData } from "./countrylist.js";

// const countryNames = [];
// const resultOfConversion = document.querySelector(".res");
// const selectFirstCountryName = document.getElementById("nation1");
// const selectSecondCountryName = document.getElementById("nation2");
// const firstNatImg = document.querySelector(".pic1");
// const secondNatImg = document.querySelector(".pic2");
// let fromSelectNat = 0;
// let toSelectNat = 0;

// function convert(from, to, amount) {
//   fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       const convertedAmount = (amount * data.rates[to]).toFixed(2);
//       resultOfConversion.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`;
//     });
// }

// const countryCode = async () => {
//   try {
//     const countryData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
//     const data = await countryData.json();

//     // Push country names into countryNames array
//     for (const key in data.supportedCurrenciesMap) {
//       if (data.supportedCurrenciesMap[key].countryName !== "Global" && currencyCountryCodes[key]) countryNames.push(data.supportedCurrenciesMap[key].countryName);
//     }

//     // Populate dropdowns
//     selecteFirstEle(data.supportedCurrenciesMap, selectFirstCountryName, firstNatImg);
//     selecteFirstEle(data.supportedCurrenciesMap, selectSecondCountryName, secondNatImg);

//     selectConv(selectFirstCountryName,data.supportedCurrenciesMap,fromSelectNat)
//     selectConv(selectSecondCountryName,data.supportedCurrenciesMap,toSelectNat)

//     // selectSecondCountryName.addEventListener("change", () => {
//     //   const selectedValue = selectSecondCountryName.value;
//     //   toSelectNat = Object.values(data.supportedCurrenciesMap).find(country => country.countryName === selectedValue)?.currencyCode;
//     //   console.log("To currency code:", toSelectNat);
//     //   triggerConversion();
//     // });


//     countryNames.sort();
//     // const uniqueArray = [...new Set(countryNames)];
//     // console.log(uniqueArray);
//     insertOptionData(countryNames, selectFirstCountryName, selectSecondCountryName);

//   } catch (error) {
//     console.error("Error fetching currency data:", error);
//   }
// };

// countryCode();

// function selectConv(ele,data,res){
//   ele.addEventListener("change", () => {
//     const selectedValue = ele.value;
  
//       res = Object.values(data).find(country => country.countryName === selectedValue)?.currencyCode;
   
//     console.log("From currency code:", res);
//     triggerConversion();
//   });
// }
// function triggerConversion() {
//   const amount = 1;
//   // console.log(fromSelectNat,toSelectNat);
//   if (fromSelectNat && toSelectNat) {
//     convert(fromSelectNat, toSelectNat, amount);
//   }
// }

import { currencyCountryCodes, selecteFirstEle, insertOptionData,selectConv,triggerConversion,convert} from "./countrylist.js";

const countryNames = [];

const selectFirstCountryName = document.getElementById("nation1");
const selectSecondCountryName = document.getElementById("nation2");
const firstNatImg = document.querySelector(".pic1");
const secondNatImg = document.querySelector(".pic2");




const countryCode = async () => {
  try {
    const countryData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
    const data = await countryData.json();

    // Push country names into countryNames array
    for (const key in data.supportedCurrenciesMap) {
      if (data.supportedCurrenciesMap[key].countryName !== "Global" && currencyCountryCodes[key]) {
        countryNames.push(data.supportedCurrenciesMap[key].countryName);
      }
    }

    // Populate dropdowns
    selecteFirstEle(data.supportedCurrenciesMap, selectFirstCountryName, firstNatImg);
    selecteFirstEle(data.supportedCurrenciesMap, selectSecondCountryName, secondNatImg);

    // Set up event listeners for both dropdowns
    selectConv(selectFirstCountryName, data.supportedCurrenciesMap, true);
    selectConv(selectSecondCountryName, data.supportedCurrenciesMap, false);

    countryNames.sort();
    insertOptionData(countryNames, selectFirstCountryName, selectSecondCountryName);

  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
};

countryCode();

// Modified selectConv function to update global variables


