const prompt = require(`prompt-sync`)({signit:true})

let bulan = Number(prompt(`masukkan nomor bulan : `))
let tahun = Number(prompt(`masukkan tahun : `))

if (bulan == 2){
    if (bulan % 4 == 0)
        console.log("jumlah hari ada 29")
    else
        console.log("jumlah hari ada 28")
}
else if (bulan == 4 || 6 || 9 || 11)
    console.log("jumlah hari ada 30")
else
    console.log("jumlah hari ada 31")