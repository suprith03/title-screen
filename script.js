document.addEventListener("DOMContentLoaded", function() {
    const visited = localStorage.getItem("visited");
    if (visited) {
        showTitleScreen();
    } else {
        document.getElementById("question1").style.display = "block";
        addEnterKeyListener(1);
    }
});

function nextQuestion(nextId) {
    document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
    const nextCard = document.getElementById(`question${nextId}`);
    if (nextCard) {
        nextCard.style.display = "block";
        addEnterKeyListener(nextId); 
    } else {
        showTitleScreen();
    }
}

function showTitleScreen() {
    localStorage.setItem("visited", "true");
    document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
    document.getElementById("title-screen").style.display = "block";
}

function addEnterKeyListener(cardId) {
    const inputField = document.getElementById(`answer${cardId}`);
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            nextQuestion(cardId + 1);
        }
    });
}
