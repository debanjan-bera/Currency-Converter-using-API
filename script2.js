import{insertOptionData,selectFlag,CurrConvert,selected1stValue,selected2ndValue, amountData} from "./function.js"
const selectFirstList = document.getElementById("nation1"),
selectSecondList = document.getElementById("nation2"),
firstCountryIcon = document.querySelector(".pic1"),
secondCountryIcon = document.querySelector(".pic2"),
conversionBtn = document.querySelector(".btn");
const countryCode = async () => {
try{
    const fetchCnData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
    const data = await fetchCnData.json();
    populateDropdowns(data.supportedCurrenciesMap)
    // amountData.addEventListener('change',()=>{
    //     CurrConvert(selected1stValue,selected2ndValue,amountData.value)
    // })
    CurrConvert(selected1stValue,selected2ndValue,false)
    conversionBtn.addEventListener('click',()=>{
        CurrConvert(selected1stValue,selected2ndValue,true)
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
amountData.value = 1;
CurrConvert(selected1stValue,selected2ndValue,false)
countryCode()

