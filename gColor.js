let kotak = document.querySelector(".container");
function ganti(){
    let a = Math.floor(Math.random() * 3);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let warna2 = "rgb("+r+","+g+","+b+")";
    kotak.style.backgroundColor = warna2;
    document.querySelector(".hasil").innerHTML= warna2
}