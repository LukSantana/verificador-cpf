function buscarUnidadeFederativa(cpf) {
    let unidadeFederativa;
    let nonoDigito = cpf[8];
    switch (nonoDigito) {
        case '1': unidadeFederativa = 'DF, GO, MS, MT e TO'; break;
        case '2': unidadeFederativa = 'AC, AM, AP, PA, RO e RR'; break;
        case '3': unidadeFederativa = 'CE, MA e PI'; break;
        case '4': unidadeFederativa = 'AL, PB, PE, RN'; break;
        case '5': unidadeFederativa = 'BA e SE'; break;
        case '6': unidadeFederativa = 'MG'; break;
        case '7': unidadeFederativa = 'ES e RJ'; break;
        case '8': unidadeFederativa = 'SP'; break;
        case '9': unidadeFederativa = 'PR e SC'; break;
        case '0': unidadeFederativa = 'RS'; break;
    }
    return unidadeFederativa;
}

function verificarCPF(cpf) {
	// Elimina CPFs invalidos conhecidos
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;
	// Valida 1° digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2° digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;
}

exports.verificarCPF = verificarCPF;
exports.buscarUnidadeFederativa = buscarUnidadeFederativa;