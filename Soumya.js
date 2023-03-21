
const link = document.querySelectorAll('.tab-link');
const cont = document.querySelectorAll('.content');
const other = document.querySelector('.content-main');
const mp3 = document.querySelector('#mp3');
const li = document.querySelector('li');
const input = document.querySelectorAll('input');
const url = document.querySelector('.url');
const title = document.querySelector('.title');
const clear= document.querySelectorAll('#clear');
const moon = document.querySelector('.moon');
console.log(url);

const linkArr = Array.from(link);
const inputArr = Array.from(input)
console.log(inputArr );

window.addEventListener('DOMContentLoaded', function(){
li.classList.add('load')
})


clear.forEach((clr)=>{
clr.addEventListener('click',function(){
inputArr.forEach(inp=>inp.value='')
})

})



link.forEach((tab, index)=>{



tab.addEventListener('click', function(e){
e.preventDefault();
togg(index);

console.log(cont);
cont.forEach((content)=>{
content.classList.toggle('content-active')
})








console.log(e.target);

})

})


function togg(value){

link.forEach((tabs=> tabs.classList.remove('add')))
link[value].classList.add('add')

}

// moon.addEventListener('click', function(){
// document.body.classList.toggle('dark')
// })

