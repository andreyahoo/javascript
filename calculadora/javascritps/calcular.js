// andre.js
var numTela="";
var num1 ="";
var num2 ="";
var sinal;
function exebirnaTela(valor){
	numTela = numTela+valor;
	document.getElementById('tela').value =numTela;
// alert(valor);
// document.getElementById('tela').value =document.getElementById('tela').value+valor;
// 
}

function calcular (operador){



	// alert (contval);

if(operador != "="){
	sinal = operador;
}


	if(num1==""){
		num1=numTela;
		numTela = "";
		document.getElementById('tela').value ="";
	}else{
		num2=numTela;
		numTela = "";
		document.getElementById('tela').value ="";
		resultado(operador);
	}


}


function resultado(s){
	var test;
	// alert(test);
	if(sinal=="+"){
		test = parseInt(num1)+parseInt(num2);
	}else if(sinal=="-"){
		test = parseInt(num1)-parseInt(num2);
	}else if(sinal=="*"){
		test = parseInt(num1)*parseInt(num2);
	}else if(sinal=="/"){
		test = parseInt(num1)/parseInt(num2);
	}
	document.getElementById('tela').value =test;

}
// "andre"
// andre
// andre()