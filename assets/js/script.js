var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// start-slider

function myFunction(smallImg) {
    let fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;           

}

$(function name() {
    $(".xzoom, xzoom-gallery").xzoom({
        zoomWidth:400,
        tint: "#333",
        Xoffset: 15,
    });
    
});