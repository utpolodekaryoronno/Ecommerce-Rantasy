$('document').ready(function(){
    //header area

    $(window).scroll(function(){
		if($(this).scrollTop()>200){
			$('.nav-area-style').addClass('active');
		}
		else{
			$('.nav-area-style').removeClass('active');
		}
	});

    // owl carousel
    $('.bannar-area').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:true,
        autoplaySpeed:2000,
        smartSpeed:2000,
    })

    // porduct-area
    // mixitup
    var mixer = mixitup('.product-list');

    // porduct-area
    $('.product-list ').owlCarousel({
        loop:true,
        nav:true,
        margin:30,
        autoplay:true,
        autoplaySpeed:2000,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:false
        },
        575:{
            items:2,
            nav:false
        },
        767:{
            items:3,
        },
        1000:{
            items:4,
            loop:false
        }
        }
    })




    $('.sale-product').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        margin:30,
        autoplay:true,
        autoplaySpeed:2000,
    })


    $('.right-slide').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        margin:30,
        autoplay:true,
        autoplaySpeed:2000,
    })

});



// Scroll-bar

window.addEventListener('load',(event) =>{
    var Scrollbar = window.Scrollbar;
    Scrollbar.init(document.querySelector('#min-content'), {
      damping:0.03,
      thumbMinSize:0.03,
    });
});
  