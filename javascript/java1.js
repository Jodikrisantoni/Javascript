


alert  ('mulai');
for (var i=0; i<5; i++) {
    alert('Hello World');
}
alert ('selesai');

// next

var angka = prompt ('masukan angka :');
if (angka % 2 === 0) {
    alert (angka + 'adalah bilangan GENAP');
} else { 
    alert(angka + 'adalah bilangan GANJIL')
}

//while 
//while(true) {
//   console.log('Hello World')
//}
// maka akan terjadi infinite loop
var ulang = true;
while (ulang) {
    console.log ('Hello World');
    ulang = confirm ('lagi?');
}

var nilaiAwal = 1;
while (nilaiAwal <=5) {
    console.log ('hello World');
    nilaiAwal++;
}
