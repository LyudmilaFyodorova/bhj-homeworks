let startTimer = 59;
const timer = document.getElementById("timer");

function minusTimer() {
  startTimer -= 1;
  timer.textContent = startTimer;

  if (startTimer === 0) {
    clearInterval(id);
    alert('Вы победили в конкурсе!');
  }
}

id = setInterval(minusTimer, 1000);
