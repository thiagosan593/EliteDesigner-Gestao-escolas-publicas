var fraseLoader = document.querySelector("#frase-loader")

let links = document.querySelectorAll("a")


function fraseLoaderAle() {
  var numAle = (Math.floor(Math.random() * 10))

  switch (numAle) {
    case 1:
      fraseLoader.innerText = " Transformando ideias em realidade: o site está em carregamento."
      break;
    case 2:
      fraseLoader.innerText = " O processo de design é uma busca constante pela perfeição."
      break;
    case 3:
      fraseLoader.innerText = " Aperfeiçoando o visual."
      break;
    case 4:
      fraseLoader.innerText = "Design que inspira."
      break;
    case 5:
      fraseLoader.innerText = "Design é a arte de tornar o complicado simples. - Paul Rand"
      break;
    case 6:
      fraseLoader.innerText = " O design é um processo, estamos apenas no início: aguarde enquanto carregamos."
      break;
    case 7:
      fraseLoader.innerText = "O design é a arte de resolver problemas: estamos carregando as soluções."

      break;
    case 8:
      fraseLoader.innerText = "O design é o poder da expressão."
      break;
    default:
      fraseLoader.innerText = "O processo de design é uma jornada contínua de aprendizado e aprimoramento constante."
  }

}

fraseLoaderAle()


window.addEventListener("load", function () {

  var fadeContainer = document.querySelector("#fade-container");
  var displayr = document.querySelector(".display-none");

  setTimeout(function () {

    fadeContainer.style.display = "none";
    displayr.classList.remove("display-none")

  }, 3000);


});

function mudouTamanho() {
  if (window.innerWidth >= 1025) {
    itens.style.display = 'block'
  } else {
    itens.style.display = 'none'
  }
}
function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}

function disabled() {
  /*SitesMap */
  // links[8].classList.add("disabled-link")
  // links[9].classList.add("disabled-link")

}

disabled()