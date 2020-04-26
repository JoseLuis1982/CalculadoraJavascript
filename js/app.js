var cont=1;
//Asignar botones
 var btnUno=document.getElementById('1')
 var btnDos=document.getElementById('2')
 var btnTres=document.getElementById('3')
 var btnCuatro=document.getElementById('4')
 var btnCinco=document.getElementById('5')
 var btnSeis=document.getElementById('6')
 var btnSiete=document.getElementById('7')
 var btnOcho=document.getElementById('8')
 var btnNueve=document.getElementById('9')
 var btnCero=document.getElementById('0')
 var btnOn=document.getElementById('on')
 

 //Asignar Eventos
 document.getElementById('on').onclick = on;
document.getElementById('1').onclick = Uno;
document.getElementById('2').onclick = Dos;
//Funciones Numeros
function on(){
	document.getElementById('display').innerHTML=0
}
function Uno(){
	ReducirTamano(btnUno);
	AgregaNumero(1);	
}
function Dos(){
	AgregaNumero(2);
}

function AgregaNumero(numero){
	
	if (cont==8){
		return;
	}
	if (document.getElementById('display').innerHTML=="0"){
		document.getElementById('display').innerHTML = numero;
	}else{		
		document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + numero;
		cont=cont+1
	}
}
function ReducirTamano(boton)
{
	boton.style.width = "18%";
}

