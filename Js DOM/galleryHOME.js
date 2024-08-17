const container = document.querySelector('.container');
const mainpicture = document.querySelector('.cathead');
const catpic = document.querySelector('.cat');

container.addEventListener('click', function(e){
    if(e.target.className == 'cat'){
        mainpicture.src = e.target.src;
        mainpicture.classList.add('fade');
        setTimeout(function(){
            mainpicture.classList.remove('fade')
        }, 500);
        
        catpic.forEach(function(catcat){
            if(catcat.classList.contains('active')){
                catcat.classList.remove('active');
            }       
        });
        
        e.target.classList.add('active');
    };
});