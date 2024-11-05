import{currencyCountryCodes} from "./countrylist.js"
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

export const CurrConvert = async (from, to,repofAmmount) => {
  const amount = !repofAmmount?1:amountData.value;
  const fetchCurrencyData = await fetch(`https://api.fxratesapi.com/convert?from=${from}&to=${to}&amount=${amount}&format=json`);
  const dataOfCurrency = await fetchCurrencyData.json();
  const url = await fetch("https://api.fxratesapi.com/currencies");
  const data3 = await url.json();
  console.log(from, to, amount,dataOfCurrency.result);
  const convertedAmount = dataOfCurrency.result.toFixed(0);
  const fromCurrencySymbol = data3[from].symbol;
  const toCurrencySymbol = data3[to].symbol;
  console.log(fromCurrencySymbol);
  resultOfConversion.innerHTML = `<h1>${fromCurrencySymbol} ${amount} ${from} = ${toCurrencySymbol} ${convertedAmount} ${to}</h1>`;
 
};
