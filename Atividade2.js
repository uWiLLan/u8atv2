console.log("Digite o dia do evento.")
var dataEvento = 28
let dataAtual = new Date()
if((dataAtual.getDate())<dataEvento){
    console.log("Digite a sua idade.")
}else{
    console.log("Data inválida.")
}

var idade = 100
if(idade>=18){
	console.log("Digite a lista de participantes.")
}else{
	console.log("Cadastro não é permitido pela idade.")
}

var listaParticipantes = 99
if(listaParticipantes<100){
	console.log("Cadastro permitido.")
}else{
	console.log("Cadastro não será permitido por ter excedido o limite.")
}