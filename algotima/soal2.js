const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let jam = Number(prompt(`masukkan jam : `))
let gaji;
//gaji normal
if ( jam <= 48){gaji = jam * 2000}
//gaji lembur
else {gaji = (48 * 2000)+(jam - 48) * 3000}
console.log ("Total gaji : " + gaji)