$(document).ready(function(){
    console.log("hello");
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('nav').addClass('sticky');

        }
        else{
            $('nav').removeClass('sticky');
              
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }
    });
    //  slide up script
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
    });
    // toggle menu/nav script
     $('.menu-btn').click(function(){
        $('.menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
   });

//    typing animaion script
var typed = new Typed(".typing",{
    strings: ["Ethical Hacker", "Developer","Coder","CyberSecurity Expert"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

});

