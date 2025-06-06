<?php
require 'db/koneksi.php'; // Panggil file koneksi

// Ambil data dari tabel pemesanan
$pemesanans = query("SELECT * FROM pemesanan");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daftar Pesanan</title>
  <link rel="stylesheet" href="public/css/daftarpesanan.css">
</head>
<body>
 <header>
    <div class="logo">
      <a href="#">KEPREK</a>
      </div>
    <nav>
      <ul>
        <li><a href="index.php">Beranda</a></li>
        <li><a href="daftarpesanan.php">Daftar Pemesanan</a></li>
      </ul>
    </nav>
  </header>
  <main>
 <section id="daftar-pesanan">
  <h1>Daftar Pesanan</h1>
  <div class="pesanan-container">
    <table class="tabel-pesanan">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Alamat</th>
        </tr>
      </thead>
      <tbody>
        <?php $no = 1; foreach ($pemesanans as $pesanan): ?>
        <tr>
          <td><?= $no++; ?></td>
          <td><?= htmlspecialchars($pesanan['nama']); ?></td>
          <td><?= htmlspecialchars($pesanan['email']); ?></td>
          <td><?= htmlspecialchars($pesanan['alamat']); ?></td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</section>

  </main>
</body>
</html>