$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').css({
                "background-color":"crimson",
                "padding":"30px 0px"
            });
            $('.navbar .menu a').css({
                "color":black
            })
             
        }
        else{
            $('.navbar').css({
                "background-color":"transparent",
                "padding":"15px 0px"
            });
        }   
    })

   
});







