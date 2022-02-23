const button = document.querySelector('.button');
const text = document.querySelector('.text');

button.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(button.innerText === 'Read More'){
        button.innerText = 'Read Less';
    }else{
        button.innerText = 'Read More';
    }
})