//all methode
//parentNode
//ParentElement
//nextSibling
//PreviousSibling
//previousElementSibling
// for(let i=0; i < close.length; i++){
//     Close[i].addEventListener('click', function(e){
        
//>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<
//     });
// }
// Close[i].parentElement.style.display = 'none';
// params.target.parentElement.style.display = 'none';
// const Close = document.querySelectorAll('.close');

// Close.forEach(function (params) {
//         params.addEventListener('click', function(e){
//             e.target.parentElement.style.display = 'none';
//             e.preventDefault();
//             e.stopPropagation();
//         })
// });

// const allcard = document.querySelectorAll('.card')
// allcard.forEach(function(onecard)(
//     onecard.addEventListener('click', function(){

//     })
// ))

//prevent default untuk menghentikan aksi default element atau attribute
//untuk menghentikan aksi default yang sudah tecipta dari
//default dari element, 

//event bubbling merupakan kejadian event dalam satu container
//yang dimana setiap event akan dijlankan hingga terahir bubble
//gunakan stopPropagation() agar bubble langsung berhenti


const container = document.querySelector('.container');

container.addEventListener('click', function(event){
    if (event.target.className == 'close'){
        event.target.parentElement.style.display = 'none';
        event.preventDefault();
    }
});

