let bouton = document.querySelector('button');
let invisible = document.querySelector('.invisible');

//invisible.style.backgroundColor = "red";


bouton.addEventListener('click',()=>{
    bouton.style.color='red';
    //invisible.display='normal';
    invisible.classList.toggle('invisible');
});

//bouton.addEventListener(click()=>)