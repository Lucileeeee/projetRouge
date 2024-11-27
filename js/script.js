let ombre  = document.getElementsByClassName('Ombre');
let bouton = document.getElementsByClassName('bouton');
let boutonSuivant = document.getElementsByClassName('ombreSuivant');
let image = document.getElementById('image');
let input = document.getElementsByTagName('input');


function changerAffichage(i){
    let bool = false;
    if(bool){
        /* ombre[i].classList.toggle('hoverOmbre'); */
        boutonSuivant[0].style.display='flex';
        image.style.opacity="0.5";
        console.log(input[i], i, input[i].checked);
    /* if(input[i].checked == true){ //
    } else {
        /* ombre[i].classList.toggle('hoverOmbre'); */
        boutonSuivant[0].style.display='none';
        image.style.opacity="1";
        console.log(input[i], i, input[i].checked);
    }
    bool != bool;
    if(input[i].checked == true){
        ombre[i].classList.remove('hoverOmbre');
    }else{
        ombre[i].classList.add('hoverOmbre');
    }
} 


for (let i = 0; i < input.length; i++){
    input[i].addEventListener("click", (e) =>{
       // changerAffichage(i);
        console.log(ombre);
        if(input[i].checked === true){
            console.log(input[i].checked);
            ombre[i].classList.remove('hoverOmbre');
        } else if (input[i].checked === false){
            console.log(input[i].checked);
            ombre[i].classList.add('hoverOmbre');
        }
    });
}



//todo:
//todo 1 Si tu déclique le bouton il reprend son style et le bouton question suivante disparait, l'image reprend son opacité
//todo -> reprendre avec des class et du css pour changement de style avec un toggle
//todo 2 si tu clique sur un autre bouton, le premier reprend son style initiale, le nouveau selectionner change de style mais l'image et le bouton suivant ne bouge pas
//todo 3: Si un checked, les autres peuvent pas l'etre