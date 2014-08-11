// alert("funciona?");

function aleatorio(minimo, maximo){
         var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
         return numero;
}

var piedra= 0;
var papel = 1;
var tijera= 2;

var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario;
var opcionMaquin = aleatorio(0,2);

opcionUsuario= prompt("Que eliges\npiedra: 0\npapel: 1\ntiejera: 2","0");

alert("Elegiste: " + opciones[opcionUsuario]);
alert("javaScript eligío: " + opciones[opcionMaquin]);

if (opcionUsuario == piedra)
{
   // alert("elegiste piedra");

    if (opcionMaquin==piedra)
        {
   	      alert("Empate.¡¡");
        }
      else if (opcionMaquin == papel)
            {
             alert("Perdiste..¡¡");  
            }
         else if (opcionMaquin == tijera)
              {
      	        alert("Ganaste");
              }
}

else if (opcionUsuario == papel)
{
   // alert("elegiste papel");

   if (opcionMaquin==piedra)
        {
   	      alert(" Ganaste.¡¡");
        }
      else if (opcionMaquin == papel)
            {
             alert("Empate.¡¡");  
            }
         else if (opcionMaquin == tijera)
              {
      	        alert("Perdiste..");
              }
}

else if (opcionUsuario == tijera)
{
   // alert("elegiste tijera");

   if (opcionMaquin==piedra)
        {
   	      alert("Perdiste.¡¡");
        }
      else if (opcionMaquin == papel)
            {
             alert("Ganaste..¡¡");  
            }
         else if (opcionMaquin == tijera)
              {
      	        alert("Empate");
              }
}
else alert("elige algo?");

