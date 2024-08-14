





const Close = document.querySelectorAll('.close');

// for(let i=0; i < close.length; i++){
//     Close[i].addEventListener('click', function(e){
        

//     });
// }
// Close[i].parentElement.style.display = 'none';
// e.target.parentElement.style.display = 'none';

Close.forEach(function (params) {
        params.addEventListener('click', function(e){
            e.target.parentElement.style.display = 'none';
        })
});