let dataAtual = new Date()
var dataEvento = 27
if((dataAtual.getDate())<dataEvento){
    var idade = 100
    if(idade>=18){
        var listaParticipantes = 99
        if(listaParticipantes<100){
            console.log("Cadastro permitido.")
        }else{
            console.log("Cadastro não será permitido por ter excedido o limite de pessoas.")
        }}else{
        console.log("Cadastro não é permitido pela idade.")
    }
}else{
	console.log("Data inválida.")
}