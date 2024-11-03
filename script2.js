const selectFirstList = document.getElementById("nation1");
const selectSecondList = document.getElementById("nation2");
const firstCountryIcon = document.querySelector(".pic1");
const secondCountryIcon = document.querySelector(".pic2");
const amountData = document.querySelector("input");
const conversionBtn = document.querySelector(".btn")
const resultOfConversion = document.querySelector(".res");

amountData.value = 1;
let selected1stValue = 'USD'
let selected2ndValue ='INR'
const countryCode = async () => {
try{
    const fetchCnData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");

    const data = await fetchCnData.json();
    console.log(data.supportedCurrenciesMap.INR);
    let count = Object.keys(currencyCountryCodes).length;
    console.log(count);
    const thirdData = await fetch("https://api.fxratesapi.com/currencies");
    const data3 = await thirdData.json()
    count = Object.keys(data3).length;
    console.log(count);

    insertOptionData(selectFirstList,selectSecondList,data.supportedCurrenciesMap)
    selectFlag(selectFirstList,data.supportedCurrenciesMap,selected1stValue,firstCountryIcon)
    selectFlag(selectSecondList,data.supportedCurrenciesMap,selected2ndValue,secondCountryIcon)
}
catch(error){
    console.error("Error fetching currency data:", error);
    // displayErrorMessage("Failed to load currency data. Please try again later.");
}
}
countryCode()

const insertOptionData = (select1,select2,data) => {
    const dataCn = Object.keys(currencyCountryCodes);
    for (const ele of dataCn) {
        const cnName = data[ele].countryName;
        const markup = `<option value="${ele}">${ele} - ${cnName}</option>`;
        select1.insertAdjacentHTML("beforeend", markup);
        select2.insertAdjacentHTML("beforeend", markup);
    }
};

const selectFlag = (dropDownList,data,select,natIcon) =>{
    dropDownList.addEventListener("change",()=>{
        select = dropDownList.value;
        const cnIcon = data[select].icon
        natIcon.innerHTML =`<img src="${cnIcon}" class="img">`  
    })
}

const CurrConvert = async() =>{
    const secondFData = await fetch(`https://api.fxratesapi.com/convert?from=${selected1stValue}&to=${selected2ndValue}&amount=${amountData.value}&format=json`)
    const data2 = await secondFData.json()
    console.log(selected1stValue,selected2ndValue,amountData.value);
    console.log(data2.result);
    const convertedAmount = (data2.result).toFixed(0);
    resultOfConversion.innerHTML = `<h1>${amountData.value} ${selected1stValue} = ${convertedAmount} ${selected2ndValue}</h1>`
}
CurrConvert()
conversionBtn.addEventListener('click',(ele)=>{
    CurrConvert()
});