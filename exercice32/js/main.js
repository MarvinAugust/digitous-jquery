let france = "https://restcountries.com/v3.1/name/france" ;

$.ajax({
    url: 'https://restcountries.com/v3.1/name/france',
    success: function (france, status, response) {
        console.log("pays: " + france[0].name.common + "\n" + "capitale: " + france[0].capital)
    }
});
