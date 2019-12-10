//Select Region
var region = ["South", "Northeast", "Great-Lakes", "Southwest", "Utah", "Midwest", "Rockies", "Northwest", "California", "Alaska", "Hawaii"];
var park = ["Acadia", "Crater-Lake", "Denali", "Grand-Canyon", "Shenandoah", "Haleakala", "Yosemite", "Zion", "Isle-Royale", "Glacier"]
var $regions;
var $backgroundImage;


$('.Map').children().on('click', function (event) {
    if ($(this).attr("id") !== "reset" && $(this).attr("id") !== "button-group") { //excludes reset button to prevent opacity changes.
        console.log($(this).parent().attr("id"));
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

$('.hidemap').on('click', function (event) {
    for (var i = 0; i < region.length; i++) { //hides map
        $("." + region[i]).hide(1000);
    }
});


$('.backgroundimg').on('click', function (event) {
    console.log(this);
    $backgroundImage = $(event.target).attr("id");
    console.log($backgroundImage);
    for (var i = 0; i < park.length; i++) { //loops through region to select new background image
        if ($backgroundImage === park[i]) {
            let srcimage = $(this).attr("src"); //gets img source to variable
            console.log(srcimage);
            $('.jumbotron').css('background-image', 'url(' + srcimage + ')');
        }
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
