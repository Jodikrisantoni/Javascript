
var jmlangkot = 10;
var angkotberoperasi = 6;
var angkotlembur = 8;


for (var angkot = 1; angkot <= jmlangkot; angkot++) {
    if (angkot <= angkotberoperasi){
        console.log ('angkot no' + angkot + 'beroperasi');
    } else if (angkot === angkotlembur) {
        console.log ('angkot no' + angkot + 'lembur');
    } else {
        console.log ('angkot no' + angkot + 'tidak beroperasi');
    }
}