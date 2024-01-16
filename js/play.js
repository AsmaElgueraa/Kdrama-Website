
/***play trailer*** */
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

   /******play Episodes ******* */
   let playButton1 = document.querySelector('.watch-btn1 ');
   let videoepisode = document.querySelector('.video-container-episode');
   let myvideoepisode = document.querySelector('#myvideo-episode');
   let closebtnepisode = document.querySelector('.close-video-episode');

   playButton1.onclick = () =>{
     videoepisode.classList.add('show-video1');
     myvideoepisode.play();
   };
   
   closebtnepisode.onclick = () =>{
     videoepisode.classList.remove('show-video1');
     myvideoepisode.pause();
   };






  
  