/* Master Bio-informatique 2020 */
/* Projet PDP */
/* Berrehail - Al Hassan - Ergun - Hassainia */
/* SCRIPT JS DE LA PAGE HOME */


//Fonction permettant l'affichage de l'élément contenant les liens utiles et suppression de la visibilité du bouton 'LINKS'
let open = function(){
    document.getElementById('old_side').style.display = 'none';
    document.getElementById('new_side').style.display = 'block';
}

//Fonction permettant l'affichage du bouton 'LINKS' et la suppression de la visibilité de l'élément contenant les liens utiles 
    document.getElementById('old_side').style.display = 'block';
    document.getElementById('new_side').style.display = 'none';
}

//Fonction permettant l'appel des deux précédentes fonctions lorsque l'utilisateur clique sur des boutons en particulier
let prevent = function(){
    let button_old = document.getElementById('side_bar');
    let button_new = document.getElementById('close');
    button_old.addEventListener("click", open);
    button_new.addEventListener("click", close);
}

window.onload = prevent;

