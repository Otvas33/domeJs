// manipulation de Dom //
// grace a document. et a une function native que vous trouver sur internet
//vous irez me selectionne l element p
// vous verefire sur un consol log  votre reusite
// dans une console vous afficheraiz uniquement le contenu de la balise p(cest a dire le texte uniquement le texte)

// Exercice 1 //
// document.getElementsByClassName("para")
//
//console.log(getElementsByClassName);


// mettre un id  quand on fait un querySelector//
let texte = document.querySelector("p");
console.log(texte);
//
let para = texte.textContent;
console.log(para);



           // essai //

let titre = document.querySelector("h1")
console.log(titre);

let tir = titre.textContent;
console.log(tir);

// Exercice 2//
// modifier le texte dans l element qui porte l id element//

let element = document.getElementById("element");
element.textContent = "changement de texte"

// Exrcice 3 ////
// ajouter la classe dark que vous aurait cree prealablement defini a l element body de votre html//

let body = document.querySelector("#body");
console.log(body);

function darkOrLight() {
    body.classList.add("dark") 
}

darkOrLight()
    







