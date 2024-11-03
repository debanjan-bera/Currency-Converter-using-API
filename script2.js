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
    conversionBtn.addEventListener('click',()=>{
        CurrConvert(selected1stValue,selected2ndValue)
    });
}
catch(error){
    console.error("Error fetching currency data:", error);
    // displayErrorMessage("Failed to load currency data. Please try again later.");
}
}
const populateDropdowns = (data) => {
    insertOptionData(selectFirstList,selectSecondList,data)
    selectFlag(selectFirstList,data,selected1stValue,firstCountryIcon,true);
    selectFlag(selectSecondList,data,selected2ndValue,secondCountryIcon,false)
}

CurrConvert(selected1stValue,selected2ndValue)
countryCode()

const fetchCurr = async()=>{
    const url = await fetch()
}