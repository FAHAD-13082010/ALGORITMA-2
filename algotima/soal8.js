const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let waktu = prompt(`masukkan waktu : `)
let data = waktu.split(":");

let jam = parseInt(data[0]);
let menit = parseInt(data[1]);
let detik = parseInt(data[2]);

detik = detik + 1

if (detik == 60){
    detik = 0
    detik = detik + 1
}
else if (menit == 60){
    menit = 0
    menit = menit + 1
}
else if (jam == 24){
    jam = 0
}

console.log(jam + ":" + menit + ":" + detik + ":")