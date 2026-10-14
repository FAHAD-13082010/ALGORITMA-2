const prompt = require(`prompt-sync`)({signit:true})
let harga = Number(prompt(`masukkan harga : `))
let diskon = Number(prompt(`masukkan diskon : `))

let potongan;
let total;

if (harga > 100000){
    potongan = harga * diskon / 100
    total = harga - potongan
}

else{
    potongan = 0
    total = harga}
console.log (`diskon : ${diskon} %`)
console.log(`harga setelah diskon : ${total} `)
