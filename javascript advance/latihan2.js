// ingin menyeleksi video dari playlist javascript lanjutan
// ingin menulis berapa jumlah dari video
// total durasi satu playlist tersebut


// ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + (parts[1]);
    })
// jumlahkan semua detik
    .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
javascriptlanjut = jslanjut - jam * 3600;
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;


// simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`

const jmlhvideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jumlahvideo = document.querySelector('.jumlah-video');
jumlahvideo.textContent = `${jmlhvideo} video`

console.log(menit);