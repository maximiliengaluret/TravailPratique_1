/*Animation de rotation des cartes*/ 
var k = 0;

function flip() {

  var b = document.getElementsByClassName("flip-card-inner");
  console.log(b);
  k += 180;
  b[0].style.transform = "rotatey(" + k + "deg)";
}

function flip2() {

  var b = document.getElementsByClassName("flip-card-inner");
  console.log(b);
  k += 180;
  b[1].style.transform = "rotatey(" + k + "deg)"
}

function flip3() {

  var b = document.getElementsByClassName("flip-card-inner");
  console.log(b);
  k += 180;
  b[2].style.transform = "rotatey(" + k + "deg)";
}

/*-------------Code fonctionnel uniquement pour le recto---------------------
class CarreFlip{


  constructor(k){

       this.k = k;
       this.creerCartes(k);
  }

  creerCartes(k){

     let carte = document.createElement("div");
     carte.classList.add("cartes");
     carte.classList.add("Un");
     let objet = this;
     
     let divParent = document.querySelectorAll(".flip-card-front")[0];
     console.log(divParent);
     let l = 0;
     divParent.appendChild(carte);

     let carteBack = document.querySelectorAll(".flip-card-back")[0];
     
     carte.addEventListener("click", function(){

          objet.flip(l, carte);

     })

     carteBack.addEventListener("click", function(){

      objet.flip(l);

 })

}

  flip(l, carte) {

    let objet2 = this;

    var b = document.getElementsByClassName("flip-card-inner");
    console.log(b);
    l += 180;
    console.log(l);
    b[0].style.transform = "rotatey(" + l + "deg)";
    carte.removeEventListener("click" , objet2.flip);
  }
  
}*/