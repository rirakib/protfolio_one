// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.top').css({
//                 "background-color":"crimson",
//                 "padding":"30px 0px"
//             });
//             $('.navbar .menu a').css({
//                 "color":black
//             })
             
//         }
//         else{
//             $('.top').css({
//                 "background-color":"transparent",
//                 "padding":"15px 0px"
//             });
//         }   
//     })

   
// });
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.top').addClass('sticky');
        }
        else{
            $('.top').removeClass('sticky');
        }
        
    })

    // typing java

    var typed = new Typed(".typing",{
        strings: ["Desinger","Developer","Freelancer","Awesome"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing2",{
        strings: ["Desinger","Developer","Freelancer","Awesome"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
})