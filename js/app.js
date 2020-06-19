$(document).ready(function(){
    $.get( "works/work1.html", function( data ) {
        // console.log(data);
        // $( ".result" ).html( data );
    document.getElementById('work-details-container').innerHTML = data;
    });
});

function work_details(work_id){
    var work_title = ['Deliveroo','TapTapTalk','Screenshot','Selliscope','Madviser','OpenSRP','Voltz','Droplink','Coilve']
    var title = document.getElementById('work-title');
    title.innerHTML = work_title[work_id];
    $.get( "works/work"+(work_id+1)+".html", function( data ) {
        // console.log(data);
        // $( ".result" ).html( data );
    document.getElementById('work-details-container').innerHTML = data;
    });
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 100
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
