<?php
require 'db/koneksi.php'; // Panggil file koneksi

// Ambil ID produk dari URL
$id = $_GET['id'];

// Query untuk mengambil data produk berdasarkan ID
$produk = query("SELECT * FROM produk WHERE id = $id")[0];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detail Produk - <?= $produk['nama_produk'] ?></title>
  <link rel="stylesheet" href="public/css/style.css">
  <style>
    .detail-produk{
      display: flex;
    align-items: center;
    flex-direction: column;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">
      <a href="index.php">KEPREK MENU</a>
    </div>
  </header>
  <main>
    <section class="detail-produk">
      <h1><?= $produk['nama_produk'] ?></h1>
      <img src="<?= $produk['image'] ?>" alt="<?= $produk['nama_produk'] ?>">
      <p>Harga: Rp <?= number_format($produk['harga_produk'], 0, ',', '.') ?></p>
      <p>Deskripsi: <?= $produk['deskripsi_produk'] ?></p>
      <a href="index.php" class="kembali">Kembali ke Beranda</a>
    </section>
    <br>
    <br>
  </main>
</body>
</html>