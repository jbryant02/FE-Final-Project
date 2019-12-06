//Select Region
var region = [".South", ".Northeast", ".Great-Lakes", ".Southwest", ".Utah", ".Midwest", ".Rockies", ".Northwest", ".California", ".Alaska", ".Hawaii"]


$('.Map').children().on('click', function (event) {
    console.log(event.target);
    
    var $regions = $(event.target).attr("class");
    console.log($regions);
    $regions.hide(100);
    
});

        /* for(var i=0; i< buttons.length; i++){
            buttons[i].hidden = true;
        }

        $(class).on('click', function (event) {
            
            console.log(event.target);
            $(this).hide(1000);
        });

        //$('.State').click(function() {
        //    var myClass = $(this).attr("class");
        //   alert(myClass);
        //});
        //if( $(event.target).hasClass(".State") ){
        //    $.each(region, function (index, value))
        //    
        //           }
        //    console.log(event.target);
        //    $(this).hide(1000); */
