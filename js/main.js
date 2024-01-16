//swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView:4,  //nbre de diapo vu ala fois    
    spaceBetween: 30,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  });


 //play trailer of home 
 let playButton = document.querySelector('.watch-btn ');
 let video = document.querySelector('.video-container');
 let myvideo = document.querySelector('#myvideo');
 let closebtn = document.querySelector('.close-video');

 playButton.onclick = () =>{
   video.classList.add('show-video')
   //auto play when click on button
   myvideo.play();
 };

 closebtn.onclick = () =>{
   video.classList.remove('show-video')
   //pause on close video
   myvideo.pause();
 };


  
  