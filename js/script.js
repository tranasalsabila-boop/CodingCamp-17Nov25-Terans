welcomeMessage();

function welcomeMessage(){
let userName=prompt("Masukkan nama Anda:");

if(userName === ''){
    userName = "Guest";
}
document.getElementById("haloText").innerText = "Halo " + userName + ", " + "Selamat Datang di Website Terans Swasembada" + "!";
}

document.getElementById("btnSubmit").addEventListener("click", function(){

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value || "Belum dipilih";
    const pesan = document.getElementById("Pesan").value;

    const output = `
        <h3>Hasil Pesan Kamu</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${date}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    const box = document.getElementById("outputMessage");
    box.innerHTML = output;
    box.style.display = "block";
});

