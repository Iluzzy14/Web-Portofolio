# README - Proyek Website Portofolio

## 1. Deskripsi Proyek
### a. Tujuan
Proyek ini bertujuan untuk membuat sebuah website portofolio pribadi yang menampilkan informasi tentang pemilik, keterampilan, pengalaman, dan proyek-proyek yang telah dikerjakan. Website ini juga menyediakan fitur kontak agar pengguna dapat dengan mudah berkomunikasi dengan pemilik.

### b. Fitur Utama
- **Halaman Beranda**: 
  - Menampilkan foto pemilik website.
  - Perkenalan singkat dengan kutipan motivasi.
  - Navigasi utama ke berbagai halaman dalam website.
  - Tautan ke media sosial pemilik.
  
- **Halaman Tentang Saya**:
  - Informasi tentang pemilik, termasuk latar belakang dan keahlian.
  - Grafik keterampilan dalam bentuk progress bar.
  - Timeline pendidikan dan pengalaman kerja.
  
- **Halaman Portofolio**:
  - Daftar proyek yang telah dikerjakan.
  - Gambar dan deskripsi proyek.
  - Tautan ke repositori GitHub atau demo proyek.
  
- **Halaman Kontak**:
  - Formulir untuk menghubungi pemilik website.
  - Informasi kontak seperti email, nomor telepon, dan alamat.
  - Peta lokasi menggunakan Google Maps API.
  
- **Dark Mode**:
  - Pengguna dapat mengganti tampilan antara mode terang dan gelap dengan switch button.
  - Preferensi pengguna akan disimpan di local storage.
  
- **Navigasi Responsif**:
  - Menu navigasi yang dapat menyesuaikan dengan berbagai ukuran layar.
  - Tombol hamburger untuk tampilan mobile.
  
### c. Fitur Tambahan
- **Back to Top Button**:
  - Tombol yang muncul saat pengguna menggulir ke bawah dan memungkinkan mereka kembali ke bagian atas halaman dengan sekali klik.
  
- **Animasi Scroll**:
  - Elemen-elemen muncul dengan efek transisi saat pengguna menggulir halaman.
  
- **Smooth Scrolling**:
  - Navigasi antar bagian halaman dilakukan dengan efek gulir yang halus.
  
- **Validasi Form Kontak**:
  - Memastikan bahwa pengguna mengisi formulir dengan format yang benar sebelum dapat mengirim pesan.

### d. Teknologi yang Digunakan
- **Frontend**: HTML, CSS, JavaScript
- **Library**: Font Awesome untuk ikon, Google Maps API untuk menampilkan lokasi
- **Framework**: Tidak menggunakan framework, hanya menggunakan JavaScript vanilla

## 2. Struktur Folder dan File
```
/Data Diri
│── index.html            # Halaman utama
│── portofolio.html       # Halaman portofolio
│── kontak.html           # Halaman kontak
│── css/
│   ├── style.css         # File utama CSS untuk styling
│── js/
│   ├── scrip.js          # File utama JavaScript untuk interaksi website
│── Image/
│   ├── logo-title.png    # Logo website
│   ├── Foto_diriku.png   # Foto pemilik
│   ├── E-commers.png     # Gambar proyek e-commerce
│   ├── Donasi_onelen.png # Gambar proyek donasi online
|   ├── Herobcg.png       # Gambar bacgroound hero
|   ├── sosial.jpng       # Gambar untuk proyek dummy
│── assets/
│   ├── fonts/           # Folder untuk font tambahan
│          ├── ...
│   ├── css/             # Ikon dari Font Awesome 
│          ├── all.css
│          ├── all.min.css
│          ├── ...
│── README.md            # Dokumentasi proyek
```

---