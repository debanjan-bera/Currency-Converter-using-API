export const currencyCountryCodes ={
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
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    CHF: "CH",
    CLF: "CL",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUC: "CU",
    CUP: "CU",
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
    XPF: "XPF",
    XPT: "XPT",
    XRP: "XRP",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZMW: "ZM",
    ZWL: "ZW"
}

export function selecteFirstEle(key,data,selectCountryName,imgNat){
  selectCountryName.addEventListener("change", () => {
    const selectedValue = selectCountryName.value; // Get the selected value
    // console.log(selectedValue)
    if (data[key].countryName === selectedValue) {
      const apiImgCode = data[key].countryCode;
      // console.log(data.supportedCurrenciesMap[key].currencyCode);
      let fromCountryCode = data[key].currencyCode;
      console.log(fromCountryCode);
      imgNat.innerHTML = `<img src="https://flagsapi.com/${apiImgCode}/flat/64.png" class="pic">`;
    }
  });
}
export const insertOptionData = (countryNames,select1,select2)=>{
  for (const ele of countryNames) {
    const markup = `<option value="${ele}">${ele}</option>`;
    select1.insertAdjacentHTML("beforeend", markup);
    select2.insertAdjacentHTML("beforeend", markup);
  }
}
// convert("USD", "INR", 10);
// const currencyConvert = async () => {
//   const apiFetch = await fetch(
//     "https://api.frankfurter.app/latest"
//   );
//   const data = await apiFetch.json();
//   console.log(data.rates);
//   console.log(data.rates.INR);
//   console.log(Object.keys(data.rates)[13]);
//   }

// currencyConvert();
// const abc = async ()=>{
  
// }
// abc()

// https://api.fxratesapi.com/latest?
// const currencyConvert = async () => {
//   const apiFetch = await fetch(
//     "https://api.fxratesapi.com/historical?base=inr"
//   );
//   const data = await apiFetch.json();
//   console.log(data.rates);
//   }

// currencyConvert();
// const currencyConvert = async () => {
//   const countryData = await fetch(
//     "https://api.currencyfreaks.com/v2.0/supported-currencies"
//   );
//   const data = await countryData.json();
// //  console.log(Object.keys(data.supportedCurrenciesMap));
// for (const key in data.supportedCurrenciesMap) {
//   for (const key2 in countryList) {
//     if(key === key2){
//       console.log(data.supportedCurrenciesMap.key2);
//     }
//   }
// }

//   }