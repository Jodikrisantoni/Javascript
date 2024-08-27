//array digunakan untuk kumpulan elemen yang memiliki indek
//array bisa menampung lebih dari 1 nilai
//digunakan seperti library var 
//kumpulan pasangan key dna nilai
//array di js bersifat object
//memiliki fungsi atau method lenght untuk menghitung jumlah elemen didalamnya
//boleh memiliki tipe berbeda

//contoh
var hari = ['senin','selasa','rabu'];
var mahasiswa = ['jodi','jacob','instan'];
//bisa dinyatakan dulu var nya baru diisi araynya
var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];

//saat untuk mengakses array
console.log(binatang[4]);
//maka akan muncul koala disebabkan kucing number 0
console.log(binatang.length);
//akan memunculkan jumlah objek yang ada
var func = function(){alert ('Hello World!!!');};
var isiyangberbeda = ['teks',2,false,func];
//dan bisa array didalam array
var isiyangberbeda = ['teks',2,false,func,[4,5,6]];
//jika ingin menghasilkan 5 maka
console.log(isiyangberbeda [4][1]);


