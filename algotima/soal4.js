const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let angka = Number(prompt(`masukkan angka : `))
//pengkondisian
if (angka > 0)
    console.log("nilai positif")
else if (angka < 0)
    console.log("nilai negatif")
else
    console.log("nilai Nol")