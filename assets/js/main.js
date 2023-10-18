
/* javascript */


document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        let q1 = parseInt(document.getElementById('q1').value);
        let q2 = parseInt(document.getElementById('q2').value);
        let q3 = parseInt(document.getElementById('q3').value);
        let q4 = parseInt(document.getElementById('q4').value);
        let q5 = parseInt(document.getElementById('q5').value);
        let q6 = parseInt(document.getElementById('q6').value);
        let q7 = parseInt(document.getElementById('q7').value);
        let q8 = parseInt(document.getElementById('q8').value);
        let q9 = parseInt(document.getElementById('q9').value);
        let q10 = parseInt(document.getElementById('q10').value);

        let susScore = (q1-1+5-q2+q3-1+5-q4+q5-1+5-q6+q7-1+5-q8+q9-1+5-q10) * 2.5

        const scoreValue = document.getElementById("scoreValue");
        scoreValue.textContent = susScore;
    })
})

console.log("https://www.figma.com/file/5mdBcbW0zWtWLwSPk73Rz5/Usability-Test?type=design&node-id=0-1&mode=design&t=acRSamaosqCqgzuv-0")

