<?php
// koneksi ke database 
$server     = "localhost";          // ==> server kita
$username   = "root";               // ==> username database
$password   = "";                   // ==> password database
$db         = "db_tokokeprek";      // ==> masukan table db yang akan dipanggil
$koneksi = mysqli_connect($server, $username, $password, $db);

// Untuk merapihkan kode maka
function query($query){
  // memanggail $koneksi menggunakan global karena $koneksi berada di luar function (variabel scope)
  global $koneksi;
  // melakukan query yang menerima parameter $query yang dikirim dari index2.php
  $result = mysqli_query($koneksi, $query);
  // membuat array kosong untuk menampung data
  $rows = [];
  // melakukan perulangan untuk mengambil data dari object result
  while ($row = mysqli_fetch_assoc($result)) {
  // memasukkan data ke dalam array $rows
    $rows[] = $row;
  }
  // mengembalikan data
  return $rows;
}
?>