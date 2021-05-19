// import axios from "axios";

// import {config} from "../config";

// get data quiz dummy
import Image1 from "assets/icon/Untitled.png";
import Image2 from "assets/icon/Untitled1.png";
import S1 from "assets/icon/soal gambar/s1.png";
import J1A from "assets/icon/soal gambar/j1a.png";
import J1B from "assets/icon/soal gambar/j1b.png";
import J1C from "assets/icon/soal gambar/j1c.png";
import J1D from "assets/icon/soal gambar/j1d.png";
import S2 from "assets/icon/soal gambar/s2.png";
import J2A from "assets/icon/soal gambar/j2a.png";
import J2B from "assets/icon/soal gambar/j2b.png";
import J2C from "assets/icon/soal gambar/j2c.png";
import J2D from "assets/icon/soal gambar/j2d.png";
export const quizData = [
  {
    id: 1,
    quistion:
      "Ini adalah contoh jenis pertanyaan Benar / Salah. Gambar ini mewakili rilis Moodle 2.1. Benar atau salah?",
    img: Image1,
    option: [
      { id: 1, title: "Benar", corret: true },
      { id: 2, title: "Salah", corret: false },
    ],
  },
  {
    id: 2,
    quistion:
      "Ini adalah contoh jenis pertanyaan yang cocok. Cocokkan fitur Moodle dengan versi yang dimilikinya:",
    // img: Image1,
    option: [{ id: 1, title: "Submit", corret: true }],
    pilihan: [
      {
        title: "Pemilih Aktivitas baru telah ditambahkan",
        option: ["Moodle v1", "Moodle v1", "Moodle v1"],
      },
      {
        title:
          "H5P pertama kali ditambahkan sebagai standar (dengan fungsionalitas terbatas) di",
        option: ["Moodle v1", "Moodle v1", "Moodle v1"],
      },
      {
        title: "Penilaian forum diterapkan di",
        option: ["Moodle v1", "Moodle v1", "Moodle v1"],
      },
      {
        title: "Tombol Unduh konten kursus pertama kali muncul di",
        option: ["Moodle v1", "Moodle v1", "Moodle v1"],
      },
      {
        title:
          "Menambahkan suara dan video di editor Atto pertama kali ditambahkan",
        option: ["Moodle v1", "Moodle v1", "Moodle v1"],
      },
    ],
  },
  {
    id: 3,
    quistion:
      "Ini adalah contoh pertanyaan yang dihitung. Jumlahnya akan bervariasi tetapi rumusnya tetap sama. Anda sedang melakukan beberapa pelatihan di organisasi Anda. Dalam grup Anda, Anda memiliki 3 pemula lengkap dan 16 pengguna Moodle yang relatif berpengalaman. Ada berapa total dalam grup Anda?",
    // img: Image1,
    option: [{ id: 1, title: "Submit", corret: true }],
    esai: [{ title: "Masukan jawaban esai disini" }],
  },
  {
    id: 4,
    quistion:
      "Ini adalah contoh pertanyaan pilihan ganda yang dihitung. Ini seperti pertanyaan yang dihitung di mana angka yang digunakan dapat bervariasi dengan setiap siswa dan pertanyaan, tetapi persamaannya tetap sama tetapi berbeda dari pertanyaan yang dihitung karena ada pilihan jawaban yang tersedia.Anda membuat spanduk untuk pertemuan Kelompok Pengguna Moodle organisasi Anda. Panjangnya 11 dan tingginya 4 Berapakah luasnya?",
    // img: Image1,
    option: [
      { id: 1, title: "a. 18", corret: true },
      { id: 2, title: "b. 8", corret: false },
      { id: 2, title: "c. 65", corret: false },
    ],
  },
  {
    id: 5,
    quistion:
      "Ini adalah contoh pertanyaan terhitung sederhana. Ini mirip dengan pertanyaan yang dihitung tetapi dengan pengaturan yang lebih sedikittersenyum Anda memenangkan kotak pendingin Moodle yang keren di Moodle Moot dan bertanya-tanya berapa banyak yang akan disimpannya. Berapa volume kotak pendingin Anda jika tingginya 9.3, panjangnya 3.9, dan lebarnya 1.2?",
    // img: Image1,
    option: [{ id: 1, title: "submit", corret: true }],
    esai: [{ title: "Masukan jawaban esai disini" }],
  },
  {
    id: 6,
    quistion:
      "Ini adalah contoh pertanyaan jawaban singkat.Pada bulan apa dalam tahun 2020 Moodle 3.10 dirilis? Tulis jawaban Anda dalam satu kata, misalnya Agustus. (Ngomong-ngomong, Agustus bukanlah jawaban yang benar!)",
    // img: Image1,
    option: [{ id: 1, title: "submit", corret: true }],
    esai: [{ title: "Masukan jawaban esai disini" }],
  },
  {
    id: 7,
    quistion:
      "Ini adalah contoh pertanyaan numerik sederhana.Kapan mojitos menjadi minuman resmi Moodle Moot?",
    img: Image2,
    option: [{ id: 1, title: "submit", corret: true }],
    esai: [{ title: "Masukan jawaban esai disini" }],
  },
  {
    id: 8,
    quistion:
      "Ini adalah contoh pertanyaan pilihan ganda dengan hanya satu jawaban.Kapan Moodle 3.0 dirilis?",
    // img: Image1,
    option: [
      { id: 1, title: "a. November 2015", corret: true },
      { id: 2, title: "b. November 2020", corret: false },
      { id: 2, title: "c. Mei 2020", corret: false },
    ],
  },
  {
    id: 9,
    quistion:
      "Ini adalah contoh pertanyaan pilihan ganda dimana terdapat lebih dari satu jawaban yang benar.Beberapa dari pernyataan ini benar. Pilih salah satu yang benar.",
    // img: Image1,
    checkbox: [
      "a. Sebuah.Kata Moodle adalah merek dagang terdaftar.",
      "b. Mount Orange dan Sandbox adalah dua lokasi demonstrasi",
      "c. Kursus Moodle pertama disebut Ringkasan Internet",
      "d. Modul kontribusi pertama adalah modul Kuis pada tahun 2003.",
      "e. Global MoodleMoot pertama kali diadakan di Perth, Australia, pada November 2018",
      "f. Dokumentasi Moodle ada di Domain Publik",
    ],
    option: [{ id: 1, title: "Submit", corret: true }],
  },
  {
    id: 10,
    quistion: "Contoh soal dimensi tiga",
    image_desc:
      "Jika gambar diatas diputar, manakah gambar di bawah ini yang identik dengan gambar sola dibawah. ",
    img: S1,
    option: [
      { id: 1, title: "A", image: J1A, corret: true },
      { id: 2, title: "B", image: J1B, corret: false },
      { id: 2, title: "C", image: J1C, corret: false },
      { id: 2, title: "D", image: J1D, corret: false },
    ],
  },
  {
    id: 11,
    quistion: "Contoh soal dimensi tiga",
    image_desc:
      "Jika gambar diatas diputar, manakah gambar di bawah ini yang identik dengan gambar sola dibawah. ",
    img: S2,
    option: [
      { id: 1, title: "A", image: J2A, corret: true },
      { id: 2, title: "B", image: J2B, corret: false },
      { id: 2, title: "C", image: J2C, corret: false },
      { id: 2, title: "D", image: J2D, corret: false },
    ],
  },
  {
    id: 12,
    titleVerbal: "Contoh soal verbal analogi",
    quistion: "TANGAN : TUBUH = DAHAN : .....",
    option: [
      { id: 1, title: "A. Pohon", corret: true },
      { id: 2, title: "B. Rindang", corret: false },
      { id: 3, title: "C. Tangaki", corret: false },
      { id: 4, title: "D. Daun", corret: false },
      { id: 5, title: "D. Batang", corret: false },
    ],
  },
  {
    id: 13,
    titleVerbal: "Contoh soal verbal analogi",
    quistion: "GENTENG : RUMAH = BENANG : .....",
    option: [
      { id: 1, title: "A. Sutra", corret: true },
      { id: 2, title: "B. Ulat", corret: false },
      { id: 3, title: "C. Kapas", corret: false },
      { id: 4, title: "D. Jahit", corret: false },
      { id: 5, title: "D. Pakaian", corret: false },
    ],
  },
  // {
  //   id: 2,
  //   quistion:
  //     "Ini adalah contoh jenis pertanyaan yang cocok. Cocokkan fitur Moodle dengan versi yang dimilikinya:",
  //   option: [
  //     {
  //       title: "Tombol Unduh konten kursus pertama kali muncul di ",
  //       option: [
  //         {
  //           title: "Moddle v1",
  //           corret: true,
  //         },
  //         {
  //           title: "Moddle v2",
  //           corret: false,
  //         },
  //         {
  //           title: "Moddle v3",
  //           corret: false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Penilaian forum diterapkan di",
  //       option: [
  //         {
  //           title: "Moddle v1",
  //           corret: true,
  //         },
  //         {
  //           title: "Moddle v2",
  //           corret: false,
  //         },
  //         {
  //           title: "Moddle v3",
  //           corret: false,
  //         },
  //       ],
  //     },
  //   ],
  // },
  //   {
  //     id: 3,
  //     quistion:
  //       "Ini adalah contoh pertanyaan yang dihitung. Jumlahnya akan bervariasi tetapi rumusnya tetap sama. Anda sedang melakukan beberapa pelatihan di organisasi Anda. Dalam grup Anda, Anda memiliki 2 pemula lengkap dan 15 pengguna Moodle yang relatif berpengalaman. Ada berapa total dalam grup Anda?",
  //     img: Image1,
  //     option: [{ corret: 17 }],
  //   },
  //   {
  //     id: 4,
  //     quistion:
  //       "Ini adalah contoh pertanyaan pilihan ganda yang dihitung. Ini seperti pertanyaan yang dihitung di mana angka yang digunakan dapat bervariasi dengan setiap siswa dan pertanyaan, tetapi persamaannya tetap sama tetapi berbeda dari pertanyaan yang dihitung karena ada pilihan jawaban yang tersedia.Anda membuat spanduk untuk pertemuan Kelompok Pengguna Moodle organisasi Anda. Panjangnya 17 dan tingginya 6 Berapakah luasnya?",
  //     img: Image1,
  //     option: [
  //       { title: "a. Sebuah.102", corret: true },
  //       { title: "b. 23", corret: false },
  //       { title: "c. 11", corret: false },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     quistion:
  //       "Ini adalah contoh pertanyaan terhitung sederhana. Ini mirip dengan pertanyaan yang dihitung tetapi dengan pengaturan yang lebih sedikit tersenyum Anda memenangkan kotak pendingin Moodle yang keren di Moodle Moot dan bertanya-tanya berapa banyak yang akan disimpannya. Berapa volume kotak pendingin Anda jika tingginya 9,2 panjangnya 7,6 dan lebarnya 6,7?",
  //     img: Image1,
  //     option: [{ corret: 468 }],
  //   },
  //   {
  //     id: 6,
  //     quistion:
  //       "Ini adalah contoh pertanyaan jawaban singkat.Pada bulan apa dalam tahun 2020 Moodle 3.10 dirilis? Tulis jawaban Anda dalam satu kata, misalnya Agustus. (Ngomong-ngomong, Agustus bukanlah jawaban yang benar!)",
  //     img: Image1,
  //     option: [{ corret: "November" }],
  //   },
  //   {
  //     id: 7,
  //     quistion:
  //       "Ini adalah contoh pertanyaan numerik sederhana.Kapan mojitos menjadi minuman resmi Moodle Moot?",
  //     img: Image1,
  //     option: [{ corret: 2006 }],
  //   },
  //   {
  //     id: 8,
  //     quistion:
  //       "Ini adalah contoh pertanyaan pilihan ganda dengan hanya satu jawaban.Kapan Moodle 3.0 dirilis?",
  //     img: Image1,
  //     option: [
  //       { title: "a. Mei 2020", corret: true },
  //       { title: "b. November 2020", corret: false },
  //       { title: "c. November 2015", corret: false },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     quistion:
  //       "Ini adalah contoh pertanyaan pilihan ganda dimana terdapat lebih dari satu jawaban yang benar.Beberapa dari pernyataan ini benar. Pilih salah satu yang benar.",
  //     img: Image1,
  //     option: [
  //       {
  //         title: "a. Modul kontribusi pertama adalah modul Kuis pada tahun 2003.",
  //         corret: true,
  //       },
  //       { title: "b. Kata Moodle adalah merek dagang terdaftar.", corret: true },
  //       {
  //         title:
  //           "c. Kursus Moodle pertama disebut Ringkasan Internet, corret: false ",
  //         corret: false,
  //       },
  //       { title: "d. Dokumentasi Moodle ada di Domain Publik", corret: false },
  //       {
  //         title:
  //           "e. Global MoodleMoot pertama kali diadakan di Perth, Australia, pada November 2018",
  //         corret: false,
  //       },
  //       {
  //         title: "f. Mount Orange dan Sandbox adalah dua lokasi demonstrasi",
  //         corret: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     quistion:
  //       "Ini adalah contoh pertanyaan tipe jawaban (Cloze) yang disematkan. Ini adalah pertanyaan pilihan ganda tetapi ada jenis lain yang dapat Anda gunakan juga.",
  //     img: Image1,
  //     option: [
  //       {
  //         title: "Pemilih Aktivitas baru telah ditambahkan",
  //         option: [
  //           {
  //             title: "Moddle v1",
  //             corret: true,
  //           },
  //           {
  //             title: "Moddle v2",
  //             corret: false,
  //           },
  //           {
  //             title: "Moddle v3",
  //             corret: false,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     quistion:
  //       "Ini adalah contoh jenis pertanyaan pencocokan jawaban singkat acak, yang diambil dari pertanyaan jawaban singkat di bank soal Ini adalah contoh pertanyaan jawaban singkat.",
  //     option: [
  //       {
  //         title:
  //           "Pada bulan apa dalam tahun 2020 Moodle 3.10 dirilis? Tulis jawaban Anda dalam satu kata, misalnya Agustus. (Ngomong-ngomong, Agustus bukanlah jawaban yang benar!)",
  //         option: [
  //           {
  //             title: "Moddle v1",
  //             corret: true,
  //           },
  //           {
  //             title: "Moddle v2",
  //             corret: false,
  //           },
  //           {
  //             title: "Moddle v3",
  //             corret: false,
  //           },
  //         ],
  //       },
  //       {
  //         title: "i kota manakah di Australia terletak Moodle HQ? ",
  //         option: [
  //           {
  //             title: "Moddle v1",
  //             corret: true,
  //           },
  //           {
  //             title: "Moddle v2",
  //             corret: false,
  //           },
  //           {
  //             title: "Moddle v3",
  //             corret: false,
  //           },
  //         ],
  //       },
  //     ],
  //   },
];

// jawaban esai belum ada complication logic
