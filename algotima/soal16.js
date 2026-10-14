const prompt = require(`prompt-sync`)({signit:true})
let belanja = Number(prompt(`masukkan total belanja : `))
let sisa = belanja % 25

if (sisa >= 13){
    belanja = belanja + (25 - sisa)
}
else{
    belanja = belanja-sisa
}
console.log("total setelah diskon : ", belanja)