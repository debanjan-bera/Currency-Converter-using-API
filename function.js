import{currencyCountryCodes,currencySymb} from "./countrylist.js"
export const amountData = document.querySelector("input");
amountData.value = 1;
const resultOfConversion = document.querySelector(".res");
const repsOfcurrency = document.querySelector(".Currency-rep")
let inputValue = 1;
export let selected1stValue = 'USD'
export let selected2ndValue ='INR'

export const insertOptionData = (select1, select2, data) => {
  const dataCn = Object.keys(currencyCountryCodes);
  for (const ele of dataCn) {
    const cnName = data[ele].countryName;
    const markup = `<option value="${ele}">${ele} - ${cnName}</option>`;
    select1.insertAdjacentHTML("beforeend", markup);
    select2.insertAdjacentHTML("beforeend", markup);
  }
};
export const selectFlag = (dropDownList, data, select, natIcon, isSelect) => {
  dropDownList.addEventListener("change", () => {
    select = dropDownList.value;
    console.log(select);
    const cnIcon = data[select].icon;
    natIcon.innerHTML = `<img src="${cnIcon}" class="img">`;
    if (isSelect) selected1stValue = select;
    else selected2ndValue = select;
  });
};
export const CurrConvert = async (from, to) => {
  const amount = amountData.value;
  const fetchCurrencyData = await fetch(`https://api.fxratesapi.com/convert?from=${from}&to=${to}&amount=1&format=json`);
  const dataOfCurrency = await fetchCurrencyData.json();
  console.log(from, to, amount,dataOfCurrency.result);
  const convertedAmount = (amount*dataOfCurrency.result).toFixed(2);
  const fromCurrencySymbol = currencySymb[from];
  const toCurrencySymbol = currencySymb[to];
  resultOfConversion.innerHTML = `<h1><span>${fromCurrencySymbol}</span>${amount} ${from} <span>=</span> <span>${toCurrencySymbol}</span> ${convertedAmount} ${to}</h1>`
  repsOfcurrency.innerHTML =`<h4><span>${fromCurrencySymbol}</span>${amount} ${from} <span>=</span> <span>${toCurrencySymbol}</span> ${dataOfCurrency.result.toFixed(2)} ${to}</h4>`
};
