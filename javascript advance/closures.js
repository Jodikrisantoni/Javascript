//closures
//closure merupakan kombinasi antara function dan lingkungan leksikal(lexical scope) di dalam function tersebut
//closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selsai dieksekusi 
//closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat iaa diciptakan
//closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain 


// function init(){
//     let nama = 'jodi'; // local variabel
//     function tampilNama(){ // inner function (closure*)
//         console.log(nama); // akses ke parent variabel
//     };
//     tampilNama();
// };
// init();


// closure yang ada
// function init(){
//     let nama = 'jodi';
//     let umur = 24; 
//     function tampilNama(){ 
//         console.log(nama);
//         console.log(umur); 
//     };
//     console.dir(tampilNama);
// };
// init();


// function init(){
//     // let nama = 'jodi'; 
//     return function(nama){
//         console.log(nama);
//     };
// };
// let panggilnama = init();
// panggilnama('jodi');
// panggilnama('kris');


//mengapa menggunakan closure, untuk membuat function factory, dan untuk membuat private method


//cara membuat function factory

function ucapkanSalam(waktu){
    return function(nama) {
        console.log(`halo ${nama}, selamat ${waktu}, semoga harimu indah.`);
    };
};
let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatMalam('jodi');
//console.dir(selamat Malam);  //untuk melihat jalannya

//contoh lain
let counter = 0;
let add = function(){
    return function(){
        return ++counter;
    };
};
let a = add()

console.log(a());
console.log(a());
console.log(a());