
// const tombol = document.getElementById("Submit")
// tombol.onclick = login;
// function login(e){
//   e.preventDefault();
//   const email = document.getElementById("em").value;
//   const password = document.getElementById("pwd").value;

//   	if (email == "" || password == "") {
// 		alert("email dan password harus diisi");
// 		return false;
// 	}

//   // ngambil nilai array dari localstorage
//   const akun = JSON.parse(localStorage.getItem("akun"));

//   //Periksa apakah array akun ada dan tidak kosong
//   if (akun && akun.length) {
//     // Melakukan perulangan pada array 
//     for (let i = 0; i < akun.length; i++) {
//       if (email == akun[i].email && password == akun[i].password) {
//         window.location.href="beranda.html";
//         alert("berhasil");
//         return; 
//       }else {
// 		alert("email atau password salah");
// 		return false;
// 			}
//     }
//   }}
  
  // LOGIN
const login = document.getElementById("Submit");
login.onclick = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("pwd").value;

  if (username === "" || password === "") {
    alert("Semua field harus diisi");
    return false;
  }

  // ngambil nilai array dari localstorage
  const akun = JSON.parse(localStorage.getItem("akun"));

  //Periksa apakah array akun ada dan tidak kosong
  if (akun && akun.length) {
    // Melakukan perulangan pada array
    for (let i = 0; i < akun.length; i++) {
      if (username == akun[i].username && password == akun[i].password) {
        window.location.href = "beranda.html";
        alert("Selamat Anda Berhasil Login");
        // set username user yg sedang login untuk di tampilkan di halaman berikutnya
        localStorage.setItem("username", username);
        return;
      }
    }
  }
  // jika salah penginputan
  alert("Masukkan username dan Password dengan benar");
  document.getElementById("username").focus();
};