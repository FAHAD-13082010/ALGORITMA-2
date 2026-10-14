const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let x = Number(prompt(`masukkan nilai x : `))
let y = Number(prompt(`masukkan nilai y : `))
//pengkondisian
if(x > 0 && y > 0)
    console.log("P terletak di kuadran I")
else if(x < 0 && y > 0)
    console.log("P terletak di kuadran II")
else if(x < 0 && y < 0)
    console.log("P berada di hidran III")
else if(x > 0 && y < 0)
    console.log("P berada di hidran IV")
else
    console.log("P tidak terletak di hidran manapun")