$(document).ready(function(){

    $('.tile').click(function(){
        $(this).toggleClass('flip');
    });
    var imgArray = ['heart-72-183092.png',"baby-duck-72-193440.png",
                    "green-shamrock-72-191893.png","ice-cream-1-72-237386.png",
                    "mustache-silhouette-72-237353.png","flower-72-222963.png",
                    "pirate-flag-72-220801.png", "awesome-72-130657.png"];

    var numOfImgAppearance = [];
    var noMore = [];
    while (numOfImgAppearance.length + noMore.length < $('.face.back').length) {
        var num = Math.floor(Math.random() * 8);
        if ($.inArray(num, numOfImgAppearance) == -1){
                numOfImgAppearance.push(num);
        }else if ($.inArray(num, noMore) == -1){
            noMore.push(num);
        }
    }
    showImg = $.merge(numOfImgAppearance, noMore);
    // console.log(showImg);

    $('.face.back').each(function(index) {
        $(this).css('background','url(img/'+imgArray[showImg[index]]+') no-repeat center');
    });

});
