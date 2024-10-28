const result = document.querySelector(".res");
const selectElement = document.getElementById("nation1");
import{countryList} from './countrylist.js'
const countryNames = [];


const currencyConvert = async () => {
  try {
    // Fetch supported currencies
    const countryData = await fetch(
      "https://api.currencyfreaks.com/v2.0/supported-currencies"
    );
    
    // Parse the JSON response
    const data = await countryData.json();
    console.log(data.supportedCurrenciesMap.USD);
    // Assuming countryList is defined elsewhere in your code
    // Example countryList for demonstration
    
    
    // Iterate through supported currencies
    for (const key in data.supportedCurrenciesMap) {
      // Check if the key exists in countryList
      if (countryList[key]) {
        // Log the currency and its corresponding value
        // console.log(countryList[key]);
        // console.log(data.supportedCurrenciesMap[key].countryName);
        countryNames.push(data.supportedCurrenciesMap[key].countryName);
      }
      selectElement.addEventListener("change", () => {
        const selectedValue = selectElement.value; // Get the selected value
        if(data.supportedCurrenciesMap[key].countryName === selectedValue){
          const apiImgCode = data.supportedCurrenciesMap[key].countryCode
          // console.log(apiImgCode);
          document.querySelector(".pic").innerHTML=`<img src="https://flagsapi.com/${apiImgCode}/flat/64.png" class="pic">`
        }
        if(selectElement.value === 'United States of America'){
          document.querySelector(".pic").innerHTML=`<img src="https://flagsapi.com/US/flat/64.png" class="pic">`
        }
    });
    }
    countryNames.sort();
    countryNames[4]= 'United States of America'
    countryNames.sort();

    for (const ele of countryNames) {
      // console.log(ele);
      const markup = `<option value="${ele}">${ele}</option>`;
      selectElement.insertAdjacentHTML('beforeend', markup);
      document.getElementById("nation2").insertAdjacentHTML('beforeend', markup);

    }
    
    
    // Log the sorted country names
    // console.log(countryNames);
  } catch (error) {
    console.error('Error fetching currency data:', error);
  }
};

// Call the function
currencyConvert();




// Add an event listener for the change event
