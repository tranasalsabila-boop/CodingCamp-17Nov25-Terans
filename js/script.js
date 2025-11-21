welcomeMessage();

function welcomeMessage(){
let userName=prompt("Masukkan nama Anda:");

if(userName === ''){
    userName = "Guest";
}
document.getElementById("haloText").innerText = "Halo " + userName + ", " + "Selamat Datang di Website Terans Swasembada" + "!";
}

function submitForm(){
    // Mengambil nilai dari form
    let nama = document.getElementById("nama").value;
    let tanggalLahir = document.getElementById("tanggalLahir").value;
    let genderElements = document.getElementsByName("gender");
    let pesan = document.getElementById("pesan").value;
}                          