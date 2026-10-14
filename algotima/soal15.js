const prompt = require(`prompt-sync`)({signit:true})
//proses konversi
let karakter = prompt("masukkan karakter digit : ")
let angka = Number(karakter)
//output
console.log(angka)