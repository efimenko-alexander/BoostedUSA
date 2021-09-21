document.getElementById('burger').onclick = () => {
    var element = document.getElementById("menu");
    element.classList.toggle("active");
    document.getElementById('burger').classList.toggle("active");
    document.body.classList.toggle('lock');
};

$(document).ready(function () {
    $('.accessories__inner').slick({
        slidesToShow: 7,
        dots: false,
        speed: 500,
        autoplay: false,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        waitForAnimate: false,
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
    });
});