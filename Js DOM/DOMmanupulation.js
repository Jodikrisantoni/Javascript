//element.innerHTML untuk mengubah isi element
const title= document.getElementById('judul');
title.innerHTML = 'jodi kris antoni';

// const sectionA = document.querySelector('sectioan#a');
// sectionA.innerHTML = 'Helloooo!!';
//maka semua didalam section A akan menghilang menjadi innerHTML

//element.style.propertyOfCSS
title.style.color = 'lightblue';
title.style.backgroundColor = 'pink';

//getAttribute, untuk mendapatkan attribute dielement tertentu
//setAttribute, untuk memberikan attribute di element tertent dengan menggantikan attribut baru
//removeAttribute, untuk melepaskan attribute yang ada
title.setAttribute('class','jodi');
title.getAttribute('class');
title.removeAttribute('class');
//element.classList.<sesuai bahasa inggris>('perintah')
//add, remove, toggle, item, cotains, replace
title.classList.add('kris');
