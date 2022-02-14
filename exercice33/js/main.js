let france = "https://restcountries.com/v3.1/name/france" ;

$.ajax({
    url: france,
    success: function (france, status, response) {
        // $("#country").html(france[0].name.common)
        $("button").click(function(){
            $("#country").html(france[0].name.common);
            $("#capital").html(france[0].capital);
        });
    }
});


