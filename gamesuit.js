var tanya = true;
while (tanya) {
    var p = prompt('chose one: Scissor, Rock, Paper');


    // k=computer
    var comp = Math.random();


    if(comp < 0.34){
        comp = 'Scissor';
    } else if ( comp >= 0.34 && comp ,0.67) {
        comp = 'Paper';
    } else {
        comp = 'Rock';
    }

    //Rules
    var hasil = '';
    if (p == comp){
        hasil = 'DRAW!!!';
    } else if (p == 'Scissor'){
        if (comp == 'Paper'){
            hasil = 'You WIN!!!';
        } else {
            hasil = 'You LOSE!!!';
        }
    } else if (p == 'Rock'){
        if (comp == 'Scissor'){
            hasil = 'You WIN!!!';
        } else {
            hasil = 'You LOSE!!!';
        }
    } else if(p == 'Paper'){
        if (comp == 'Rock'){
            hasil = 'You WIN!!!';
        } else {
            hasil = 'You LOSE!!!';
        }
    } else {
        hasil = ' Invalid!';
    }

    // JIKA DI SHORTHAND 
    // else if (p == Scissor){
    //          Hasil = (comp == 'Rock') ? 'WIN' : 'lOSE';
    // } else if (p == 'Rock'){
    //          Hasil = (Comp == 'Paper') ? 'WIN : 'LOSE';
    // } else if (P == 'Paper'){
    //          Hasil = (Comp == 'Scissor') ? 'WIN' : 'LOSE';
    // }


    // Result
    alert('your move is :' + p + ' and Computer move is :' + comp + '\nThe Result is' + hasil )

    tanya = confirm('lagi?');
}

alert ('Thankyou For playing GGWP');