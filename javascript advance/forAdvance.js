// for... of VS for... in

// for... of (creates a loop iterating over iterable Object)
// string, array, argument/nodelist, typedArray, map, set, user-defined iterables

// array looping
const mhs = ['jodi', 'kris', 'antoni'];

// for(let i=0; i<mhs.length; i++){   //[contoh 1]
//     console.log(mhs[0]);
// }

// mhs.forEach(m => console.log(m));  //[contoh 2]

// for(const m of mhs){               //[contoh for of]
//     console.log(m);
// }

// string looping
// const nama ='jodi';                   //maka akan melooping setiap karakter di string
// for (const n of nama){
//     console.log(n);
// }

// for (const [i, m] of mhs.entries()){  //[contoh 2]
//     console.log(`${m} siswa ke ${i}`);
// }

// modeList
// const li = document.querySelectorAll('.nama');
// // li.forEach(n => console.log(n.innerHTML));
// // atau 
// for (n of li) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka(){
//     let jumlah = 0;
//     for(a of jumlahkanAngka){
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1,2,3,4,5));


// for... in (creates a loop only iterating over enumerable[maksudnya property pada objek])
 
const mahasiswa = {
    nama : 'jodi',
    umur : 24,
    email : 'jody201542@gmail.com'
};
for (m in mahasiswa){
    console.log(mahasiswa[m]);
}