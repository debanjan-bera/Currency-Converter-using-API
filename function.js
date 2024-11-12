import{currencyCountryCodes,currencySymb} from "./countrylist.js"
const amountData = document.querySelector("input");
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
    const markup = `<option value="${ele}" class="${ele}"> ${ele} - ${cnName}</option>`;
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
  resultOfConversion.innerHTML = `<h1>${amount} ${from} <span>=</span>  ${convertedAmount} ${to}</h1>`
  repsOfcurrency.innerHTML =`<h4><span>${fromCurrencySymbol}</span> 1 ${from} <span>=</span> <span>${toCurrencySymbol}</span> ${dataOfCurrency.result.toFixed(2)} ${to}</h4>`
};

export const swapingcurrency=(btn,pic1,pic2,s1,s2)=>{
  btn.addEventListener("click",()=>{
    console.log(selected1stValue,selected2ndValue);
    const tempCurr = selected1stValue;
    selected1stValue = selected2ndValue
    selected2ndValue = tempCurr;
    console.log(selected1stValue,selected2ndValue);
    pic2.innerHTML = `<img src="https://currencyfreaks.com/photos/flags/${selected2ndValue.toLowerCase()}.png" class="img">`
    pic1.innerHTML = `<img src="https://currencyfreaks.com/photos/flags/${selected1stValue.toLowerCase()}.png" class="img">`
    s1.value = selected1stValue;
    s2.value = selected2ndValue;
  })
}


export const displayErrorMessage = (message)=>{
  console.log(message);
}