<?php 
// Merapihkan Kode
require 'db/koneksi.php'; // panggil file koneksi.php

$produks = query("SELECT * FROM produk"); // panggil function query yang ada di file koneksi.php


if (isset($_POST["submit"])) {
    //ambil data dari tiap elemen dalam form
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $alamat = $_POST["alamat"];
    $produk = $_POST["produk"];

    //query insert data
    $query = "INSERT INTO pemesanan (nama, email, alamat, produk) VALUES('$nama','$email','$alamat', '$produk')";
    mysqli_query($koneksi, $query);

    //cek apakah data berhasil ditambahkan atau tidak
    if (mysqli_affected_rows($koneksi) > 0) {
      echo "<script>alert('Berhasil!');</script>";
    } else {
        echo "gagal";
        echo "<br>";
        echo mysqli_error($koneksi);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toko Keprek</title>
  <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
  <header>
    <div class="logo">
      <a href="#">KEPREK</a>
      </div>
    <nav>
      <ul>
        <li><a href="#hero">Beranda</a></li>
        <li><a href="#produk">Produk</a></li>
        <li><a href="#formulir">Formulir Pemesanan</a></li>
        <li><a href="daftarpesanan.php">Daftar Pemesanan</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <section class="hero" id="hero">
          <div class="hero-content">  
            <img class="hero-img" src="public/images/hero.png" alt="">
            <h1>Selamat Datang di Toko Keprek</h1>
            <p>Temukan berbagai produk keprek yang lezat dan berkualitas.</p>
          </div>
      </section>
      <section class="produk" id="produk">
        <h2>Produk Terbaru</h2>
        <div class="produk-list">
          <?php foreach($produks as $produk) : ?>
          <div class="produk-item">
            <img src="<?= $produk['image'] ?>" alt="<?= $produk['nama_produk'] ?>">
            <h3><?= $produk['nama_produk'] ?></h3>
            <p>Rp <?= number_format($produk['harga_produk'], 0, ',', '.') ?></p>
            <a href="deskripsi.php?id=<?= $produk['id'] ?>" class="lihat-detail">Lihat Detail</a>
          </div>
          <?php endforeach ?>
        </div>
      </section>
    <section id="formulir">
  <h2>Formulir Pemesanan</h2>
  <form  method="POST" class="form-pemesanan">
    <div class="form-group">
      <label for="nama">Nama:</label>
      <input type="text" id="nama" name="nama" required>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>

    <div class="form-group">
      <label for="alamat">Alamat:</label>
      <input type="alamat" id="alamat" name="alamat" required>
    </div>

    <div class="form-group">
      <label for="produk">Pilih Produk:</label>
      <select id="produk" name="produk" required>
        <?php foreach($produks as $produk) : ?>
          <option value="<?= $produk['id'] ?>"><?= $produk['nama_produk'] ?></option>
        <?php endforeach; ?>
      </select>
    </div>

    <div class="form-group">
      <button type="submit" name ="submit">🛒 Pesan Sekarang</button>
    </div>
  </form>
</section>

    </article>
  </main>
</body>
</html>