var tab=['red','blue','white','black','gris'];
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval(function(){
var q=entierAleatoire(0,4);
document.getElementById("body").style.background-color = tab[q];
 }, 3000);
