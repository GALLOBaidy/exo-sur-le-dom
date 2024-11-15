//On crée d'abord nos variables pour pouvoir appeler nos boutons HTML grâce aux Ids

let lireDOM = document.getElementById("dom");
let modifDOM = document.getElementById("dom_modif");
let stl = document.getElementById("style");
//On crée nos variables pour pouvoir appeler nos balises grâce à leurs Ids
let titre1 = document.getElementById("titre1");
let titre2 = document.getElementById("titre2");
let titres = document.getElementsByClassName("titre");
let para = document.getElementById("paragraphe1");
let ul = document.getElementById("liste");
let li = document.getElementsByTagName("li");

//On crée notre première événement sur un événements click
lireDOM.addEventListener("click", function () {
  //Le String()constructeur crée des objets String. Lorsqu'il est appelé en tant que fonction, il renvoie des valeurs primitives de type String.
  let titleTextR = String();
  let listli = String();

  //On crée des boucles pour pouvoir renvoyer le contenu des balises qui on la même class
  for (let i = 0; i < titres.length; i++) {
    let titleText = titres[i].textContent;
    titleTextR += titleText;
    titleTextR += "\n";
  }

  for (let a = 0; a < li.length; a++) {
    let tblLi = li[a].textContent;
    listli += tblLi + "\n";
  }

  //On affiche nos éléments grâce à la fonction alert()
  alert(
    "Le texte de la balise ayant l'id titre2 est : " +
      "'" +
      titre2.textContent +
      "'\n" +
      "Le nombre de balise ayant la classe titre est de : " +
      titres.length +
      "\n" +
      "Le texte des balises ayant la classe titre est : " +
      titleTextR +
      "\n" +
      "Le texte des balises li est : " +
      listli +
      "\n"
  );
});

//On crée un événement dès que le bouton a été cliqué
modifDOM.addEventListener("click", function () {
  //les nouveaux éléments à afficher avec la propriété innertext
  titre1.innerText = "Bienvenue ";
  titre2.innerText = "Exo JS";
  para.innerText = "Voici quelques fonctions exécutées en javascript.";
  //On crée une boucle pour que la modification de la liste puisse tjrs s'adapter si on l'a rallonge ou on l'a raccourci
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = "Liste " + (i + 1); //(i+1) pour que le comptage commence par 1
  }
});

// on crée notre événement pour que le changement puisse se faire dès le click
stl.addEventListener("click", function () {
  //les changement que l'on souhaite faire
  titre1.style.textAlign = "center";
  //On crée une boucle pour que ça prenne tous les éléments ayant la même class
  for(a=0;a< titres.length;a++){
    titres[a].style.color = "red";
  };
  para.style.border = "solid 1px black";
  para.style.padding = "10px";
  ul.remove();
})