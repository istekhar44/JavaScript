const Base_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";
const dropdowns = document.querySelectorAll('.dropdown select');

for(let select of dropdowns){
    for(currencyCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        select.append(newOption);
    }

}