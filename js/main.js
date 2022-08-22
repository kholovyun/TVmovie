
$('.rezka__head__list li').hover(function(){
    $(this).children('ul').stop(true, false, true).slideToggle(400)
})

$('.hi-slide').hiSlide({
    interval: 4000,
    speed: 1000,
});

$(".project").hover3d({
    selector: ".project__card",
    shine: true,
    perspective: 1000,
    sensitivity: 10,
  });

  $('#smarttab').smartTab({
    transition: {
        animation: 'fade',
        speed: '500'
    }
  });



