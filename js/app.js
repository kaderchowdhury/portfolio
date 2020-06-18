$(document).ready(function(){
    $.get( "works/work1.html", function( data ) {
        console.log(data);
        // $( ".result" ).html( data );
    document.getElementById('work-details-container').innerHTML = data;
    });
});
