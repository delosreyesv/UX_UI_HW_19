console.log("Your index.js file is loaded correctly!");
  
  function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    
    
    $(".toggle").click(function(){
      $(this).find(".toggleContainer").toggleClass("active");
      $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
    });

    $(window).scrollTop(0);


    function fade() {
      $('.preloader').fadeOut("slow");
      }
      setTimeout(fade, 3000);