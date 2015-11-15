$(document).ready(function(){
$('.card-content').slick({
  dots: false,
infinite: false,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
focusOnSelect: false,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      focusOnSelect: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false
    }
  }

  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$(document).on("scroll", function(){
			if
				($(document).scrollTop() > 10 ){
					console.log("SCROLL DOWN");

	  $("nav").addClass("smaller");
			}
			else
			{
					console.log("SCROLL UP");
					$("nav").removeClass("smaller");
			}
		});

    $('#horizontalTab').easyResponsiveTabs({

    //Types: default, vertical, accordion
    type: 'default',

    //auto or any width like 600px
    width: 'auto',

    // 100% fit in a container
    fit: true,

    // Start closed if in accordion view
    closed: 'accordion',

    // Callback function if tab is switched
    activate: function(){}

    });


});
