console.log("loaded ... like a baked potato");

 $(document).ready(function() {
    function checkPosition() {
      if ($(this).scrollTop() > 200) {
        $("#toTop").fadeIn(500);
        } else {
        $("#toTop").fadeOut(300);
        }
      }
        
        $(window).scroll(checkPosition);

        $("#toTop").click(function(event) {
          event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
        })

        checkPosition();
  });