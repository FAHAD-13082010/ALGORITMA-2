const prompt = require(`prompt-sync`)({signit:true})
let BB = Number(prompt(`masukkan berat-badan : `))
let TT = Number(prompt(`masukkan tinggi badan : `))

const ideal = TT - 100

if (BB >= ideal - 2 && BB <= ideal + 2){
    console.log("BB Ideal")
}else{
    console.log("tidak ideal")}