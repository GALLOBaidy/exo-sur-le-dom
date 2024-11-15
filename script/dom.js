//On crée d'abord nos variables pour pouvoir appeler nos boutons HTML grâce aux Ids

let lireDOM = document.getElementById("dom");
let modifDOM = document.getElementById("dom_modif");
let stl = document.getElementById("style");

//On crée notre première événement sur un événements click
lireDOM.addEventListener("click", function () {
  //On crée nos variables pour pouvoir appeler nos balises grâce à leurs Ids
  let titre2 = document.getElementById("titre2");
  let titres = document.getElementsByClassName("titre");
  let li = document.getElementsByTagName("li");
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
