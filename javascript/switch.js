// var angka = prompt('masukkan angka:');


// switch (angka) {
//     case '1' : 
//         alert ('anda memasukkan angka 1');
//         break;
//     case '2':
//         alert ('anda memasukkan angka 2');
//         break;
//     case '3' :
//         alert ('anda memasukkan angka 3');
//         break;
//     default :
//         alert ('angka yang anda masukkan salah');
//         break;
// }
// codingan contoh di atas yang tidak di shorthand
// break berguna untuk melompat ke akhir case
// alertnya bisa kita satukan dengan 1 brake


var item = prompt ('masukkan nama makanan/minuman: \n (cth : nasi, daging, susu, gamburger, softdrink)');


switch (item) {
    case 'nasi' :
    case 'daging':
    case 'susu' :
        alert('makanan/minuman sehat');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan/minuman tidak sehat!');
        break;
    default :
        alert('anda memasukkan nama makanan/minuman yang salah');
        break;
}