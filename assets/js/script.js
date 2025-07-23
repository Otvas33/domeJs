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
//let texte = document.querySelector("p");
//console.log(texte);
//
//let para = texte.textContent;
//console.log(para);



           // essai //

// let titre = document.querySelector("h1")
// console.log(titre);

// let tir = titre.textContent;
// console.log(tir);

// Exercice 2//
// modifier le texte dans l element qui porte l id element//

// let element = document.getElementById("element");
// element.textContent = "changement de texte"

// Exrcice 3 ////
// ajouter la classe dark que vous aurait cree prealablement defini a l element body de votre html//


// EXercice 1 //
    
// Vous me faite fonctionne ce code 
// vous me faite fonctionne le btn light

// variable qui contien l element de mon body 
//let bodyElement = document.getElementById("body")
// mon btn dark //
//let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")


// function qui permet d ajouter ou denlever la class css dark grace au toggle (qui permet de l ajouterou de l enlever au besoin)
//function darkOrLight() { 
    //bodyElement.classList.toggle("dark")
    

//avec addEvenlistener je lui dit ecoute lorsque qu on clique sur le button(avec les parametre: click: et je lui rajoute la function)
//btn1.addEventListener("click",darkOrLight)
 
// 
// function avec la viriable white j ai mis la couleur white au body //
// function btnLight () {
//     let white = ("white") 
//     bodyElement.classList.add("white");
    
// }
//   console.log(btnLight);
//   //avec addEvenlistener je lui dit ecoute qu on clique sur le button(avec les parametre: click: et je lui rajoute la function)
// btn2.addEventListener("click",btnLight);
//   console.log(btn2);
  

  // Exercice 2 //


  let mainContainer = document.getElementById("sectionContainer")
  let btn = document.getElementById("btn")
  let btn1 = document.getElementById("btn1")
  let secondButton = document.getElementById("secondButon")
  
  
  

  function clickEvent () {
   sectionContainer.classList.toggle("dark");
    
  }
  
  btn.addEventListener("click",clickEvent);

  // Exercice 3 //
  function clickEvent2 () {
    para.classList.toggle("disparition")
    console.log(clickEvent);
  }
 btn1.addEventListener("click" ,clickEvent2)
     // Exercice 4 //
 let styleContainer = document.getElementById("styleContainer")
 let age = document.getElementById("age")
 let sensButton = document.getElementById("sensButton")
 console.log(sensButton)
 
function getValut() {
    let message = age.value;
    console.log(message)
}

 sensButton.addEventListener("click", getValut)
 
 


 
 

    
  
  
  
  
  


  











 















