$(document).ready(function(){
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
            ]
    });


    $('.login-button').on('click', function () {
        $('.login-popup').addClass('open')
    })

    $('.login-popup .overlay').on('click', function () {
        $('.login-popup').removeClass('open')
    })
    $('.mobile-menu-button').on('click', function () {
        $('.mobile-menu-button').toggleClass('open')
        $('.nav-menu').toggleClass('open')
    })
});

function initMap() {
    var kiev = {lat: 50.431622, lng: 30.516645};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: kiev
    });
    var marker = new google.maps.Marker({
        position: kiev,
        icon:'/assets/img/marker.png',
        map: map,
        title:'kiev'
    });
    var contentString = ' <div class="map-popup" id="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p> </div>'
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}