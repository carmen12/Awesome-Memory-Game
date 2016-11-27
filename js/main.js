function addAndRemoveClass (elem, className, time) {
    elem.addClass(className);
    window.setTimeout(function () {
        elem.removeClass(className);
    }, time);
}
function displayNumOfTries (tries){
    $('#tries').text(tries);
}
$(document).ready(function(){
    var imgArray = ['heart-72-183092.png',"baby-duck-72-193440.png",
        "green-shamrock-72-191893.png","ice-cream-1-72-237386.png",
        "mustache-silhouette-72-237353.png","flower-72-222963.png",
        "pirate-flag-72-220801.png", "awesome-72-130657.png"];
    var numOfImgAppearance = [];
    var noMore = [];
    var numOfTileFlips = 0; var count =0;
    $('.tile').click(function(){
        addAndRemoveClass($(this), 'flip',5000);
        numOfTileFlips++;
        if (numOfTileFlips%2 == 0){
            displayNumOfTries(numOfTileFlips/2);
        }
    });

    var refreshIntervalId = window.setInterval(function () {
        var flip = $('.flip');
        if(flip.length >1){
            window.setTimeout(function () {
                $('.tile').removeClass('flip');
            },200);
            if (flip[0].childNodes[1].style.background == flip[1].childNodes[1].style.background){
                flip.css('display','none');
                count++;
            }
        }
        if(count === 8){
            clearInterval(refreshIntervalId);
            $(".tiles").html('<tr><td><div id="yeee">Yeee! You\'re great!</div></td></tr>');
        }
    }, 300);
    while (numOfImgAppearance.length + noMore.length < $('.face.back').length) {
        var num = Math.floor(Math.random() * 8);
        if ($.inArray(num, numOfImgAppearance) == -1){
                numOfImgAppearance.push(num);
        }else if ($.inArray(num, noMore) == -1){
            noMore.push(num);
        }
    }
    var showImg = $.merge(numOfImgAppearance, noMore);
    console.log(showImg);
    $('.face.back').each(function(index) {
        $(this).css('background','url(img/'+imgArray[showImg[index]]+') no-repeat center');
    });

});
