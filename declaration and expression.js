

// lebih fleksibel dan bisa dimanapun
//baik diata ataupun bawah
// mudah dipahami
function ampilpesan (nama){
    alert('halo' + nama);
}
tampilpesan ('jodi k');

//harus didefinisikan terlebih dahulu
//bisa sebagai closure
//bisa sebagai argument
//iife
var tampilpesan=function (nama){
                alert('halo' + nama);
                }
    tampilpesan('jodi k');