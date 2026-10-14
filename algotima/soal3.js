const prompt = require(`prompt-sync`)({signit:true})
//meminta inputan dari pengguna
let tahun =Number(prompt(`masukkan tahun : `))
//pengkondisian
if(tahun % 4 == 0){
    console.log(tahun + "tahun kabisat")
}
else{
    console.log("bukan tahun kabisat karna tidak habis di bagi 4")
}