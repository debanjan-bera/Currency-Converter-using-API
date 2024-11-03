const amountData = document.querySelector("input");
amountData.value = 1;
const resultOfConversion = document.querySelector(".res");

const insertOptionData = (select1,select2,data) => {
  const dataCn = Object.keys(currencyCountryCodes);
  for (const ele of dataCn) {
      const cnName = data[ele].countryName;
      const markup = `<option value="${ele}">${ele} - ${cnName}</option>`;
      select1.insertAdjacentHTML("beforeend", markup);
      select2.insertAdjacentHTML("beforeend", markup);
  }
};
const selectFlag = (dropDownList,data,select,natIcon,isSelect) =>{
  dropDownList.addEventListener("change",()=>{
      select = dropDownList.value;
      console.log(select);
      const cnIcon = data[select].icon
      natIcon.innerHTML =`<img src="${cnIcon}" class="img">`
      if (isSelect) selected1stValue = select;
      else selected2ndValue = select;
  })
}
const CurrConvert = async(from,to) =>{
  const fetchCurrencyData = await fetch(`https://api.fxratesapi.com/convert?from=${from}&to=${to}&amount=${amountData.value}&format=json`)
  const dataOfCurrency = await fetchCurrencyData.json()
  console.log(from,to,amountData.value);
  console.log(dataOfCurrency.result);
  const convertedAmount = (dataOfCurrency.result).toFixed(0);
  resultOfConversion.innerHTML = `<h1>${amountData.value} ${from} = ${convertedAmount} ${to}</h1>`
}
// // // const displayErrorMessage = (message) => {
// //   const errorContainer = document.getElementById("errorContainer");
// //   errorContainer.textContent = message;
// //   errorContainer.style.display = "block"; // Show the error message
// // // };





// function selecteCountryDetails(list,isSelect){
//   list.addEventListener('change',()=>{
//       const selectedValue = list.value;
//       if (isSelect) selected1stValue = selectedValue;
//       else selected2ndValue = selectedValue;
//   })
// }
// let fromSelectNat = 'USD';
// let toSelectedCountry = 'INR';
// const conversionBtn = document.querySelector(".btn")
// const inputBox = document.querySelector("input")
// inputBox.value = 1
// console.log(inputBox.value);
// const resultOfConversion = document.querySelector(".res");

// export const insertOptionData = (countryNames, data,select1, select2) => {
//   for (const ele of countryNames) {
//     const countryCurrencyCode =  Object.values(data).find(country => country.countryName === ele);
//     const markup = `<option value="${ele}">${ele} - ${countryCurrencyCode.currencyCode}</option>`;
//     select1.insertAdjacentHTML("beforeend", markup);
//     select2.insertAdjacentHTML("beforeend", markup);
//   }};


// export function selecteCountryDetails(ele,data,imgNat,isFromSelect) {
//   ele.addEventListener("change", () => {
//     const selectedValue = ele.value;
//     console.log(selectedValue);
//     const countryData = Object.values(data).find(country => country.countryName === selectedValue);
//     if(selectedValue === 'United States of America')
//        imgNat.innerHTML = `<img src="https://flagsapi.com/US/flat/64.png" class="pic">`;
//     else{
//       const imgCountryCode = countryData.countryCode;
//        imgNat.innerHTML = `<img src="https://flagsapi.com/${imgCountryCode}/flat/64.png" class="pic">`;
//     }
//      if (selectedValue === "United States of America" || selectedValue === "China") {
//        if (isFromSelect) fromSelectNat = selectedValue === "China" ? "CNY" : "USD";
//       else toSelectedCountry = selectedValue === "China" ? "CNY" : "USD";
//      } else {
//       const currencyCode = countryData.currencyCode;
//       console.log(currencyCode);
//        if (isFromSelect) fromSelectNat = currencyCode;
//        else toSelectedCountry = currencyCode;
//     }
//     triggerConversion();
//   })
// }

// console.log(fromSelectNat,toSelectedCountry);
// export function triggerConversion() {
//   const amount = inputBox.value === ''? 1:inputBox.value
//   if (fromSelectNat && toSelectedCountry) {
//     convert(fromSelectNat, toSelectedCountry);
//   }
// };

// export function convert(from, to) {
//   console.log(from,to);
//   const amount = inputBox.value === ''? 1:inputBox.value
//   fetch(`https://api.fxratesapi.com/convert?from=${from}&to=${to}&amount=${amount}&format=json`)
//     .then((resp) => resp.json())
//     .then((data) => {

//       const convertedAmount = from === to?(data.result).toFixed(0):(data.result).toFixed(2)
//       // const convertedAmount = (data.result).toFixed(0);
//       conversionBtn.addEventListener('click',(ele)=>{
//         console.log(ele);
//       })
//       if(from === 'USD' && to==='INR'){
//         resultOfConversion.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`
//       }
//       else{
//         conversionBtn.addEventListener('click',(ele)=>{
//         resultOfConversion.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`
//       })
//       // resultOfConversion.innerHTML = `<h1>${amount} ${from} = ${convertedAmount} ${to}</h1>`
//     }
//     });
// }