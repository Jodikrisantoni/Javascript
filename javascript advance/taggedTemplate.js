// mdn web docs bentuk yang lebih komplek dari template literals memungkinkan kita untuk membaca template literal melalui sebuah function - MDN
// tagged template
// rest parameter dengan memberikan titik3 (... dan nama variabel) pada parameter

// const nama = 'jodi';
// const umur = 24;

// function coba(string, ...values){
//     // let result = ''
//     // string.foreach((str,i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return string.reduce((result, str, i)  => `${result}${str}${values[i] || ''}`, '');

// };

// const str = coba`halo nama saya ${nama}, saya umur ${umur}`;
// console.log(str);


///////////////////////////////////////////////////////////////
//Highlight

const nama = 'jodi';
const umur = 24;
const email = "jody201542@gmail.com"

function highlight(string, ...values){
    return string.reduce((result, str, i)  => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');

};

const str =  highlight`halo nama saya ${nama}, saya umur ${umur}, dengan email ${email}`;

document.body.innerHTML = str;

// penggunaan lain dari tag tamplate

// escaping HTML Tags
// Trnaslation & Internastionalization
// styled Components