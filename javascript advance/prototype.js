// Object.create
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energy += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     },

//     main : function(jam) {
//         this.energy -= jam;
//         console.log(`selamat bermain ${this.nama}`);
//     },
//     tidur : function(jam){
//         this.energy += jam * 2;
//         console.log(`selamat tidur ${this.nama}`)
//     }
// }

// let jodi = mahasiswa('jodi', 10);
// let niel = mahasiswa('niel', 12);



// function mahasiswa(nama, energy) {

//     //let this = Object.create(mahasiswa.prototype);

//     this.nama = nama;
//     this.energy = energy;

//     //return this;
// }

// mahasiswa.prototype.makan = function(porsi){
//     this.energy += porsi;
//     return `selamat makan ${this.nama}`;
// }
// mahasiswa.prototype.main = function(jam){
//     this.energy -= jam;
//     return `selamat bermain ${this.nama}`;
// }
// mahasiswa.prototype.tidur = function(jam){
//     this.energy += jam * 2;
//     return `selamat tidur ${this.nama}`
// }

// let jodi = new mahasiswa('jodi', 10);



//versi class
// class mahasiswa {
//     constructor(nama, energy){
//         this.nama = nama;
//         this.energy = energy;
//     }
//     makan (porsi){
//         this.energy += porsi;
//         return `selamat makan ${this.nama}`;
//     }
//     main (jam){
//         this.energy -= jam;
//         return `selamat bermain ${this.nama}`;
//     }
//     tidur (jam){
//         this.energy += jam * 2;
//         return `selamat tidur ${this.nama}`
//     }
// }

// let jodi = new mahasiswa('jodi', 10);


// let angka []
let angka = new Array();

function Array() {
    this = Object.create(Array.prtotype);
}