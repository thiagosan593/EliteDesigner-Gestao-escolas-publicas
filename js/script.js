function mudouTamanho(){
 if(window.innerWidth >=1000){
    itens.style.display ='block'
     }else{
    itens.style.display='none'
 }
 }
function clickMenu(){
          if(  itens.style.display =='block'){
            itens.style.display ='none'
          }else{
            itens.style.display ='block'
  }
 }
    

 window.addEventListener("load", function() {

  var fadeContainer = document.querySelector("#fade-container");
  var body = document.querySelector(".display-none");
 
setTimeout(function() {
    
      fadeContainer.style.display = "none";
      body.classList.remove('display-none')
  
}, 1500);

});