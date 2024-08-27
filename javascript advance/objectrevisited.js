//membuat object javascript


//object literal
// tidak efektif untuk objek yang banyak
// let mahasiswa = {
//     nama : 'jodi',
//     energy : 10,
//     makan : function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`selamat makan ${this.nama}.`);
    
//     }
// }

// let mahasiswa = {
//     nama : 'niel',
//     energy : 10,
//     makan : function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`selamat makan ${this.nama}.`);
    
//     }
// }



// Function declaration
//

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

// function mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;
    

//     return mahasiswa;
// }

// let jodi = mahasiswa('jodi', 10);
// let niel = mahasiswa('niel', 12);



// Contructor function(menggunakan keyword new)

// function mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     };

//     this.main =function(jam){
//         this.energy -= jam;
//         console.log(`selamat bermain ${this.name}`);
//     };
 
// }

// let jodi = new mahasiswa ('jodi', 10);




// Object.create
const methodMahasiswa = {
    makan : function(porsi){
        this.energy += porsi;
        console.log(`selamat makan ${this.nama}`);
    },

    main : function(jam) {
        this.energy -= jam;
        console.log(`selamat bermain ${this.nama}`);
    },
    tidur : function(jam){
        this.energy += jam * 2;
        console.log(`selamat tidur ${this.nama}`)
    }
}

function mahasiswa(nama, energy) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    return mahasiswa;
}

let jodi = mahasiswa('jodi', 10);
let niel = mahasiswa('niel', 12);