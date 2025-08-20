# BelajarLinkedIn Landing Page

Landing page promosi kelas "Mastering LinkedIn for Career Growth". Fokus pada struktur semantik, aksesibilitas dasar, dan layout responsif (desktop → mobile) dengan HTML, CSS, dan JavaScript sederhana (tanpa framework).

## 🔧 Tools / Teknologi

- HTML5 (semantic structure: header, main, section, footer)
- CSS3 (custom properties, grid & flexbox, responsive breakpoints, gradient styling)
- Vanilla JavaScript (hamburger menu toggle + accessibility states)
- Google Fonts (Poppins)
- SVG inline (ikon sosial)

## 🚀 Live Demo

Letakkan URL deployment Anda di sini setelah di‑hosting (misal GitHub Pages / Netlify / Vercel):

`https://contoh-domain.com` _(ganti setelah deploy)_

### Cara cepat deploy (opsional)

1. GitHub Pages: push repo → Settings → Pages → pilih branch `main` / `docs` → simpan.
2. Netlify: drag & drop folder project ke https://app.netlify.com/drop atau hubungkan repo.
3. Vercel: import repo → deploy otomatis.

## 💻 Cara Menjalankan di Lokal

Metode paling sederhana (hanya file statis):

1. Clone / salin project
   ```bash
   git clone <repo-url>
   cd BelajarLinkedIn - Test
   ```
2. Buka file `index.html` langsung di browser (double click) — sudah bisa jalan.
3. (Direkomendasikan) Jalankan via server lokal agar path & caching konsisten:
   - VS Code: Install extension "Live Server" → klik "Go Live".
   - Atau pakai Python (jika terpasang):
     ```bash
     python -m http.server 5500
     ```
     Lalu buka: http://localhost:5500

## 📂 Struktur Folder

```
index.html
styles/
	style.css
scripts/
	main.js
assets/
	images/ (Logo.png, Hero.png, Tentang.png, ...)
```

## 🧠 Fitur Utama

- Navbar fixed + hamburger menu (auto close saat klik luar / ESC / resize)
- Section: Hero, Tentang, Manfaat, Testimoni, CTA, Footer
- Responsif: breakpoint utama 991px, 700px, 600px, 480px
- Aksesibilitas dasar: skip link, aria-label, role & aria-expanded pada menu
- Fokus pada kinerja ringan (tanpa library tambahan)

## 📄 Lisensi

Silakan gunakan / modifikasi untuk pembelajaran atau proyek pribadi. Tambahkan lisensi spesifik jika diperlukan (MIT, dsb).

---

Jika butuh bantuan lanjutan (deploy, optimasi, atau tambah fitur), tinggal minta saja. Selamat berkarya!
