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
const Close = document.querySelectorAll('.close');

Close.forEach(function (params) {
        params.addEventListener('click', function(e){
            e.target.parentElement.style.display = 'none';
            e.preventDefault();
        })
});


//prevent default untuk menghentikan aksi default element atau attribute
//untuk menghentikan aksi default yang sudah tecipta dari
//default dari element, 

