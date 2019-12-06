//Select Region
var region = ["South", "Northeast", "Great-Lakes", "Southwest", "Utah", "Midwest", "Rockies", "Northwest", "California", "Alaska", "Hawaii"];
var $regions;

$('.Map').children().on('click', function (event) {
    console.log(event.target);
    $regions = $(event.target).attr("class");
    console.log($regions);
    for (var i = 0; i < region.length; i++) {
        if ($regions !== region[i]) {
            $("." + region[i]).animate({
                opacity: 0.35
            }, 1500)
        }
    }
});

$('.reset').on('click', function (event) {
 for(var i = 0; i < region.length; i++){
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
