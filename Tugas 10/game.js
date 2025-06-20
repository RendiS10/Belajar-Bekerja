document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gameForm");
  const userChoice = document.getElementById("userChoice");
  const resultArea = document.getElementById("resultArea");
  const userPick = document.getElementById("userPick");
  const computerPick = document.getElementById("computerPick");
  const gameResult = document.getElementById("gameResult");
  const playAgainArea = document.getElementById("playAgainArea");
  const choices = ["Kertas", "Gunting", "Batu"];

  // Arrow function untuk pilihan komputer
  const getComputerChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  // Simulasi riwayat permainan sebelumnya
  const initialHistory = [
    { user: "Kertas", computer: "Batu", result: "Selamat, Anda Menang!" },
    { user: "Batu", computer: "Gunting", result: "Selamat, Anda Menang!" },
    { user: "Gunting", computer: "Batu", result: "Komputer Menang!" },
    { user: "Kertas", computer: "Kertas", result: "Seri!" },
  ];
  // Salin data riwayat menggunakan spread operator
  const history = [...initialHistory];

  // Fungsi untuk menampilkan riwayat ke web (lebih interaktif)
  // Arrow function & destructuring untuk render riwayat
  const renderHistory = (filter = "Semua") => {
    const historyArea = document.getElementById("historyArea");
    if (!historyArea) return;
    // Salin data riwayat sebelum filter
    let filtered = [...history];
    if (filter !== "Semua") {
      filtered = filtered.filter(({ result }) => result === filter);
    }
    if (filtered.length === 0) {
      historyArea.innerHTML = `<div class="text-center text-muted"><i class='fa fa-info-circle me-1'></i>Belum ada riwayat permainan.</div>`;
      return;
    }
    let html = `<div class='table-responsive'><table class="table table-bordered table-sm mt-2 align-middle"><thead class='table-light'><tr><th>#</th><th><i class='fa fa-user'></i> Anda</th><th><i class='fa fa-desktop'></i> Komputer</th><th><i class='fa fa-flag-checkered'></i> Hasil</th></tr></thead><tbody>`;
    filtered.forEach(({ user, computer, result }, idx) => {
      // Highlight baris terakhir jika filter semua dan ini data terbaru
      const isLast = filter === "Semua" && idx === filtered.length - 1;
      html += `<tr class='${isLast ? "history-row-new" : ""}'>`;
      html += `<td>${idx + 1}</td>`;
      html += `<td>${iconFor(user)} ${user}</td>`;
      html += `<td>${iconFor(computer)} ${computer}</td>`;
      html += `<td>${badgeForResult(result)}</td>`;
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    historyArea.innerHTML = html;
  };

  // Fungsi untuk menampilkan ikon sesuai pilihan
  // Arrow function untuk ikon
  const iconFor = (pilihan) => {
    if (pilihan === "Kertas")
      return "<i class='fa-regular fa-file-lines text-success'></i>";
    if (pilihan === "Gunting")
      return "<i class='fa-solid fa-scissors text-danger'></i>";
    if (pilihan === "Batu")
      return "<i class='fa-solid fa-gem text-secondary'></i>";
    return "";
  };

  // Fungsi untuk badge hasil
  // Arrow function untuk badge hasil
  const badgeForResult = (result) => {
    if (result === "Selamat, Anda Menang!")
      return "<span class='badge bg-success'><i class='fa fa-trophy me-1'></i>Menang</span>";
    if (result === "Komputer Menang!")
      return "<span class='badge bg-danger'><i class='fa fa-times-circle me-1'></i>Kalah</span>";
    if (result === "Seri!")
      return "<span class='badge bg-secondary'><i class='fa fa-equals me-1'></i>Seri</span>";
    return result;
  };

  // Fungsi untuk menentukan hasil suit
  // Arrow function & template literals untuk hasil suit
  const getSuitResult = (user, computer) => {
    if (user === computer) {
      return { result: `Seri!`, alertClass: "alert-secondary" };
    } else if (
      (user === "Kertas" && computer === "Batu") ||
      (user === "Batu" && computer === "Gunting") ||
      (user === "Gunting" && computer === "Kertas")
    ) {
      return { result: `Selamat, Anda Menang!`, alertClass: "alert-success" };
    } else {
      return { result: `Komputer Menang!`, alertClass: "alert-danger" };
    }
  };

  // Fungsi untuk menampilkan hasil kepada pengguna
  // Arrow function & template literals untuk menampilkan hasil
  const showResult = (user, computer, result, alertClass) => {
    userPick.textContent = `${user} (Kamu)`;
    computerPick.textContent = `${computer} (Komputer)`;
    gameResult.textContent = `${result} Komputer memilih ${computer}.`;
    gameResult.className = `alert mt-3 ${alertClass}`;
    resultArea.style.display = "block";
    playAgainArea.style.display = "block";
    // Disable tombol submit setelah main
    form.querySelector('button[type="submit"]').disabled = true;
    userChoice.disabled = true;
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = userChoice.value;
    const computer = getComputerChoice();
    const { result, alertClass } = getSuitResult(user, computer);
    showResult(user, computer, result, alertClass);
    // Simpan ke riwayat
    history.push({ user, computer, result });
    renderHistory(document.getElementById("filterHistory")?.value || "Semua");
    // Animasi highlight baris terakhir
    setTimeout(() => {
      const lastRow = document.querySelector("#historyArea tr.history-row-new");
      if (lastRow) lastRow.classList.remove("history-row-new");
    }, 1200);
  });
  // Event untuk hapus riwayat
  document.addEventListener("click", function (e) {
    if (
      e.target &&
      (e.target.id === "clearHistoryBtn" ||
        (e.target.closest && e.target.closest("#clearHistoryBtn")))
    ) {
      if (confirm("Yakin ingin menghapus semua riwayat permainan?")) {
        history.length = 0;
        renderHistory(
          document.getElementById("filterHistory")?.value || "Semua"
        );
      }
    }
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

  // Event untuk filter riwayat
  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "filterHistory") {
      renderHistory(e.target.value);
    }
  });

  // Inisialisasi tampilan riwayat saat halaman dimuat
  renderHistory();
});
