


let body = document.body;
    let mode = document.getElementById("mode");
    let home = document.getElementById("restrat");
    

function darkMode() {
    body.classList.toggle("dark");
    
}


const gambarList = [
    {src: "asset/throwup/gane.jpeg", jawaban: "gane"},
    {src: "asset/throwup/rage.jpeg", jawaban: "rage"},
    {src: "asset/throwup/seen.jpg", jawaban: "seen"},
    {src: "asset/throwup/reloz.jpg", jawaban: "reloz"},
   
];

let index = 0;

function tampilkanGanbar() {
    document.getElementById("tag").src = gambarList[index].src;
    document.getElementById("jawaban").value = "";
    document.getElementById("feedback").textContent = "";

}

function cekJawaban() {
    const input =
    document.getElementById("jawaban").value.toLowerCase( )
    .trim( ); 
    const jawabanBenar = gambarList[index].jawaban;

    if (input === jawabanBenar) {
        document.getElementById("feedback").textContent = "YAPSS BETUL!!";
        index++;
        if (index < gambarList.length) {
            setTimeout(tampilkanGanbar, 1000);
        } else {
            document.getElementById("feedback").textContent = "BERES!! Hebat Ente!, web ini sedang di lakukan PENGEMBANGAN!! Mohon tunggu Untuk update"
        }
    } else {
        document.getElementById("feedback").textContent = "SALAH CUY!!, Coba Lagi!";
    }
}

// function restrat() {
//     if(darkCounter == darkLimited) {
//         info.textContent = "(:jatah fitur darkmode anda habis:)"
//         let darkRemainingLeft = darkLimited - darkCounter;
//         mode.style.display = "none"
//         home.textContent = "RESTRAT"
//         return;
//     }
// }
function rerender() {
    location.reload();
}

window.onload = tampilkanGanbar;

