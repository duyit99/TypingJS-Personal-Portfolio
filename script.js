$(document).ready(function(){
    $(window).scroll(function(){
        // console.log($( window ).width());
        // console.log("Y" +this.scrollY)
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // console.log(this.scrollY);
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        /// Progress Bars Loading When scroll
        if($( window ).width() > 947 ){
            if(this.scrollY > 1500){
             $('.skills .skills-content .right .line').addClass("show");
            }
        }
       if($( window ).width() > 700 ){
           if(this.scrollY > 1900){
            $('.skills .skills-content .right .line').addClass("show");
           }
          
       }
       if($( window ).width() < 700 ){
        if(this.scrollY > 2500){
         $('.skills .skills-content .right .line').addClass("show");
        }
       
    }
       
      
       
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        // strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        strings: ["Rapper", "Singer", "Comedian"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        // strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        strings: ["Rapper", "Singer", "Comedian"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
