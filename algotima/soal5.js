const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let Nama = prompt("masukkan nama : ")
let golongan = prompt("masukkan golongan : ")
let jam = Number(prompt(`masukkan jam : `))
let upah;
let gaji;
//pengkondisian pake switch case
switch(golongan){
    case "A":
        upah = 4000;break;
    case "B":
        upah = 5000;break;
    case "C":
    upah = 6000;break;
    case "D":
        upah=7500;break;
    default:console.log("golongan tidak tersedia");}

    if (jam <=48){gaji=jam*upah

    }else{
        gaji = (48 * upah)+(jam - 48)*3000
    }
    console.log(`
        Nama : ${Nama}
        Golongan : ${golongan}
        Total gaji : ${gaji}`)