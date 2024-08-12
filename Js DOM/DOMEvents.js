const paragraph3= document.getElementsByClassName('p3');
    function changeColor1(){
        paragraph3[0].style.backgroundColor = 'lightblue';
    }

const paragraph2= document.getElementsByClassName('p2');
    function changeColor2(){
        paragraph2[0].style.backgroundColor = 'lightblue';
    }
paragraph2[0].onclick = changeColor2;

const paragraph4 = document.querySelector('.p4');
paragraph4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liNew = document.createElement('li');
    const teksLiBaru = document.createTextNode('new item');
    liNew.appendChild(teksLiBaru);
    ul.appendChild(liNew);

});
//event handler ini akan menimpa event yang lain sedangkan
//addeventlistener ini akan menambahkan event.

//for example eventHandler
// const p1 = document.querySelector('.p1');
// p1.onclick = function(){
//     p1.style.backgroundColor = 'lightblue';
// }
// p1.onclick = function(){
//     p1.style.color = 'red';
// }

const p1 = document.querySelector('.p1');
p1.addEventListener( 'click', function(){
    p1.style.backgroundColor = 'lightblue'
});
p1.addEventListener( 'click', function(){
    p1.style.color = 'red';
});


