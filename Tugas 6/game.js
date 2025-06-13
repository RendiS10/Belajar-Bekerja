document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gameForm");
  const userChoice = document.getElementById("userChoice");
  const resultArea = document.getElementById("resultArea");
  const userPick = document.getElementById("userPick");
  const computerPick = document.getElementById("computerPick");
  const gameResult = document.getElementById("gameResult");
  const playAgainArea = document.getElementById("playAgainArea");
  const choices = ["Kertas", "Gunting", "Batu"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = userChoice.value;
    const computer = choices[Math.floor(Math.random() * 3)];
    userPick.textContent = user;
    computerPick.textContent = computer;

    let result = "";
    let alertClass = "";
    if (user === computer) {
      result = "Seri!";
      alertClass = "alert-secondary";
    } else if (
      (user === "Kertas" && computer === "Batu") ||
      (user === "Batu" && computer === "Gunting") ||
      (user === "Gunting" && computer === "Kertas")
    ) {
      result = "Selamat, Anda Menang!";
      alertClass = "alert-success";
    } else {
      result = "Komputer Menang!";
      alertClass = "alert-danger";
    }
    gameResult.textContent = result;
    gameResult.className = "alert mt-3 " + alertClass;
    resultArea.style.display = "block";
    playAgainArea.style.display = "block";
    // Disable tombol submit setelah main
    form.querySelector('button[type="submit"]').disabled = true;
    userChoice.disabled = true;
  });

  // Event untuk tombol Main lagi
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "playAgainBtn") {
      // Reset tampilan
      resultArea.style.display = "none";
      playAgainArea.style.display = "none";
      form.reset();
      userPick.textContent = "";
      computerPick.textContent = "";
      gameResult.textContent = "";
      gameResult.className = "alert mt-3";
      // Enable tombol submit dan select
      form.querySelector('button[type="submit"]').disabled = false;
      userChoice.disabled = false;
    }
  });
});
