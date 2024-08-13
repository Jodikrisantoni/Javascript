// DOM selection method
// 1. document.getElementById() 
// 2. document.getElementsByTagName() 
// 3. document.getElementsByClassName()

//id--element feedback
const judul = document.getElementById('judul')

judul.style.color='red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Jodi Kris Antoni';

//tagname--htmlcolletion feedback
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'lightblue';
p[3].style.backgroundColor = 'lightblue';

//class--htmlcollection feedback
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'changed by javascript';


//query selector
// 1. document.querySelector() 
// 2. document.querySelectorAll()

//querySelector--element feedback(hanya bisa memilih satu element)

const p4 = document.querySelector('#b p');

p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'salmon';
//jika dia memilih secara general maka element pertama saja yang terkan efek


//queryselectorall --elementfeedback in array, jadi element yang kita pilih harus menggunakan indeks pemilihan yang seperti contoh dibawah
const p = document.querySelectorAll('p');
p[2].style.backgroundColor = 'lightblue'


//noderoot modification
//contoh
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'salmon';
//logikanya dibikin document baru yang dibuat secara manually di lingkup tertentu yang ada
