$('.page').click(function(){
    var getElement = $(this).attr('href');
    if($(getElement).length){
        var getOffset=$(getElement).offset().top;
        var targetDistance = 50;
        $('html,body').animate({
            scrollTop: getOffset-targetDistance
        },500);
    }
    return fals;
})


