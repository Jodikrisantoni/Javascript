var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log ('angkot no' + noAngkot + 'beroperasi');
    noAngkot++;
}
for(noAngkot = angkotBeroperasi + 1 ; noAngkot <= jmlAngkot; noAngkot++ ){
    console.log ('angkot no' + noAngkot +'tidak beroperasi');
}