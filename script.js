

let holes = document.querySelectorAll('.hole');

function showStar(){
    holes.forEach(hole => {
        hole.classList.remove('star');
        hole.classList.remove('small-stars');
    });

    const randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].classList.add('star');
}

// score
let score = 0;
const scoreDisplay = document.getElementById('score'); 

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if(hole.classList.contains('star')){
            score++;
            scoreDisplay.textContent = score;

            hole.classList.remove('star');
            hole.classList.add('small-stars');

            setTimeout(()=>{
                hole.classList.remove('small-stars');
            },300)
        }
    });
});

// star movement
let starTimer = setInterval(showStar, 1500); 

// timer
let time = 30;
const timeDisplay = document.getElementById('time'); 


let gameTimer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if(time === 0){
        clearInterval(gameTimer);
        clearInterval(starTimer);
        holes.forEach(hole => hole.classList.remove('star'));

        window.location.href = "score.html?score=" + score;
    }
},1000);


