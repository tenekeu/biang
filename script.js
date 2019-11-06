var k=2;
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval(function(){
	var q=entierAleatoire(0,4);
	while(q===k){
		q=entierAleatoire(0,4);
	}	
	body=document.getElementById("body");
	switch(q){
		case(0):{
			body.style.background = "red";
		}
		break;
		case(1):{
			body.style.background = "blue";
		}
		break;
		case(2):{
			body.style.background = "white";
		}
		break;
		case(3):{
			body.style.background = "black";
		}
		break;
		case(4):{
			body.style.background = "gris";
		}
		break;
	}	
	
 }, 2000);
