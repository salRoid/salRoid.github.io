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
playButton.addEventListener('click', () => {
   console.log($('.mute_icon'));
   console.log($('.play_icon'));
   $('.mute_icon').css('display', 'flex');
   $('.play_icon').css('display', 'none');
   console.log('Play the audio', audio);
   audio.play();
});


var muteButton = document.getElementById("mute_icon");
muteButton.addEventListener('click',  () => {
   console.log($('.mute_icon'));
   console.log($('.play_icon'));
   $('.play_icon').css('display', 'flex');
   $('.mute_icon').css('display', 'none');
   console.log('Pause the audio', audio);
   audio.pause();
});

var myCarousel = document.getElementById('weddingCarousel')
myCarousel.addEventListener('slide.bs.carousel', function () {
   var vids = $(this).find(".active video");
   if(vids.length > 0){
      vids[0].pause();
      vids[0].currentTime = 0;
      vids[0].play();
   }
});