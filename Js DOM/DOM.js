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
