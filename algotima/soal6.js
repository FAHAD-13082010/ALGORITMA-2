const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let number = Number(prompt(`masukkan angka : `))
//pengkondisian
if (number == 1)
    console.log("satu")
else if (number == 2)
    console.log("dua")
else if (number == 3)
    console.log("tiga")
else if (number == 4)
    console.log("empat")
else
    console.log("angka yang dimasukkan salah")