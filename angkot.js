
var jmlangkot = 10;
var angkotberoperasi = 6;


for (var angkot = 1; angkot <= jmlangkot; angkot++) {
    if (angkot <= angkotberoperasi && angkot !==5){
        console.log ('angkot no' + angkot + 'beroperasi');
    } else if (angkot === 8 ||angkot === 10 || angkot === 5) {
        console.log ('angkot no' + angkot + 'lembur');
    } else {
        console.log ('angkot no' + angkot + 'tidak beroperasi');
    }
}