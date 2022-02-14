// let long = $("input").val().length ; 

$("button").click(function(){
    let long = $("input").val().length ; 

    if (long > 5 ){
    $("input").addClass("is-valid");
    $("input").removeClass("is-invalid")}

    else {
        $("input").addClass("is-invalid")}
});