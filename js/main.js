$('.nine-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

$('.eleven-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
  dots: false,
  arrows: false,

      }}, {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
    dots: false,
    arrows: false,
  
        }}]
});


document.querySelector('.ten-block-title').onclick = () => {
  
  document.querySelector('.text-2').classList.remove('text-none')
  document.querySelector('.text-3').classList.remove('text-none')
  document.querySelector('.text-4').classList.remove('text-none')

  document.querySelector('.title-3').classList.remove('rotate')
  document.querySelector('.title-2').classList.remove('rotate')
  document.querySelector('.title-4').classList.remove('rotate')


  document.querySelector('.text-1').classList.toggle('text-none')
  document.querySelector('.title').classList.toggle('rotate')
}
document.querySelector('.title-2').onclick = () => {

  document.querySelector('.text-1').classList.remove('text-none')
  document.querySelector('.text-3').classList.remove('text-none')
  document.querySelector('.text-4').classList.remove('text-none')

  document.querySelector('.title-3').classList.remove('rotate')
  document.querySelector('.title-4').classList.remove('rotate')
  document.querySelector('.title').classList.remove('rotate')

  document.querySelector('.text-2').classList.toggle('text-none')
  document.querySelector('.title-2').classList.toggle('rotate')

}
document.querySelector('.title-3').onclick = () => {
  document.querySelector('.text-1').classList.remove('text-none')
  document.querySelector('.text-2').classList.remove('text-none')
  document.querySelector('.text-4').classList.remove('text-none')

  document.querySelector('.title-4').classList.remove('rotate')
  document.querySelector('.title-2').classList.remove('rotate')
  document.querySelector('.title').classList.remove('rotate')

  document.querySelector('.text-3').classList.toggle('text-none')
  document.querySelector('.title-3').classList.toggle('rotate')

}
document.querySelector('.title-4').onclick = () => {
  document.querySelector('.text-1').classList.remove('text-none')
  document.querySelector('.text-3').classList.remove('text-none')
  document.querySelector('.text-2').classList.remove('text-none')

  document.querySelector('.title-3').classList.remove('rotate')
  document.querySelector('.title-2').classList.remove('rotate')
  document.querySelector('.title').classList.remove('rotate')


  document.querySelector('.text-4').classList.toggle('text-none')
  document.querySelector('.title-4').classList.toggle('rotate')

}

// title.forEach((element) => {
//   element.classList.remove('active');
// });