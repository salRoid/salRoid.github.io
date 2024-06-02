document.querySelector('body').addEventListener('mousemove', eyeball);
document.querySelector('.dog').addEventListener('mouseover', angryTeeth);
document.querySelector('.dog').addEventListener('mouseout', smileyDog);

const tongue = document.querySelector('.tounge');
const tail = document.querySelector('.dog-tail');
const smile = document.querySelector('.dog-smile');
const anger = document.querySelector('.dog-angry');
const dogBody = document.querySelector('.dog-body');

function eyeball(){
    const eye = document.querySelectorAll('.dog-eyes-black');
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rotation+"deg)"
    });
}

function angryTeeth(){
    const smile = document.querySelector('.dog-smile');
    smile.style.display = "none";
    anger.style.display = "block";
    tail.style.webkitAnimationPlayState = 'paused';
    eye.style.width = "0.7vmin";
    eye.style.height = "0.7vmin";
    dogBody.style.animationDuration = "0.1s";
}

function smileyDog(){
    smile.style.display = "block";
    anger.style.display = "none";
    tail.style.webkitAnimationPlayState = 'running';
    eye.style.width = "1vmin";
    eye.style.height = "1vmin";
    dogBody.style.animationDuration = "0.4s";
}

anger.style.display = "none";