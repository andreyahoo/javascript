
var numTela="";
var num1 ="";
var sinal ="";
function exebirnaTela(valor){
	numTela = numTela+valor;
	document.getElementById('tela').value =numTela;
// alert(valor);
// document.getElementById('tela').value =document.getElementById('tela').value+valor;
// 
}

function calcular (operador){

if(sinal==""){
	sinal=operador;
	num1=numTela;
	numTela="";
	document.getElementById("tela").value="";

}else{

	resultado(operador);
	numTela="";

}

}


function resultado(s){
	
	// alert(test);
	if(sinal=="+"){
		num1 = parseInt(num1)+parseInt(numTela);
	}else if(sinal=="-"){
		num1 = parseInt(num1)-parseInt(numTela);
	}else if(sinal=="*"){
		num1 = parseInt(num1)*parseInt(numTela);
	}else if(sinal=="/"){
		num1 = parseInt(num1)/parseInt(numTela);
	}
	document.getElementById('tela').value =num1;
	sinal=s;
}
// "andre"
// andre
// andre()