//Select Region
var region = ["South", "Northeast", "Great-Lakes", "Southwest", "Utah", "Midwest", "Rockies", "Northwest", "California", "Alaska", "Hawaii"];
var $regions;


$('.Map').children().on('click', function (event) {
    if ($(this).attr("id") !== "reset") { //excludes reset button and overall map from click to prevent opacity changes.
        console.log(event.target);
        $regions = $(event.target).attr("class");
        console.log($regions);
        for (var i = 0; i < region.length; i++) { //loops through region to animate
            if ($regions !== region[i]) {
                $("." + region[i]).animate({
                    opacity: 0.15
                }, 1500)
            }
        }
    }
});

$('.reset').on('click', function (event) {
    for (var i = 0; i < region.length; i++) { //loops through regions to restyle
        $("." + region[i]).removeAttr('style');
    }
});




// for(var i=0; i< buttons.length; i++){
//    buttons[i].hidden = true;
//}

//$(class).on('click', function (event) {

//  console.log(event.target);
//    $(this).hide(1000);
//    });

//$('.State').click(function() {
//    var myClass = $(this).attr("class");
//   alert(myClass);
//});
//if( $(event.target).hasClass(".State") ){
//    $.each(region, function (index, value))
//           }
//    console.log(event.target);

/* $('.Map').children().on('click', function (event) {
    if ($(event.target).attr("id") !== "reset"){
    var checkState = function stateCheckFunction() {
        for (var loop = 0; loop < region.length; loop++) {
        if (this === region[loop]){
        console.log(checkState);
        return region[loop];
            }
        }
    }
    }}); */
