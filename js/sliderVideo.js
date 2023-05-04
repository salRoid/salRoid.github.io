const audio = document.getElementById("aud");

audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
       window.addEventListener('click', () => {
         $('.play_icon').css('display', 'none');
         $('.mute_icon').css('display', 'flex');
         audio.play();
       })
    })
   });

var playButton = document.getElementById("play_icon");
playButton.addEventListener('click', function () {
   console.log('Play Icon');
   pauseAudio();
});


var muteButton = document.getElementById("mute_icon");
muteButton.addEventListener('click', function () {
   console.log('Mute Icon');
   playAudio();
});

function playAudio() {
   const audio = document.getElementById("aud");
   $('.play_icon').css('display', 'flex');
   $('.mute_icon').css('display', 'none');
   console.log('Pause the audio');
   audio.pause();
}

function pauseAudio() {
   const audio = document.getElementById("aud");
   $('.mute_icon').css('display', 'flex');
   $('.play_icon').css('display', 'none');
   console.log('Play the audio');
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