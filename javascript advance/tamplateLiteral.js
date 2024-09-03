// tamplate literal or string literal

// MDN. tamplate literal adalah string literal yang memungkinkan adanya expression di dalamnya.

// contoh cara membuat string literal [1]
let nama ='jodi';
let nim ='b1031201135';
let email = 'jody201542@gmail.com';
// yang menggunakan kutik seperti 'jodi' merupakan string literal
// menggunakan `` back tick kita bisa membuat tamplate literal 
// - bisa membuat multi-lin string
// - embedded expression
// - HTML Fragments (sering digunakan front-end framework)
// - Expression Interpolation
// - Tagged Template 

// contoh tamplate literal
`string text`

`string text 1
 string text 1
 string text 1`  // contoh multi-line string

`string text ${expression} string text`  // embedded expression

tag `string text ${expression} string text`  // tagged template

// eksekusi multi-line string 
console.log ('string 1 \nstring 2'); // jika menggunakan kutip biasa maka harus menggunakan \n
console.log (`string 1
    string 2`);   // menggunakan enter langsung bisa di proses sama seperti kutik biasa sesuai keperluan anda
//

// eksekusi multi-line string (HTML fragments)(1)
// contoh nya jika
const maha = {
    nama : 'jodi',
    umur : 24,
    nim  : 'b1031201135',
    email: 'jody201542@gmail.com' 
}
// jika ingin menampilkan ke html kita
let el = `<div class ="maha">
<h2>${maha.nama}</h2>
<span class ="nim">${maha.nim}</span>
</div>`;

// contoh embedded Expression
console.log(`halo saya ${maha.nama}, terimakasih`)
console.log(`nama saya dan umur saya adalah ${maha.nama + maha.umur}`);
 
// html fragment
const element = ``