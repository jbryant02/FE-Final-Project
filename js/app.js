//Select Region
var region = ["South", "Northeast", "Great-Lakes", "Southwest", "Utah", "Midwest", "Rockies", "Northwest", "California", "Alaska", "Hawaii"];
var park = ["Acadia", "Crater-Lake", "Denali", "Grand-Canyon", "Shenandoah", "Haleakala", "Yosemite", "Zion", "Isle-Royale", "Glacier"];
var $regions;
var $backgroundImage;


$('.Map').children().on('click', function (event) {
    if ($(this).attr("id") !== "reset" && $(this).attr("id") !== "button-group") { //excludes reset button to prevent opacity changes.
        $regions = $(event.target).attr("class");
        for (var i = 0; i < region.length; i++) {
            if ($regions === region[i]) {
                let modalTitle = $("#" + region[i]).text(); //sets modal text to clicked info.
                let modalBody = $("#1" + region[i]).text();
                let modalSubTitle = $("#2" + region[i]).text();
                //delays modal to show fade
                setTimeout(function () {
                    $('#modal-title-popup').text(modalTitle); //sets modal info
                    $('#modal-body-popup').text(modalBody);
                    $('#modal-body-subtitle').text(modalSubTitle);
                    $('#info').modal(); //opens modal
                }, 1500);
            }
        }
        for (var i = 0; i < region.length; i++) { //loops through region to animate the unclicked regions
            if ($regions !== region[i]) {
                $("." + region[i]).animate({
                    opacity: 0.15
                }, 1500);
            }
        }
    }
});

$('.reset').on('click', function (event) {
    for (var i = 0; i < region.length; i++) { //loops through regions to restyle and reset
        $("." + region[i]).removeAttr('style');
    }
});

$('.hidemap').on('click', function (event) {
    for (var i = 0; i < region.length; i++) { //hides map
        $("." + region[i]).hide(1000);
    }
});


$('.backgroundimg').on('click', function (event) {
    $backgroundImage = $(event.target).attr("id");
    for (var i = 0; i < park.length; i++) { //loops through region to select new background image
        if ($backgroundImage === park[i]) {
            let srcimage = $(this).attr("src"); //gets img source to variable
            console.log(srcimage);
            $('.jumbotron').css('background-image', 'url(' + srcimage + ')');
        }
    }
});
