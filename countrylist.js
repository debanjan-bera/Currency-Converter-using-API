const currencyCountryCodes = {
  ADA: "ADA",
  AED: "AE",
  AFN: "AF",
  ALL: "AL",
  AMD: "AM",
  ANG: "AW",
  AOA: "AO",
  ARB: "ARB",
  ARS: "AR",
  AUD: "AU",
  AWG: "AW",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BNB: "BN",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  BTC: "BTC",
  BTN: "BT",
  BWP: "BW",
  BYN: "BY",
  BZD: "BZ",
  CAD: "CA",
  CHF: "CH",
  CLF: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUC: "CU",
  CVE: "CV",
  CZK: "CZ",
  DAI: "DAI",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DOT: "DOT",
  DZD: "DZ",
  EGP: "EG",
  ERN: "ER",
  ETB: "ET",
  ETH: "ETH",
  EUR: "EU",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  IMP: "IM",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JEP: "JE",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTC: "LTC",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  NGN: "NG",
  NIO: "NI",
  NOK: "NO",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  OP: "OP",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SHP: "SH",
  SLL: "SL",
  SOL: "SV",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  WST: "WS",
  XAF: "XAF",
  XAG: "XAG",
  XAU: "XAU",
  XCD: "XCD",
  XDR: "XDR",
  XPD: "XPD",
  XPT: "XPT",
  XRP: "XRP",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWL: "ZW",
};
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