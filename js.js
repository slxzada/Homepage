$(document).click(function(){
    $(".grid-container").css("grid-template-columns", "repeat(8, 1fr)")
})

$(document).mousemove(function(){
    if ($(".hello:hover").length == 1){
        $(".hello").css("color", "rgb(240, 226, 108)")
    }
    else {
        $(".hello").css("color", "rgb(143, 189, 144)")
    }
})

$(document).mousemove(function(){
    if ($(".item1:hover").length == 1){
        $(".item1").css("background", "rgb(240, 226, 108)")
    }
    else {
        $(".item1").css("background", "none")
    }

})

$(document).mousemove(function(){
    if ($(".item2:hover").length == 1){
        $(".item2").css("background", "rgb(240, 226, 108)")
    }
    else {
        $(".item2").css("background", "none")
    }

})

$(document).mousemove(function(){
    if ($(".item3:hover").length == 1){
        $(".item3").css("background", "rgb(240, 226, 108)")
    }
    else {
        $(".item3").css("background", "none")
    }

})

$(document).mousemove(function(){
    if ($(".item4:hover").length == 1){
        $(".item4").css("background", "rgb(240, 226, 108)")
    }
    else {
        $(".item4").css("background", "none")
    }

})

$(document).mousemove(function(){
    if ($(".introduction-1:hover").length ==1){
        $(".introduction-1").css("filter", "none")
    }
    else {
        $(".introduction-1").css("filter", "blur(5px)")
    }
})

$(document).mousemove(function(){
    if ($(".introduction-2:hover").length ==1){
        $(".introduction-2").css("filter", "none")
    }
    else {
        $(".introduction-2").css("filter", "blur(5px)")
    }
})

$(document).mousemove(function(){
    if ($(".introduction-3:hover").length ==1){
        $(".introduction-3").css("filter", "none")
    }
    else {
        $(".introduction-3").css("filter", "blur(5px)")
    }
})

