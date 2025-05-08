function update(){
    let nama = document.getElementById("nama").value;
    let gantiNama = document.getElementById("gantiNama");
    gantiNama.innerHTML = nama;
    let bio = document.getElementById("bio").value;
    let gantiBio = document.getElementById("gantiBio");
    gantiBio.innerHTML = bio;
    let gambar = document.getElementById("gambar").value;
    let gantiGambar = document.getElementById("gantiGambar");
    gantiGambar.src = gambar;
}
function reset(){
    document.getElementById("gantiNama").innerHTML = "John Doe";
    document.getElementById("gantiBio").innerHTML = "Web Developer";
    document.getElementById("gantiGambar").src = "Gambar/pict1.jpg";
}