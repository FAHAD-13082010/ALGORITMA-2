const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let angka = Number(prompt(`masukkan bilangan bilangan :  `))

if (angka > 0)
    console.log("nilai bilangan positif")
else{
    console.log("nilai bilangan negatif")}
if (angka % 4 == 0)
    console.log("kelipatan empat")
else
    console.log("bukan kelipatan empat")