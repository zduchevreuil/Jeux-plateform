const timer = document.querySelector('.timer');
let minutes = 10;
timer.innerHTML = minutes;

setInterval(() => {
    minutes--;
    timer.innerHTML = minutes;
}, 60000);
