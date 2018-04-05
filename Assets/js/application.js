/**
 * Created by user on 05/12/2017.
 */


$(document).ready(function () {
    $(".menu ul li div").css("transform","scale(0,0)")

    $(".menu ul li").mouseover(function (eventObj) {

        $(this).find("div").css("transform","scale(1,1)")
        $(this).find("a").css("color","#47e1bd")
    })
    $(".menu ul li").mouseleave(function () {
        $(this).find("div").css("transform","scale(0,0)")
        var large = $(window).scrollTop()
        if(large>=570){
            $(this).find("a").css("color","#777777")
        }else {
            $(this).find("a").css("color","#e8e8e8")
        }

    })

    $(".app-data").hide()
    $(".app-image").hide()

    $(window).on("load",function(){
            $(".app-data").fadeIn(1000)
            $(".app-image").fadeIn(1500)
    })

    var large = $(window).scrollTop()
    // alert(large)
    $(".our-services").hide()
    $(".our-Apps").hide()

    /*$("#child1").hide()
    $("#child2").hide()
    $("#child3").hide()
*/
    $("#child1").css("margin-top","140px")
    $("#child3").css("margin-top","140px")
    $("#child2").css("margin-top","140px")

    $("#child1").css("opacity","0")
    $("#child2").css("opacity","0")
    $("#child3").css("opacity","0")

    $(".animatedApp img").hide()

    $(window).scroll(function () {
        var largeur = $(window).scrollTop()
        if(largeur>=250){
            $(".our-services").fadeIn(1000)
        }

        if(largeur>=570){
            $("nav").css("position","fixed")
            $("nav").css("background","white")
            $(".menu ul li a").css("color","#777777")
            $(".menu ul li a").css("font-weight","200")
            $(".logo h1").css("color","#47E1BD")
            $(".logo").css("margin-top","20px")
            $("header").css("height","80px")
            $("nav").css("height","80px")
            $(".menu").css("margin-top","20px")
        }else {
            $("nav").css("position","static")
            $("nav").css("background","#BB77FE")
            $(".menu ul li a").css("color","#e8e8e8")
            $(".logo h1").css("color","white")
            $(".logo").css("margin-top","40px")
            $("header").css("height","100px")
            $("nav").css("height","100px")
            $(".menu").css("margin-top","40px")
        }

        if(largeur>=800){
            $("#child1").css("opacity","1")
            $("#child1").css("margin-top","120px")
            $("#child2").css("opacity","1")
            $("#child2").css("margin-top","120px")
            $("#child3").css("opacity","1")
            $("#child3").css("margin-top","120px")

            /*$("#child1").fadeIn(1000)
            $("#child1").css("margin-top","120px")
            $("#child2").fadeIn(1500)
            $("#child2").css("margin-top","120px")
            $("#child3").fadeIn(2000)
            $("#child3").css("margin-top","120px")*/
        }
        if(largeur>=1350){
            $(".our-Apps").fadeIn(1000)
        }
        if(largeur>1800){
            $(".animatedApp img").fadeIn(500)
        }
    })

    // ضىهكضفهخىAnimation

    $(".animatedApp").click(function () {

        var store = $(this).attr("id")
        $(this).css("margin","30px")
        $(this).css("height","400px")
        $(this).css("width","260px")

        $(this).siblings().css("width","220px")
        $(this).siblings().css("height","360px")
        $(this).siblings().css("margin","50px 20px")

        if(store=="anime1"){
            $(".animations-long").css("left","540px")
            $("#anim1").css("background","white")
            $("#anim1").siblings().css("background","transparent")
            $("#anim1").siblings().css("border","1px solid rgba(224,224,224,0.67)")

        }
        else if(store=="anime2"){
            $(".animations-long").css("left","280px")
            $("#anim2").css("background","white")
            $("#anim2").siblings().css("background","transparent")
            $("#anim2").siblings().css("border","1px solid rgba(224,224,224,0.67)")
        }
        else if(store=="anime3"){
            $(".animations-long").css("left","20px")
            $("#anim3").css("background","white")
            $("#anim3").siblings().css("background","transparent")
            $("#anim3").siblings().css("border","1px solid rgba(224,224,224,0.67)")
        }
        else if(store=="anime4"){
            $(".animations-long").css("left","-240px")
            $("#anim4").css("background","white")
            $("#anim4").siblings().css("background","transparent")
            $("#anim4").siblings().css("border","1px solid rgba(224,224,224,0.67)")

        }
        else if(store=="anime5"){
            $(".animations-long").css("left","-400px")
            $("#anim5").css("background","white")
            $("#anim5").siblings().css("background","transparent")
            $("#anim5").siblings().css("border","1px solid rgba(224,224,224,0.67)")

        }
        else if(store=="anime6"){
            $(".animations-long").css("left","-660px")
            $("#anim6").css("background","white")
            $("#anim6").siblings().css("background","transparent")
            $("#anim6").siblings().css("border","1px solid rgba(224,224,224,0.67)")
        }
        else if(store=="anime7"){
            $(".animations-long").css("left","-920px")
            $("#anim7").css("background","white")
            $("#anim7").siblings().css("background","transparent")
            $("#anim7").siblings().css("border","1px solid rgba(224,224,224,0.67)")
        }
    })
    
    $(".spans span").click(function () {
        var store = $(this).attr("id")
        $(this).css("background","white")
        $(this).siblings().css("background","transparent")
        $(this).siblings().css("border","1px solid rgba(224,224,224,0.67)")

        if(store=="anim1"){
            $(".animations-long").css("left","540px")
            $("#anime1").css("height","400px")
            $("#anime1").css("width","260px")
            $("#anime1").siblings().css("width","220px")
            $("#anime1").siblings().css("height","360px")
            $("#anime1").css("margin","30px")
            $("#anime1").siblings().css("margin","50px 20px")
        }
        else if(store=="anim2"){
            $(".animations-long").css("left","280px")

            $("#anime2").css("height","400px")
            $("#anime2").css("width","260px")
            $("#anime2").siblings().css("width","220px")
            $("#anime2").siblings().css("height","360px")
            $("#anime2").css("margin","30px")
            $("#anime2").siblings().css("margin","50px 20px")

        }
        else if(store=="anim3"){
            $(".animations-long").css("left","20px")

            $("#anime3").css("height","400px")
            $("#anime3").css("width","260px")
            $("#anime3").siblings().css("width","220px")
            $("#anime3").siblings().css("height","360px")
            $("#anime3").css("margin","30px")
            $("#anime3").siblings().css("margin","50px 20px")

        }
        else if(store=="anim4"){

            $(".animations-long").css("left","-240px")

            $("#anime4").css("height","400px")
            $("#anime4").css("width","260px")
            $("#anime4").siblings().css("width","220px")
            $("#anime4").siblings().css("height","360px")
            $("#anime4").css("margin","30px")
            $("#anime4").siblings().css("margin","50px 20px")

        }
        else if(store=="anim5"){

            $(".animations-long").css("left","-500px")

            $("#anime5").css("height","400px")
            $("#anime5").css("width","260px")
            $("#anime5").siblings().css("width","220px")
            $("#anime5").siblings().css("height","360px")
            $("#anime5").css("margin","30px")
            $("#anime5").siblings().css("margin","50px 20px")

        }
        else if(store=="anim6"){

            $(".animations-long").css("left","-760px")

            $("#anime6").css("height","400px")
            $("#anime6").css("width","260px")
            $("#anime6").siblings().css("width","220px")
            $("#anime6").siblings().css("height","360px")
            $("#anime6").css("margin","30px")
            $("#anime6").siblings().css("margin","50px 20px")

        }

        else if(store=="anim7"){
            $(".animations-long").css("left","-920px")
            $("#anime7").css("height","400px")
            $("#anime7").css("width","260px")
            $("#anime7").siblings().css("width","220px")
            $("#anime7").siblings().css("height","360px")
            $("#anime7").css("margin","30px")
            $("#anime7").siblings().css("margin","50px 20px")

        }
    })

})