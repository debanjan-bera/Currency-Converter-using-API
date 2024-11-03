const selectFirstList = document.getElementById("nation1"),
selectSecondList = document.getElementById("nation2"),
firstCountryIcon = document.querySelector(".pic1"),
secondCountryIcon = document.querySelector(".pic2"),
conversionBtn = document.querySelector(".btn");


let selected1stValue = 'USD'
let selected2ndValue ='INR'
const countryCode = async () => {
try{
    const fetchCnData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
    const data = await fetchCnData.json();
    populateDropdowns(data.supportedCurrenciesMap)
}
catch(error){
    console.error("Error fetching currency data:", error);
    // displayErrorMessage("Failed to load currency data. Please try again later.");
}
}
countryCode()

// CurrConvert(selected1stValue,selected2ndValue)
const populateDropdowns = (data) => {
    insertOptionData(selectFirstList,selectSecondList,data)
    selectFlag(selectFirstList,data,selected1stValue,firstCountryIcon)
    selectFlag(selectSecondList,data,selected2ndValue,secondCountryIcon)
    selecteCountryDetails(selectFirstList,true)
    selecteCountryDetails(selectSecondList, false)
}

conversionBtn.addEventListener('click',(ele)=>{
    console.log(selected1stValue,selected2ndValue);
    CurrConvert(selected1stValue,selected2ndValue)
    console.log(selected1stValue,selected2ndValue);
});