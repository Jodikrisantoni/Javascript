function getComputerchoice(){
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang'; 
    if(comp >= 0.68 && comp <= 0.99) return 'semut';
}

function getResult(comp, player){
    if (player == comp)return 'DRAW!!!';
    if (player == 'gajah') return (comp == 'orang') ? 'You WIN!!!':'You LOSE!!!';
    if (player == 'orang') return (comp == 'semut') ? 'You WIN!!!':'You LOSE!!!';
    if (player == 'semut') return (comp == 'gajah') ? 'You WIN!!!':'You LOSE!!!';
};

function spin(){
    const imgspin = document.querySelector('.img-komputer');
    const picture = ['gajah','semut','orang'];
    let i = 0;
    const starttime = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime()-starttime > 1000){
            clearInterval;
            return;
        };
        imgspin.setAttribute('src','img/' + picture[i++] + '.png');
        if(i==picture.length) {i = 0};
    }, 100);
}

const choice =document.querySelectorAll('li img')
choice.forEach(function(pil){
    pil.addEventListener('click', function(){
        const Computerchoice = getComputerchoice();
        const playerChoice = pil.className;
        const Result = getResult(Computerchoice, playerChoice);
        
        spin()

        setTimeout(function(){
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src','img/' + Computerchoice + '.png');
        
            const infobox = document.querySelector('.info');
            infobox.innerHTML = Result;        
        
        }, 1000);
    });
});














// const gajah = document.getElementsByClassName('gajah');
// gajah[0].addEventListener('click', function(){
//     const Computerchoice = getComputerchoice();
//     const playerChoice = gajah[0].className;
//     const Result = getResult(Computerchoice, playerChoice);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src','img/' + Computerchoice + '.png');

//     const infobox = document.querySelector('.info');
//     infobox.innerHTML = Result;

// });






















// var ask = true;
// while (ask) {
//     var p = prompt('chose one: Scissor, Rock, Paper');
//     var comp = Math.random();
//     if(comp < 0.34){
//         comp = 'Scissor';
//     } else if ( comp >= 0.34 && comp < 0.67){
//         comp = 'Paper';
//     } else {
//         comp = 'Rock';
//     }

//     var Result = '';
//     if (p == comp){
//         Result = 'DRAW!!!';
//     } else if (p == 'Scissor'){
//         if (comp == 'Paper'){
//             Result = 'You WIN!!!';
//         } else {
//             Result = 'You LOSE!!!';
//         }
//     } else if (p == 'Rock'){
//         if (comp == 'Scissor'){
//             Result = 'You WIN!!!';
//         } else {
//             Result = 'You LOSE!!!';
//         }
//     } else if(p == 'Paper'){
//         if (comp == 'Rock'){
//             Result = 'You WIN!!!';
//         } else {
//             Result = 'You LOSE!!!';
//         }
//     } else {
//         Result = ' Invalid!';
//     }

//     alert('your move is :' + p + ' and Computer move is :' + comp + 'The Result is' + Result )

//     ask = confirm('lagi?');
// }

// alert ('Thankyou For playing GGWP');