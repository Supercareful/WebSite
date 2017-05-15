/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#0EB493");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.3);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

    // Get the modals
	var androidModal = document.getElementById('androidModal');
	var graphicsModal = document.getElementById('graphicsModal');
	var webModal = document.getElementById('webModal');
	var fullModal = document.getElementById('fullModal');

	// Get the triggers that opens the modals
	var androidTrigger = document.getElementById("androidTrigger");
	var graphicsTrigger = document.getElementById("graphicsTrigger");
	var webTrigger = document.getElementById("webTrigger");
	var fullTrigger = document.getElementById("fullTrigger");


	// When the user clicks the button, open the modal 
	androidTrigger.onclick = function() {
	    androidModal.style.display = "block";
	}

	graphicsTrigger.onclick = function() {
	    graphicsModal.style.display = "block";
	}

	webTrigger.onclick = function() {
	    webModal.style.display = "block";
	}

	fullTrigger.onclick = function() {
	    fullModal.style.display = "block";
	}


	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == androidModal) {
	        androidModal.style.display = "none";
	    } else if(event.target == graphicsModal){
	    	graphicsModal.style.display = "none";
	    } else if(event.target == webModal){
	    	webModal.style.display = "none";
	    } else if(event.target == fullModal){
	    	fullModal.style.display = "none";
	    }
	}
	
});

