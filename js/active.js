function activeStyle(colorName){
        $(".color-style").attr("disabled", "true");
        $(".color-style[title="+colorName+"]").removeAttr("disabled");
    }
$('.toggle-switch').click(function(){
    $('.style-swicter').toggleClass('active');
});