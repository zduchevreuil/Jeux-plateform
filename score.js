let score = document.querySelector('.score');
let s = 0;
setInterval(() => {
    score.innerHTML = s;
}, 100);


export default score;
