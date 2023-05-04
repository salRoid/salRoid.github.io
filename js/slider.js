const audio = document.getElementById("aud");

audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
       window.addEventListener('click', () => {
          audio.play();
          $('.play_icon').hide();
       })
    })
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