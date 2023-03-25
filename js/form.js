const tombol = document.getElementById("Submit");
tombol.onclick = (e) => {
  e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("em").value;
    const cb1 = document.getElementById("kr").value;
    const cb2 = document.getElementById("dn").value;
    const cb3 = document.getElementById("gp").value;
    const cn = document.getElementById("nb").value;
    const ta = document.getElementById("ta").value;
    const select = document.getElementById("select").value;

    if (nama === "" || email === "" || cn === "" || ta === "" || select === "") {
      alert("Semua field harus diisi");
      return false;
  }
  var data = JSON.parse(sessionStorage.getItem("dataInput")) || [];
  data.push( {
        nama: nama,
        email: email,
        pembayaran: cb1 || cb2 || cb3,
        nomor: cn,
        info: select,
        note: ta,   
    });
    sessionStorage.setItem("dataInput", JSON.stringify(data));
    alert("Berhasil beli");
    window.location.href = "hasilform.html";

}
