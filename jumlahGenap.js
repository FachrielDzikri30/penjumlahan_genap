//Fungsi 1
const bilangan = (bil) => {
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
    const array = bilangan(bil);
    return jumlahGenap(array);
}

let hasil = () => {
    jumlah(bil);
}

//masukin array masih manual di ()
console.log(jumlah(15));
console.log(jumlah(10));
console.log(jumlah(3));
console.log(jumlah());
console.log(jumlah('x'));
console.log(jumlah(undefined));

