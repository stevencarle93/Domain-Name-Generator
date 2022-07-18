/* eslint-disable */
window.addEventListener("DOMContentLoaded", () => {
  let pro = ["the", "our"];
  let adj = ["great", "big"];
  let nou = ["jogger", "racoon"];
  let items = "";
  for (let i = 0; i < pro.length; i++) {
    let pronoun = pro[i];
    for (let adjective of adj) {
      nou.forEach(noun => {
        items = items + "<li>" + pronoun + adjective + noun + ".com</li>";
      });
    }
  }
  document.getElementById("dominios").innerHTML = items;

  /*

// Constante con funcion flecha
const metodo = (param1, param2)=>{

}

//Constante con funcion anonima
const metodo = (param1, param2){

}

//Funcion con nombre
function metodo (param1, param2){

}
*/
});
