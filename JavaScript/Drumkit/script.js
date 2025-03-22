const removeClass = (key) => {
    if (key.propertyName !== 'transform') return;
    key.target.classList.remove('playing');
}

const playSound = (keycode) => {
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    if(!audio) return
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${keycode}"]`);
    key.classList.add("playing");

    setTimeout(() => {
        key.classList.remove("playing");
        console.log("test")
    }, 200)
}

window.addEventListener("keydown", (e) => {
    playSound(e.keyCode);
})

