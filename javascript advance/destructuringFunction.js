//destructuring Function 
 
// contoh
// function kalkulasi(a, b){
//     return[a + b, a- b, a * b,];
// }

// const jumlah = kalkulasi(2, 3)[0];
// console.log(jumlah);
// maka tidak terlalu efisien untuk menentukan indeksnya dibelakang

// maka gunakan cara berikut
// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// atau dibuat dengan lebih lengkap
// dengan cara berikut
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3); // bisa diberikan nilai default value jika bagi nya tidak ada
// urutan penamaan dalam ini sangat berpengaruh, karna tambah tidak bisa langsung mendefinisikan tambah namun tambah akan menunjuk ke indeks yang sesuai urutannya 
// console.log(bagi);

// jika kalian ini urutan tidak berpengaruh maka
// bisa sebagai berikut
// function kalkulasi(a, b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// };
// // karna objek kita menggunakan tutup kurawal
// // karna dia objek maka tidak apa juga di acak untuk objek yang kita inginkan
// const {kali, tambah, bagi, kurang} = kalkulasi(2, 3);
// console.log(kurang);


// Destructuring Function Argument

const mhs1 = {
    nama: 'jodi',
    umur: 33,
    email: 'jody201545@gmail.com'
    nilai: {
        tugas : 80,
        uts : 85,
        uas : 75
    }
};
 

// function cetakmhs(nama, umur) {
//     return `halo, nama saya ${nama}, saya berumur ${umur} tahun`
// };
// console.log(cetakmhs(mhs1.nama, mhs1.umur));
// diatas tidak menggunakan destructuring

function cetakmhs({nama, umur, nilai:{tugas, uts, uas}}) {
    return `halo, nama saya ${nama}, saya berumur ${umur} tahun, nilai uas ${uas}`
};
console.log(cetakmhs(mhs1));