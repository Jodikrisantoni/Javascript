// creation phase pada Global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object 
// this = window

////////////////////////////////////////////////////////////
// execution phase
// maka hasilnya var tidak akan di eksekusio karna tidak tereksekusi
// dari atas ke bawah

// kasus 1
// console.log(say());

// var nama = 'jodi';
// var umur = 33;

// function say(){
//     return `halo, nama saya ${nama}, saya ${umur} tahun`;
// };


// function akan membuat local execution context
// yang didalammnya terdapat creation dan execution phase
// bisa akses ke window dan arguments
// terdapat hoisting local
////////////////////////////////////////////////////////////

// kasus 2
// var nama = 'Jodi Kris Antoni';
// var username = 'jody_krisantoni';

// function cetakURL(username){
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + username;

// }

// console.log(cetakURL(username));

////////////////////////////////////////////////////////////
// maka yang tampil aka abc
// namun akan terjadi tumpukkan eksekusi
// kasus 3
// function a(){
//     console.log('ini a');

//     function b(){
//         console.log (' ini b');

//         function c (){
//             console.log('ini c');
//         };
//         c();

//     };
//     b();
// };
// a();

////////////////////////////////////////////////////
//kasus 4 latihan
//

function satu(){
    var nama ='a'
    console.log(nama);
};

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'b';
satu();
dua('c');
console.log(nama);


// maka akan di ditampilkan adalah undifined, a, b, b
/////////////////////////////////////////////////////
