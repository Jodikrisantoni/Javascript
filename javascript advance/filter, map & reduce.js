// Array.prototype.map (membuat element baru)
// Array.prototype.filter
// Array.prototype.reduce (menyatukan element menghasilkan array baru)

const angka =[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const angka3 = [];

// for(let i=0; i < angka.length; i++) {
//     if (angka[i] >= 3){
//         angka3.push(angka[i]);
//     };
// };
// console.log(angka3);

//contoh filter
const angka3 = angka.filter(function(a){
    return a >= 3;
})
console.log(angka3);

// contoh map 
const angkakali = angka.map(a => a * 2)
confirm.log(angkakali);

// contoh reduce 
const angkareduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(angkareduce);


//method chaining
// cari angka > 5, dan dikalikan 3, jumlahkan

const result = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((x,b) => x + b);

    console.log(result);



