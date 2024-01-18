var teclado = document.getElementById("teclado");

const buttons = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

buttons.forEach(function(texto){
    var button = document.createElement("button");
    button.textContent = texto;
    teclado.appendChild(button)
})