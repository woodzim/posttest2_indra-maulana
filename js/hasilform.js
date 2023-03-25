const data = JSON.parse(sessionStorage.getItem("dataInput"));
		document.getElementById("nama").innerHTML = data[0].nama;
		document.getElementById("email").innerHTML = data[0].email;
		document.getElementById("pm").innerHTML = data[0].pembayaran;
        document.getElementById("cn").innerHTML = data[0].nomor;
        document.getElementById("info").innerHTML = data[0].info;
        document.getElementById("note").innerHTML = data[0].note;
