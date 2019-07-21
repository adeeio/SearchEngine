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

    console.log(response);
    console.log(response.capital + " " + response.languages[0].iso639_1);
    countriesList.innerHTML = '';
    resp.forEach(function(item){
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
}


