// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;

let positionX = 0;
let positionXterne = 1370;

function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  //on ajuste la positionX au centre du canvas
  positionX = monCanvas.width / 2;
  positionXterne = monCanvas.width / 2;
  // lancement de la fonction de dessin
  animate();
}

// creation d'un fonction d'animation
// cette fonction sera appelée à chaque frame
function animate() {
  // on efface le canvas
  mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);
  // on incremente la position X
  positionX = positionX + 10;
  positionXterne = positionXterne - 10;

  // on dessine
  dessine();
  //si la position X est plus grande que la largeur du canvas
  //on la remet à 0
  if (positionX > monCanvas.width + 500) {
    positionX = -1300;
  }

  if (positionXterne < -1300) {
    positionXterne = 3800;
  }


  // on demande à rappeler la fonction animate
  // à la prochaine frame
  requestAnimationFrame(animate);
}

function dessine() {
  // dessine un cercle au centre du canvas
  // outline en vert
  // remplissage en vert clair

  for(let i = 0; i < 3; i++){
    mesOutils.fillStyle = "rgb(250, 10, 120)";
    mesOutils.beginPath();
    mesOutils.arc(
    positionX + (i*450),
    monCanvas.height / 1.2,
    100 * pixelRatio,
    0,
    2 * Math.PI
  );

  mesOutils.fill();
  mesOutils.closePath();
  }

  for(let i = 0; i < 3; i++){
    mesOutils.fillStyle = "rgb(250, 10, 120)";
    mesOutils.beginPath();
    mesOutils.arc(
    positionX + (i*450),
    monCanvas.height / 3,
    100 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.fill();
  mesOutils.closePath();
  }

  for(let i = 0; i < 3; i++){
    mesOutils.fillStyle = "rgb(250, 120, 60)";
    mesOutils.beginPath();
    mesOutils.arc(
    positionXterne + (i*450),
    monCanvas.height / 1.71,
    100 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.fill();
  mesOutils.closePath();
  }
  
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  start();
};
