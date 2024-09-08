// direprentasikan dengan (...)

// Spread Operator (oprator untuk memecah [expand/unpack] iterables menjadi single element)

// console.log(...mhs);
//bisa digunakan untuk megabungkan 2 array

// const mhs = ['jodi', 'kris', 'antoni'];
// const dosen = ['idi', 'kaka', 'kici'];
// const gabung = [...mhs, ...dosen];
// console.log(gabung);


// mengcopy array
// const mhs = ['jodi', 'kris', 'antoni'];
// const mhsCopy = [...mhs];
// mhsCopy[0] = 'fajar';
// console.log(mhs);

// melakukan pengarray nodelist
// const limhs = document.querySelectorAll('.nama');
// const mhs = [];
// for (let i = 0; i<limhs.length; i ++){
//     mhs.push(limhs[i].textContent);
// };
// console.log(mhs);
// atau 
// const mhs = [...limhs].map(m => m.textContent);
// console.log(mhs);

// const namah1 = document.querySelector('.iniini');
// const huruf = [...namah1.textContent].map(h =>`<span>${h}</span>`).join('');
// namah1.innerHTML = huruf;






// Rest Parameter
// merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
// rest parameter harus berada di akhir
//contoh 1
// function myf(a, ...sisa){
//     // return`a=${a}, sisa=${sisa}`
//     return myf
// };
// console.log(1,2,3,4,5,6);

// contoh 2
// function jumlahAngka(...angka){
//     let total = 0;
//     for(const a of angka){
//         total += a;
//     };
// };
// console.log(jumlahAngka(1,2,3,4,5,6));

// contoh 3
// const kelompok1 =['jodi', 'kris', 'antoni', 'indi', 'toni', 'init'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// contoh 4
// const team = {
//     pm: 'jodi',
//     FrontEnd1: 'kris',
//     FrontEnd2: 'antoni',
//     backend: 'wurni',
//     ux: 'wanra',
//     devOps: 'irwandi'
// }
// const {pm,...myTeam} = team;
// console.log(myTeam);

// contoh 5
function filterBy(type,...values){
    return values.filter( v => typeof v === type);
}
console.log(filterBy('number', 1,2, 'sandhika', false,10,true, 'doddy'));

