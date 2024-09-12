// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.status === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=b8658a55&s=ironman');
// xhr.send();


// fetch('http://www.omdbapi.com/?apikey=b8658a55&s=ironman')
//  .then(Response => Response.json())
//  .then(Response => console.log(Response));

// promise
// untuk membantu mengurangi callback hell
// adalah sebuah object yang mempresentasikan keberhasilan / kegagaglan sebuah event yang asynchrounus di massa yang akan datang 
// janji (terpenuhi / ingkar)
// promise disebut denga state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) =>{
//     if(ditepati){
//         resolve('janji ditepati');
//     } else {
//         reject ('ingkar janji');
//     }
// });

// janji1
//  .then(Response => console.log('ok :' + Response))
//  .catch(Response => console.log('NOT OK  :' + Response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(()=> {
//             resolve('ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(()=> {
//             resolve('tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// })

// console.log('muali');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//  .finally(() => console.log('selesai menunggu!!'))
//  .then(Response => console.log('ok :' + Response))
//  .catch(Response => console.log('not ok :' + Response))
// console.log('selesai');

// Promise.all()

const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'sandhika Galih',
            pameran: 'iguana, buaya'
        }])
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            kota: 'bandung',
            temp: 26,
            kondisi: 'Cerah berawan'
        }])
    }, 500);
});

// film.then(Response => console.log(Response));
// cuaca.then(Response => console.log(Response));
// jika ingin dijalankan sekaligus semuanya bisa dengan berikut

Promise.all([film,cuaca])
  .then(Response => console.log(Response));
// .then(Response => {
//     const [film, cuaca] = Response;
//     console.log(film);
//     console.log(cuaca);
// });

