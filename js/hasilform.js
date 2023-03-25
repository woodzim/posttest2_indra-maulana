const data = JSON.parse(sessionStorage.getItem("dataInput"));
		document.getElementById("nama").innerHTML = data.nama;
		document.getElementById("email").innerHTML = data.email;
		document.getElementById("pm").innerHTML = data.pembayaran;
        document.getElementById("cn").innerHTML = data.nomor;
        document.getElementById("info").innerHTML = data.info;
        document.getElementById("note").innerHTML = data.note;