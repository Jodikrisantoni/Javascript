//ColorDOM making

const button = document.getElementById('ColorChange');
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', function(){
    body.classList.toggle('body-color');
});

const button2 = document.createElement('button')
const teksbutton2 = document.createTextNode('Random Color Change')
button2.appendChild(teksbutton2);
button2.setAttribute('type', 'button');
button.after(button2);

button2.addEventListener('click', function(){
    const r = (Math.round(Math.random() * 255 + 1));
    const g = (Math.round(Math.random() * 255 + 1));
    const b = (Math.round(Math.random() * 255 + 1));
    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const Sred = document.querySelector('input[name=Sred]');
const Sgreen = document.querySelector('input[name=Sgreen]');
const Sblue = document.querySelector('input[name=Sblue]');
Sred.addEventListener('input', function(){
    const r = Sred.value;
    const g = Sgreen.value;
    const b = Sblue.value;
    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
Sgreen.addEventListener('input', function(){
    const r = Sred.value;
    const g = Sgreen.value;
    const b = Sblue.value;
    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
Sblue.addEventListener('input', function(){
    const r = Sred.value;
    const g = Sgreen.value;
    const b = Sblue.value;
    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

body.addEventListener('mousemove', function(event){
    const xpoint = Math.round((event.clientX / window.innerWidth)*255);
    const ypoint = Math.round((event.clientY / window.innerHeight)*255);
    body.style.backgroundColor = 'rgb('+ xpoint +','+ ypoint +',100)';

});
