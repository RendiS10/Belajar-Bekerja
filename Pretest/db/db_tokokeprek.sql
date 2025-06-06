-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 25, 2025 at 10:17 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tokokeprek`
--

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan`
--

CREATE TABLE `pemesanan` (
  `no_pemesanan` int NOT NULL,
  `nama` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `produk` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pemesanan`
--

INSERT INTO `pemesanan` (`no_pemesanan`, `nama`, `email`, `alamat`, `produk`) VALUES
(1, 'Rendi Sutendi', 'rendisutendi2@gmail.com', 'Jalan Arjuna', '1'),
(5, 'Hilman', 'altheakim1410@gmail.com', 'Jalan Arjuna', '3'),
(6, 'tes', 'rendisutendi27@gmail.com', 'dasd', '2');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int NOT NULL,
  `image` varchar(300) NOT NULL,
  `nama_produk` varchar(300) NOT NULL,
  `harga_produk` int NOT NULL,
  `deskripsi_produk` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `image`, `nama_produk`, `harga_produk`, `deskripsi_produk`) VALUES
(1, 'https://i.ytimg.com/vi/bEYqSjn8V30/hqdefault.jpg', 'Keprek Ayam Pedas', 20000, '<ul>\r\n  <li>Ayam katsu crispy digeprek dengan sambal pedas khas</li>\r\n  <li>Nasi putih pulen</li>\r\n  <li>Sayuran segar: bonteng (mentimun) & daun kemangi</li>\r\n  <li>Teh manis dingin sebagai minuman pendamping</li>\r\n  <li>Tersedia level kepedasan dari Level 1 hingga Level 8</li>\r\n</ul>\r\n'),
(2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5KQDbD987pM6SUMjQYt3ozaOY4p94uFjgA&s', 'Keprek Tahu + Tempe', 25000, '<ul>\r\n  <li>Ayam katsu crispy digeprek dengan sambal pedas khas</li>\r\n  <li>Nasi putih pulen</li>\r\n  <li>Sayuran segar: bonteng (mentimun) & daun kemangi</li>\r\n  <li>Topping tahu dan tempe goreng</li>\r\n  <li>Teh manis dingin sebagai minuman pendamping</li>\r\n  <li>Tersedia level kepedasan dari Level 1 hingga Level 8</li>\r\n</ul>\r\n'),
(3, 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c7721567-afc1-42c6-a4e1-2a8da1f42271_Go-Biz_20211007_182928.jpeg', 'Keprek Nugget', 30000, '<ul>\r\n  <li>Ayam katsu crispy digeprek dengan sambal pedas khas</li>\r\n  <li>Nasi putih pulen</li>\r\n  <li>Sayuran segar: bonteng (mentimun) & daun kemangi</li>\r\n  <li>Topping tahu, tempe goreng, dan nugget</li>\r\n  <li>Teh manis dingin sebagai minuman pendamping</li>\r\n  <li>Tersedia level kepedasan dari Level 1 hingga Level 8</li>\r\n</ul>\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD PRIMARY KEY (`no_pemesanan`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pemesanan`
--
ALTER TABLE `pemesanan`
  MODIFY `no_pemesanan` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
