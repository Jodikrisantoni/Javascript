//manipulation array
//length, join
//push, pop, shift,unshift
//slice, splice
//foreach, map




//menambah isi array
var arr = ["a",1,true,];
console.log(arr[1]);
//cara memunculkan var

//contoh 2 menambahkan isi array
var arr2 =[];
arr2[0] = "Jodi";
arr2[1] = "kris";
arr2[2] = "antoni";
arr2[3] = "internal";
console.log(arr2);
//tidak boleh melompati angka dari setiap variberl karna akan dianggap undefined

//menghapus isi array
//contoh
var arr3 = ["jodi","Kris","Antoni"];
arr3[1] = undefined;
console.log(arr3);


//menampilakn isi array
var arr3 = ["jodi","Kris","Antoni"];

for(var i=0;i<arr3.length; i++){
    console.log('mahasiswa ke-'+ (i+1) +':' +arr3[i]);
}

//lenght untuk mengetahui jumlah yang ad pada array
//join merupakan mengubah semua isi array menjadi string
//push, pop, shift, unshift untuk menambahkan dan menghapus element

//contoh join
var arr3 = ["jodi","Kris","Antoni"];
console.log(arr3.join(' - '));

//contoh push maka jey sudah termasuk array bisa langsung satu sintax
arr3.push("jey");
console.log(arr3.join(' - '));

//contoh pop maka akan menghilang element terakhir jika menambah pop lagi maka akan menghilang selanjutnya
arr3.pop();
console.log(arr3.join(' - '));

//unshift dan shift berkerja untuk element pertama 
//contoh unshift menambahkan element pertama
arr3.unshift('jeyo');
console.log(arr3.join(' - '));

//contoh shift menghilangkan elemnt pertama
arr3.shift();
console.log(arr3.join(' - '));

//slice, splice
//contoh splice (dimasukan ke index ke berapa, menghapus index, input index baru)
arr3.splice(2, 0, "intan");
console.log(arr3.join(' - '));

//contoh slice untuk memisahkan index atau mengambil atau mengiris element
//slice memerlukan array baru untuk menampung hasil irisan
//dan bisa di pilih index keberapa dalam kasus ini maka var arr5 menjadi array untuk menampung eli,hengky
var arr4 =['jodi','eli','hengky','indit','sapsap'];
var arr5 = arr4.slice(1,2);

//forEach, map
//contoh foreach digunakan untuk memunculkan atau memrintahkan setiap indeks
var newnumber = [1,2,3,4,5,6,7,8,9];
newnumber.forEach (function(e){
    console.log(e);
});

//contoh map adalah mengembalikan nilai array ke array tertentu atau baru
var newnumber2 = newnumber.map(function(e){
    return e * 2;
});
console.log(newnumber2.join(' - '));

//sort untuk menyusun angka yang berantakan 
var newnumber3 = [1,2,5,6,7,8,3,4];
newnumber3.sort();
console.log(newnumber3.join(' - '));

//filter, find 

//contoh filter untuk mencari banyak nilai
var newnumber4 = newnumber.filter(function(x) {
    x == 5;
});
console.log(newnumber4.join(' - '));

//contoh find adalah untuk menentukan satu nilai tidak boleh mengunakan join
var newnumber5 = newnumber.find(function(x){
    return x > 5;
});
console.log(newnumber5);