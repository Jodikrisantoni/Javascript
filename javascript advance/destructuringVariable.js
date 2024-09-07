// Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah -MDN Web Docs

// // Array 
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a); // "satu"
// console.log(b); // "dua"
// console.log(c); // "tiga"

// // Object
// const mhs = {
//     nama : 'jodi',
//     umur : 24,
//     email : 'jody201542@gmail.com'
// };
// const {nama, umur, email} = mhs;
// console.log(nama); // "jodi"
// console.log(umur); //  24
// console.log(email); // "jody201542@gmail.com"


// contoh kasus yang dilakukan
// Destruction Variable / Assignment
// Destruction Array

// const perkenalan = ['halo', 'nama', 'saya', 'jodi'];
// const [salam, satu, dua, nama] = perkenalan;
// // const [salam, , , nama] = perkenalan; //skip items
// console.log(salam);

// jika array const di isikan dengan kosong maka di sebut dengan skipping items
//////////////////////////////////////////////////////

//swap item
// contoh 1
// let a = 1;
// let b  = 2;
// console.log(a);
// console.log(b);
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

//contoh 2
// function coba(){
//     return[1,2];
// }

// const [a, b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);
// kita bisa memiliki index nya ke berapa

// Destructuring Object
// const mhs = {
//     nama : 'jodi',
//     umur : 24,
// }
// const {nama, umur} = mhs; //variabelnya harus sama dengan isi dari mhs
// console.log();

// Assignment tanpa deklarasi object = memiliki hasil yang sama
// ({nama, umur} = {
//     nama : "jodi",
//     umur : 32
// });
// console.log();

// assignment ke variabel baru
// const mhs = {
//     nama : 'jodi',
//     umur : 24,
// }
// const { nama: n, umur: u } = mhs;
// console.log(n); // maka memanggil nya dengan variabel baru didalam nya

// memberikan default value
// const mhs = {
//     nama : 'jodi',
//     umur : 24,
//     email : 'jody201542@gmail.com'
// }
// const {nama, umur, email = 'default@gmail.com'} = mhs;
// console.log(email);
// // defaultnya akan muncul jika dia tidak ada terdaftar sebelumnya

//memberik nilai default dan assignment ke variabel baru
// const mhs = {
//     nama : 'jodi',
//     umur : 24,
//     email : 'jody201542@gmail.com'
// }
// const {nama: n , umur: u, email: e = 'default@gmail.com'} = mhs;
// console.log(u);

// rest parameter
// const mhs = {
//     nama : 'jodi',
//     umur : 24,
//     email : 'jody201542@gmail.com'
// }
// const {nama, ...value} = mhs;
// console.log(value[1]);

//mengambil field pada object setelah dikirim sebagai parameter untuk function
const mhs = {
    id : 123,
    nama : 'jodi',
    umur : 24,
    email : 'jody201542@gmail.com'
}
function getID({id, nama}){  //menangkap satu element dengan tutup kurawal
    return id;
}
console.log(getID(mhs));