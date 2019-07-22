'use strict';

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) {
        countryName = 'Poland';
    }

    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
      
}

    
function showCountriesList(resp) {
    var response = resp[0];

    countriesList.innerHTML = '';
    resp.forEach(function(item){
        var check = loadAll(response);
        var liEl = document.createElement('li');
        liEl.innerHTML = item.check;
        countriesList.appendChild(liEl);
        
        console.log(check);
    });
   
}


function loadAll (response) {
    var template = document.getElementById('template').innerHTML;
    Mustache.parse(template);
    var rendered = Mustache.render(template, {image: response.flag,
        name: response.name,
        capital: response.capital,
        region: response.region,
        population: response.population,
        currencies: response.currencies[0].name,
        languages: response.languages[0].name + " - " + response.languages[0].nativeName,
        zone: response.timezones[0]
    });
    return rendered;
}