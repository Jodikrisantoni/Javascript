//document.createElement()
//document.createTextNode()
//node.appendChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.ReplaceChild()

//create a new element
const pNew = document.createElement('p');
const teksPnew = document.createTextNode('new paragraph');
//save it inside paragraph
pNew.appendChild(teksPnew);
//save it at section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pNew);


const libaru = document.createElement('li');
const tekslibaru = document.createTextNode('paragraph baru');
libaru.appendChild(tekslibaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li2:nth-child(2)');
//const li2 = document.querySelector('section#b ul li2:nth-child(2)')
ul.insertBefore(libaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const teksh2 = document.createTextNode('jodikrisantoin');
h2.appendChild(teksh2);
sectionB.replaceChild(h2, p4);


h2.style.backgroundcolor = 'redsalmon';
libaru.style.backgroundcolor = 'redsalmon';
pNew.style.backgroundcolor = 'redsalmon';


