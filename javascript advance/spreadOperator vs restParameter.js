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

const namah1 = document.querySelector('.iniini');
const huruf = [...namah1.textContent].map(h =>`<span>${h}</span>`).join('');
namah1.innerHTML = huruf;

