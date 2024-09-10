// function yang dieksekusi setelah function lainnya dijalankan, 

// callBack
// Synchronous CallBack
// function halo(nama){
//     alert(`halo, ${nama}`);
// }
// function tampilkanPesan(callback){
//     const nama = prompt(`masukan nama : `);
// }
// tampilkanPesan(halo);


// const mhs = [
//     {
//         nama: 'jodi',
//         nim: 'b1301201135',
//         email: 'jody222@gmail.com',
//         jurusan: 'akuntansi',
//         idDosenWall: '1'
//     },
//     {
//         nama: 'kris',
//         nim: 'b1301201136',
//         email: 'kris222@gmail.com',
//         jurusan: 'akuntansi',
//         idDosenWall: '2'
//     },
//     {
//         nama: 'antoni',
//         nim: 'b1301201137',
//         email: 'antoni222@gmail.com',
//         jurusan: 'akuntansi',
//         idDosenWall: '1'
//     }
// ];
// console.log('mulai');
// mhs.forEach( m => {
//     for (let i = 0; i<100000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log('selesai');




// Asynchronous CallBack

function getDataMahasiswa(url, succes, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                succes(xhr.response);
            }else if (xhr.status === 404){
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send()
};

getDataMahasiswa('mahasiswa.json', (result)=>{
    const mhs = JSON.parse(result);
    mhs.forEach(m => console.log(m.mhs));
},()=>{})
