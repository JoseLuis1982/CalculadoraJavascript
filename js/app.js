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
// document.getElementById('on').onclick = on;

btnOn.addEventListener('click',function(on){
	document.getElementById('display').innerHTML=0
})
btnUno.addEventListener('click',function(uno){
	ReducirTamano(btnUno);
	AgregaNumero(1);
})
btnDos.addEventListener('click',function(dos){
	AgregaNumero(2);
})
btnTres.addEventListener('click',function(tres){
	AgregaNumero(3);
})


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
	boton.style.width = 40;
	//boton.style.heigth="90%";
}

