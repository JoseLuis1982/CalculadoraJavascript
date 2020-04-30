var cont=1;
var cantidad_1;
var cantidad_2;
var resultado;
var operador;
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
 var btnMas=document.getElementById('mas')
 var btnMenos=document.getElementById('menos')
 var btnPor=document.getElementById('por')
 var btnDivision=document.getElementById('dividido')
 var btnPunto=document.getElementById('punto')
 var btnIgual=document.getElementById('igual')
 var btnMasMenos=document.getElementById('sign')
 //Asignar Eventos
 //document.getElementById('on').mouseup = AumentarTamano(btnOn);
btnOn.addEventListener('mouseup',function(AumentarTamano){
	btnOn.style.width="76px";	
})
btnOn.addEventListener('mousedown',function(ReducirTamano){
	btnOn.style.width="75px";
})
btnPunto.addEventListener('mouseup',function(AumentarTamano){
	btnPunto.style.width="76px";	
})
btnPunto.addEventListener('mousedown',function(ReducirTamano){
	btnPunto.style.width="75px";
})
btnCero.addEventListener('mouseup',function(AumentarTamano){
	btnCero.style.width="76px";	
})
btnCero.addEventListener('mousedown',function(ReducirTamano){
	btnCero.style.width="75px";
})
btnUno.addEventListener('mouseup',function(AumentarTamano){
	btnUno.style.width="76px";	
})
btnUno.addEventListener('mousedown',function(ReducirTamano){
	btnUno.style.width="75px";
})
btnDos.addEventListener('mouseup',function(AumentarTamano){
	btnDos.style.width="76px";	
})
btnDos.addEventListener('mousedown',function(ReducirTamano){
	btnDos.style.width="75px";
})
btnTres.addEventListener('mouseup',function(AumentarTamano){
	btnTres.style.width="76px";	
})
btnTres.addEventListener('mousedown',function(ReducirTamano){
	btnTres.style.width="75px";
})
btnCuatro.addEventListener('mouseup',function(AumentarTamano){
	btnCuatro.style.width="76px";	
})
btnCuatro.addEventListener('mousedown',function(ReducirTamano){
	btnCuatro.style.width="75px";
})
btnCinco.addEventListener('mouseup',function(AumentarTamano){
	btnCinco.style.width="76px";	
})
btnCinco.addEventListener('mousedown',function(ReducirTamano){
	btnCinco.style.width="75px";
})
btnSeis.addEventListener('mouseup',function(AumentarTamano){
	btnSeis.style.width="76px";	
})
btnSeis.addEventListener('mousedown',function(ReducirTamano){
	btnSeis.style.width="75px";
})
btnSiete.addEventListener('mouseup',function(AumentarTamano){
	btnSiete.style.width="76px";	
})
btnSiete.addEventListener('mousedown',function(ReducirTamano){
	btnSiete.style.width="75px";
})
btnOcho.addEventListener('mouseup',function(AumentarTamano){
	btnOcho.style.width="76px";	
})
btnOcho.addEventListener('mousedown',function(ReducirTamano){
	btnOcho.style.width="75px";
})
btnNueve.addEventListener('mouseup',function(AumentarTamano){
	btnNueve.style.width="76px";	
})
btnNueve.addEventListener('mousedown',function(ReducirTamano){
	btnNueve.style.width="75px";
})
btnMas.addEventListener('mouseup',function(AumentarTamano){
	btnMas.style.width="76px";	
})
btnMas.addEventListener('mousedown',function(ReducirTamano){
	btnMas.style.width="75px";
})
btnMenos.addEventListener('mouseup',function(AumentarTamano){
	btnMenos.style.width="76px";	
})
btnMenos.addEventListener('mousedown',function(ReducirTamano){
	btnMenos.style.width="75px";
})
btnPor.addEventListener('mouseup',function(AumentarTamano){
	btnPor.style.width="76px";	
})
btnPor.addEventListener('mousedown',function(ReducirTamano){
	btnPor.style.width="75px";
})
btnDivision.addEventListener('mouseup',function(AumentarTamano){
	btnDivision.style.width="76px";	
})
btnDivision.addEventListener('mousedown',function(ReducirTamano){
	btnDivision.style.width="75px";
})
btnIgual.addEventListener('mouseup',function(AumentarTamano){
	btnIgual.style.width="76px";	
})
btnIgual.addEventListener('mousedown',function(ReducirTamano){
	btnIgual.style.width="75px";
})
btnMasMenos.addEventListener('mouseup',function(AumentarTamano){
	btnMasMenos.style.width="76px";	
})
btnMasMenos.addEventListener('mousedown',function(ReducirTamano){
	btnMasMenos.style.width="75px";
})
//Botones de numeros
btnOn.addEventListener('click',function(on){
	cont=1
	document.getElementById('display').innerHTML=0
	operador=""
})
btnCero.addEventListener('click',function(cero){
	AgregaNumero(0);
})
btnUno.addEventListener('click',function(uno){	
	AgregaNumero(1);	
})
btnDos.addEventListener('click',function(dos){
	AgregaNumero(2);
})
btnTres.addEventListener('click',function(tres){
	AgregaNumero(3);
})
btnCuatro.addEventListener('click',function(cuatro){
	AgregaNumero(4);
})
btnCinco.addEventListener('click',function(cinco){
	AgregaNumero(5);
})
btnSeis.addEventListener('click',function(seis){
	AgregaNumero(6);
})
btnSiete.addEventListener('click',function(siete){
	AgregaNumero(7);
})
btnOcho.addEventListener('click',function(ocho){
	AgregaNumero(8);
})
btnNueve.addEventListener('click',function(nueve){
	AgregaNumero(9);
})
btnPunto.addEventListener('click',function(punto){
	var valor=document.getElementById('display').innerHTML
	var n = valor.indexOf(".")
	if(n>0){
		return;}
	document.getElementById('display').innerHTML =document.getElementById('display').innerHTML + "."		
})
btnMasMenos.addEventListener('click',function(masmenos){
	var valor=document.getElementById('display').innerHTML
	if (valor!==0){
		document.getElementById('display').innerHTML = valor * -1;
	}
})
//Operacion de los botones de calculos
btnMas.addEventListener('click',function(botonmas){
	PrimerOperador(document.getElementById('display').innerHTML,'+')
})
btnMenos.addEventListener('click',function(botonmenos){
	PrimerOperador(document.getElementById('display').innerHTML,'-')
})
btnPor.addEventListener('click',function(botonpor){
	PrimerOperador(document.getElementById('display').innerHTML,'*')
})
btnDivision.addEventListener('click',function(botondivision){
	PrimerOperador(document.getElementById('display').innerHTML,'/')
})
//Boton Igual
btnIgual.addEventListener('click',function(igual){
	cantidad_2=Number(document.getElementById('display').innerHTML)
	switch (operador) {
  case "+":
    resultado=cantidad_1+cantidad_2;
    break;
  case "-":
    resultado=cantidad_1-cantidad_2;
    break;
  case "*":
     resultado=cantidad_1*cantidad_2;
    break;
  case "/":
    resultado=cantidad_1/cantidad_2;    
}
	document.getElementById('display').innerHTML=resultado;
})
function PrimerOperador(numero,boton)
{
	cantidad_1=Number(numero)
	operador=boton
	document.getElementById('display').innerHTML="";
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

