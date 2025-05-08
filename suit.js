let nanya = prompt("Silahkan Masukan Angka Pilihan anda: (Angka 1-9)")
let a = Math.ceil(Math.random()*9);

document.querySelector(".gambar1").src = "Gambar/"+nanya+".jpg";
document.querySelector(".gambar2").src = "Gambar/"+a+".jpg";

if (nanya > a){
    menang = "Player Win"
} else if (nanya < a){
    menang = "Player Lose"
} else{
    menang = "DRAW"
}
document.querySelector(".hasil").innerHTML = menang;
