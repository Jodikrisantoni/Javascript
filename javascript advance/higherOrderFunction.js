// hof
// funvtion yang beroperasi pada function yang lain.
// baik itu digunakan dalam argument, maupun sebagai return value
// 
// sebuah function dalam js disebut dengan first claa function
// js memperlakukan function sebagai object
// semakin besar sebuah program, semakin kompleksitasnya, semakin binggun promggrammernya
// maka harus di dibikin semudah mnugkin dengan function function yang khusus sehingga tidak membinggungkan penciptanya
// ada dua cara untuk merancang sebuah software: cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga
// jelas jelas tidal ada kekurangannya, dan cara lainnya adlah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas

// fungsi membuat programnya lebih simpel adalah dapat mendeteksi kesalahan atau error dengan lebih mudah



//contoh 1
// function kerjakanTugas disebut dengan higher order funtion
// selesai disebut dengan callback
function kerjakanTugas(matakuliah, selesai) {
    console.log(`mulai  mengerjakan tugas ${matakuliah}.`);
    selesai();
};
function selesai(){
    alert('selesai mengerjakan tugas!');
};
kerjakanTugas('pemrograman web', selesai);

//contoh 2 
// memiliki 2 parameter pertama function atau disebut call back, 1000mili second merupakan parameter kedua
// maka setTimeout disebut dengan higher order function
setTimeout (function(){
    console.log('hello world');
}, 1000);

// contoh 3
// maka tombol.addeventlistener nya merupakan higher order function
// dan function nya disebut call back
const tombol = document.querySelector('.submit');
tombol.addEventListener('click', function(){
    console.log('tombol ditekan!');
});

// contoh 4
// funtion ucapakanSalam disebut  dengan higher orderfunction
// yang dikembalikan dengan return value
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`hal ${nama}, selamat ${waktu}.`);
    };
};

let selamatMalam = ucapkanSalam('malam');
console.dir(selamatMalam('jodi'));

// contoh 5 
// perbandingan kompleksitas
let total = 0, count = 1;
while (count <= 10){
    total += count;
    count += 1;
};
console.log(total);
//dibandingkan dengan
console.log(sum(range(1,10))); //wtf this is wkoakwoka

// contoh 6
for (let i=0; i<10; i++){
    console.log(i);
};
// bandingkan dengan
function repeatLog(n) {
    for (let i = 0; i<n; i++){
        console.log(i);
    };
};
repeatLog(10);
// dan ini
// dengan mengini argumentnya bisa kita isi dengan keinginan kita mau diapakan baik itu
// di alert ataupun console.log
function repeat(n, action){
    for (let i = 0; i<n; i++){
        action(i);
    };
};
repeat(10, console.log);
repeat(3, alert);
 

