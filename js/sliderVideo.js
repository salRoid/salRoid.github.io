const audio = document.getElementById("aud");

audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
       window.addEventListener('click', () => {
          audio.play();
          $('.play_icon').css('display', 'none');
          $('.mute_icon').css('display', 'flex');
       })
    })
   });

function playAudio() {
   const audio = document.getElementById("aud");
   $('.play_icon').css('display', 'flex');
   $('.mute_icon').css('display', 'none');
   $('.mute_icon').hide();
   audio.pause();
}

function pauseAudio() {
   const audio = document.getElementById("aud");
   $('.mute_icon').css('display', 'flex');
   $('.play_icon').css('display', 'none');
   audio.play();
}

var myCarousel = document.getElementById('weddingCarousel')
myCarousel.addEventListener('slide.bs.carousel', function () {
   var vids = $(this).find(".active video");
   if(vids.length > 0){
      vids[0].pause();
      vids[0].currentTime = 0;
      vids[0].play();
   }
});