var newItem=document.querySelector('#items');
newItem.parentElement.style.backgroundColor='grey';
newItem.lastElementChild.style.color='blue';
newItem.firstElementChild.style.color='yellow';
console.log(newItem.nextElementSibling);



var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
container.insertBefore (newDiv,h1);

