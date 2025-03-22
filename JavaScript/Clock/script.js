const second_hand = document.querySelector(".second-hand");
const minute_hand = document.querySelector(".minute-hand");
const hour_hand = document.querySelector(".hour-hand");

setInterval(() => {
    const date = new Date();

    const seconds = ((date.getSeconds() / 60) * 360) + 90;
    second_hand.style.transform = `rotate(${seconds}deg)`

    const minute = ((date.getMinutes() / 60) * 360) + 90;
    minute_hand.style.transform = `rotate(${minute}deg)`

    const hour = ((date.getHours() / 12) * 360) + 90;
    hour_hand.style.transform = `rotate(${hour}deg)`;
}, 1000)
