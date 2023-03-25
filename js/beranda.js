
//   const nama = localStorage.getItem("nama");

//   // tampilkan nama pada elemen dengan id "greeting"
//   document.getElementById("greeting").textContent += " " + nama;

// let akun = localStorage.getItem("nama");
// 		document.getElementById("nm").innerHTML = akun;

const loc_nama = localStorage.getItem("username");
tampil = document.querySelector(".result");
tampil.innerHTML = loc_nama;

// const akun = JSON.parse(localStorage.getItem("nama"));
// const elemenTampilan = document.getElementById("result");
// elemenTampilan.innerHTML = akun["nama"];

// // ambil data users
// const users = localStorage.getItem("nama_login");

// // auto typing
// const typed = document.querySelector(".result");
// if (typed) {
//   let typed_strings = akun;
//   typed_strings = typed_strings.split(",");
//   new Typed(".result", {
//     strings: typed_strings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 75,
//   });
// }