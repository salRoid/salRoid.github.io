const audio = document.getElementById("aud");

audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
       window.addEventListener('click', () => {
          audio.play();
       })
    })
    $('.play_icon').hide();
   });

function playAudio() {
   $('.play_icon').show();
   $('.mute_icon').hide();
   audio.pause();
}

function pauseAudio() {
   $('.mute_icon').show();
   $('.play_icon').hide();
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