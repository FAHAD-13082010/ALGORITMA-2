const prompt = require(`prompt-sync`)({signit:true})

let harga = Number(prompt(`masukkan total belanja : `))
let diskon = Number(prompt(`masukkan diskon : `))

let potongan;
let total;

if(harga > 100000){
    potongan = harga * diskon / 100
    total = harga - potongan
}else{potongan = 0
    total = harga
}
console.log(`Harga : ${harga}
    Diskon : ${diskon} %
    potongan : ${potongan}
    total : ${total}`)