const prompt = require(`prompt-sync`)({signit:true})

let nilai = Number(prompt(`masukkan nilai : `))

if (nilai > 255 ){
    nilai = 255
}
else if (nilai < 0){
    nilai = 0
}
console.log("Hasil clipping", nilai)