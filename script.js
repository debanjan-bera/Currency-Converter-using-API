
import {currencyCountryCodes, insertOptionData,selecteCountryDetails,triggerConversion,convert} from "./countrylist.js";

const countryNames = [];

const selectFirstCountryName = document.getElementById("nation1");
const selectSecondCountryName = document.getElementById("nation2");
const firstNatImg = document.querySelector(".pic1");
const secondNatImg = document.querySelector(".pic2");


const countryCode = async () => {
  try {
    const countryData = await fetch("https://api.currencyfreaks.com/v2.0/supported-currencies");
    const data = await countryData.json();
    let keyMap;
    // Push country names into countryNames array
    for (const key in data.supportedCurrenciesMap) {
      if (data.supportedCurrenciesMap[key].countryName !== "Global" && currencyCountryCodes[key])
        countryNames.push(data.supportedCurrenciesMap[key].countryName);
    }

    populateDropdowns(countryNames,data.supportedCurrenciesMap)
    // countryNames.sort();
    // insertOptionData(countryNames, selectFirstCountryName, selectSecondCountryName);
    // // Set up event listeners for both dropdowns
    // selecteCountryDetails(selectFirstCountryName,data.supportedCurrenciesMap,firstNatImg, true)
    // selecteCountryDetails(selectSecondCountryName,data.supportedCurrenciesMap,secondNatImg, false)
 
  } catch (error) {
    console.error("Error fetching currency data:", error);
    // displayErrorMessage("Failed to load currency data. Please try again later.");
  }
};

countryCode();

const populateDropdowns = (list,data) => {
  list.sort();
  insertOptionData(list, data,selectFirstCountryName, selectSecondCountryName);
  // Set up event listeners for both dropdowns
  selecteCountryDetails(selectFirstCountryName,data,firstNatImg, true)
  selecteCountryDetails(selectSecondCountryName,data,secondNatImg, false)
  convert('USD','INR',1)
};

// // const displayErrorMessage = (message) => {
//   const errorContainer = document.getElementById("errorContainer");
//   errorContainer.textContent = message;
//   errorContainer.style.display = "block"; // Show the error message
// // };
