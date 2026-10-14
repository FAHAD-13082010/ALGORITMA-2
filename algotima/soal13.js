const prompt = require(`prompt-sync`)({signit:true})
let A = Number(prompt(`masukkan nial A : `))
let B = Number(prompt(`masukkan niali B : `))
let C = Number(prompt(`masukkan nilai C : `))

if (A > B){
    A = A + B
    B = A - B
    A = A - B
}
else if (A > C){
    A = A + C
    C = A - C
    A = A - C
}
else if (B > C){
    B = B + C
    C = B - C
    B = B - C
}
console.log("urutan : " , A, B, C)