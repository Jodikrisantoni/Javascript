//all methode
//parentNode
//ParentElement
//nextSibling
//PreviousSibling
//previousElementSibling
// for(let i=0; i < close.length; i++){
//     Close[i].addEventListener('click', function(e){
        

//     });
// }
// Close[i].parentElement.style.display = 'none';
// e.target.parentElement.style.display = 'none';
const Close = document.querySelectorAll('.close');

Close.forEach(function (params) {
        params.addEventListener('click', function(e){
            e.target.parentElement.style.display = 'none';
        })
});


