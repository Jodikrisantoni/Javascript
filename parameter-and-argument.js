// function tambah(a,b) {
//     return a+b;

// }
// function kali(a,b) {
//     return a*b;
// }
// var a = parseInt(prompt('masukkan nilai pertama:'));
// var b = parseInt(prompt('masukkan nilai kedua:'));
// var hasil = kali (tambah(a,b), tambah(a,b));
// alert(hasil);

//top side in function its a parameter and bottom one its a argument
//if parameter less than argument, other argument will be exclude from it. 
//if parameter more than argument, so the parameter will be a undefined
//there variabel argument thats called sudo var, all argument will include inside

function tambah(){
    var hasil = 0
    for(var i=0; i<arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba);
