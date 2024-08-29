//arrowFunction
//bentuk lain yang lebih ringkas dari function ekspresion

// const tampilpesan = function(nama){
//     alert ('halo' + nama);
// };
// tampilpesan('jodi');

// menjadi implisit retur, dimana return dan tutup{} tidak digunakan
// const tampilpesan = nama => `'halo' + ${nama}`;
// tampilpesan('jodi');
// kondisi ini bisa digunakan hanya ketika argument nya 1 saja

// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama('erik', 'Malam'));


//contoh lain dengan function map

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })
// console.log(jumlahHuruf);

//menggunakan 
// let mahasiswa = ['jodi', 'kris', 'antoni'];
//attempt 1
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//attempt 2 return object
// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlhuruf: nama.leng}));
// console.table(jumlahHuruf);


//pemahaman konteks this dalam arrow function
//contoh biasa nya
// const mahasiswa = function{
//     this.name = 'jodi';
//     this.umur = 32;
//     this.sayhello = function(){
//         console.log(`hello, nama saya ${this.name}, dengan umur ${this.umur} tahun`);
//     } 
// }

//menggunakan arrow menjadi berikut
// const jodi = new mahasiswa('jodi')
// const mahasiswa = function{
//     this.name = 'jodi';
//     this.umur = 32;
//     this.sayhello = () =>{
//         console.log(`hello, nama saya ${this.name}, dengan umur ${this.umur} tahun`);
//     } 
// }
// const jodi = new mahasiswa('jodi')

//jika menggunakna object literal (ini membuktikan bahwa arrow function tidak memiliki konsep this)
// const mahasiswa1 ={
//     nama: 'jodi',
//     umur: 32,
//     sayhello: () => {
//         console.log(`hello, nama saya ${this.name}, dengan umur ${this.umur} tahun`)
//     }
// }
// const jodi = new mahasiswa1();


//contoh 3 arrow functio this (leksikal maka dia akan mengambil this yang didalam scope)

const mahasiswa = function() {
    this.name = 'jodi';
    this.umur = 32;
    this.sayhello = () =>{
        console.log(`hello, nama saya ${this.name}, dengan umur ${this.umur} tahun`);
    } 

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}
const jodi = new mahasiswa('jodi')

