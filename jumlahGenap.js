//Fungsi 1
const bilInt = (bil) => {
    let arrayBil = [];
    for (let i=0;i<=bil;i++){
        arrayBil.push(i);
    }
    return arrayBil;
}

//Fungsi 2
const jumlahGenap = (arrayBil) => {
    let jumlah = 0;
    arrayBil.forEach((bil) => {
        if (bil % 2===0) {
            jumlah += bil;
        }        
    })
    return jumlah; ;
};

//Panggil Fungsi
const jumlah = (bil) => {
    const array = bilInt(bil);
    return jumlahGenap(array);
}

const hasil = () => {
    const hasilJumlah = document.getElementById("hasilJumlah");
    const bil = parseInt(document.getElementById("bilangan").value);
    const sum = jumlah(bil);
    const arr = bilInt(bil);
    hasilJumlah.textContent = `Hasil Penjumlahan Bilangan Genap dari array ${arr} = ${sum}`
    console.log(`Jumlah bilangan genap adalah ${sum} dari array ${arr}`)
}

//masukin array masih manual di ()
console.log("Pengecekan fungsi array")
console.log(jumlah(4));
console.log(jumlah(10));
console.log(jumlah(3));
console.log(jumlah());
console.log(jumlah('x'));
console.log(jumlah(undefined));
