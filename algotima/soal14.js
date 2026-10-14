const prompt = require(`prompt-sync`)({signit:true});

let a = Number(prompt(`masukkan nilai a : `))
let b = Number(prompt(`masukkan nilai b : `))
let c = Number(prompt(`masukkan nilai c : `))

if (a * a + b * b == c * c)
console.log("siku-siku")

else if (a * a + b * b > c * c)
    console.log("lancip")
else
    console.log("tumpul")