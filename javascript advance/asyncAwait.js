// Asyncronous function
// merupakan sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang syncronous(standard)
// - fungsi yang berjalan secara asynchronous
// - menghasilkan (implisit) promise
// - cara penulisannya sama seperti synchronous function(funtion biasa)
// sebuah async funtion dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsi-nya sambil menunggu promise-nya selesai

// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000)
// });
// coba.then(() => console.log(coba));

function cobaPromis(){
    return new Promise((resolve, reject) => {
    const waktu = 3000;
    if(waktu<5000){
    setTimeout(() => {
        resolve('selesai');
    }, waktu);
    } else {
        reject('to late!!!')
    }
});
};

async function cobaAsync(){
    try{
    const coba = await cobaPromis();
    console.log('selesai');
    } catch(error) {
        console.error(error);
    }
}
cobaAsync()
// const coba = cobaPromis();
// coba
// .then(() => console.log(coba))
// .catch(() => console.log(coba));
