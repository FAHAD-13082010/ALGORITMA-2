const prompt = require(`prompt-sync`)({signit:true})

let TB = Number(prompt(`masukkan total belanja pembeli : `))
let diskon = Number(prompt(`Masukkan diskon : `))

let Diskon = TB * diskon / 100
let total = TB - Diskon

console.log(`diskon : ${Diskon}
    total belanja pembeli : ${total}`)