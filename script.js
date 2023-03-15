let score = 0
let date = new Date()
let ball_area = document.getElementById("ball-area");

let score_text = document.createElement("p");
score_text.textContent = `Pontos: ${score} tempo: 0.000`
score_text.style.translate ="50% 0%"

let button = document.createElement("button");
button.className = "ball";
button.textContent = "clica";
button.type = "button";

button.addEventListener("click", function() {
    
    let x = Math.random()*90 + 5;
    let y = Math.random()*90 + 5;
    button.style.top = `${y}%`
    button.style.left = `${x}%`

    score++
    score_text.textContent = `Pontos: ${score} tempo: ${(new Date()-date)/1000}`

    date = new Date()
    
});

ball_area.appendChild(score_text)
ball_area.appendChild(button);
