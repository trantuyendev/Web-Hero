let scoreHome = 0;
let scoreAway = 0;
let elmBoxScoreHome = document.querySelector(".box-score.home");
let elmboxScoreAway = document.querySelector(".box-score.away");

let listBtn = document.getElementsByClassName("btn");


for (let i = 0; i < listBtn.length; i++) {
    console.log(listBtn[i]);
    listBtn[i].addEventListener("click", function () {
        let score = parseInt(listBtn[i].textContent)
        if (listBtn[i].classList.contains("home")) {
            scoreHome += score;
            showScore(elmBoxScoreHome, scoreHome);
        } else {
            scoreAway += score;
            showScore(elmboxScoreAway, scoreAway);

        }

    })

}
function showScore(elm, score) {
    if (score < 10) score = "0" + score;
    elm.textContent = score;
}
