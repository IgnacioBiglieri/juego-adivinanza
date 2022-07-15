// Valor random
var y = Math.floor(Math.random() * 10 + 1);
      
// Contador de intentos
var guess = 1;
  
document.getElementById("submitguess").onclick = function(){
  
// numero a adivinar por el usuario   
var x = document.getElementById("guessField").value;

if(x == y)
{    
   alert("Felicidades! Lo adivinaron bien en " + guess + " intentos ");
}
else if(x > y) 
{    
    // incremento de intentos
   guess++;
   alert("Intenta un número menor");
}
else
{
    // incremento de intentos
   guess++;
   alert("Intenta un número mayor")
}
}