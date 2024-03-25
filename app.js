var produk = [
    {
        nama: "Bakso",
        harga: 12000,
        gambar: "Bakso.png"
    },
    {
        nama: "Mie Ayam",
        harga: 8000,
        gambar: "Mie Ayam.png"
    },
    {
        nama: "Nasi Goreng",
        harga: 13000,
        gambar: "Nasgor.png"
    },
    {
        nama: "Klepon",
        harga: 15000,
        gambar: "Ramen.png"
    },
    {
        nama: "Onde-Onde",
        harga: 2500,
        gambar: "OndeOnde.png"
    },
    
];

function updateTotal() {
    var total = 0;
    for (var i = 0; i < produk.length; i++) {
        var idJumlahProduk = "jumlah-produk-" + (i + 1);
        var jumlahProduk = document.getElementById(idJumlahProduk).value;
        total += produk[i].harga * jumlahProduk;
    }
    document.getElementById("total-harga").innerHTML = "Rp " + total;
}
function checkout() {

    alert("Proses checkout sedang berlangsung...");

    window.location.href = "order.html";
}

function generateListJual() {
    var listJual = "";
    for (var i = 0; i < produk.length; i++) {
        var idJumlahProduk = "jumlah-produk-" + (i + 1);
        listJual += `
            <li>
                <div class="produk">
                    <img src="${produk[i].gambar}" alt="${produk[i].nama}">
                    <h4>${produk[i].nama}</h4>
                    <p>Rp ${produk[i].harga}</p>
                </div>
                <div class="jumlah">
                    <input type="number" id="${idJumlahProduk}" value="0" min="0" onchange="updateTotal()">
                </div>
            </li>
        `;
    }
    document.querySelector(".list-jual").innerHTML = listJual;
}

generateListJual();
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email === "satria@gmail.com" && password === "maospati") {
      alert("Login berhasil!");
      return true;
    } else {
      alert("Email atau password salah!");
      return false;
    }
  }