const form = document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("em").value;
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pwd").value;
 
    if (nama === "" || email === "" || pass === "" || username === "") {
        alert("Semua field harus diisi");
        return false;
    }

    // mengambil data yang sudah ada di local storage
    var data = JSON.parse(localStorage.getItem("akun")) || [];

    // menambahkan data baru ke dalam array
    data.push({nama: nama, email: email, password: pass, username: username});

    // menyimpan data ke dalam local storage
    localStorage.setItem("akun", JSON.stringify(data));

    alert("Berhasil Daftar");
    window.location.href = "login.html";
});
