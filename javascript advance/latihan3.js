// contoh 1 eksekusi
// const mhs = {
//     nama    : 'jodi',
//     umur    : 24,
//     nim     : 'b1031201135',
//     email   : 'jody201542@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;
//////////////////////////////////////////
// contoh 2 looping
// const mhs = [
//     {
//         nama : 'jodi',
//         email : 'jody201542@gmail.com'
//     },
//     {
//         nama : 'kris',
//         email : 'kris201542@gmail.com'
//     },
//     {
//         nama : 'antoni',
//         email : 'antoni201542@gmail.com'
//     }
// ];
// const el = `<div class="mhs">
//     ${mhs.map(n => `<ul>
//         <li>${n.nama}</li>
//         <li>${n.email}</li>
//         </ul>`).join('')}
// </div>`;
//////////////////////////////////////////
//contoh 3 Conditionals
// const lagu = {
//     judul : 'tetap dalam jiwa',
//     penyanyi : 'isyana saravasti',
//     feat : 'rayi putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul}${lagu.feat ? `(feat. ${lagu.feat})` : `` }</li>
//     </ul>
// </div>`
//////////////////////////////////////////
//contoh 4  nested/ HTML Fragments bersarang

const mhs ={
    nama : 'jodi',
    semester : 9,
    mataKuliah : ['Rekayasa web',
        'Analisis dan perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Ssitem Berorientasi Object'
    ]
};
function cetakMataKuliah(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>mata kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;