const audio = document.getElementById("aud");
var isPlayed = false;

audio.addEventListener("canplaythrough", () => {
   audio.play().catch(e => {
      window.addEventListener('click', () => {
         if (!isPlayed) {
            audio.play();
            $('.mute_icon').css('display', 'flex');
            $('.play_icon').css('display', 'none');
            isPlayed = true;
         }
      })
   })
});

var playButton = document.getElementById("play_icon");
playButton.addEventListener('click', () => {
   $('.mute_icon').css('display', 'flex');
   $('.play_icon').css('display', 'none');
   audio.play();
});

var muteButton = document.getElementById("mute_icon");
muteButton.addEventListener('click', () => {
   $('.play_icon').css('display', 'flex');
   $('.mute_icon').css('display', 'none');
   audio.pause();
});