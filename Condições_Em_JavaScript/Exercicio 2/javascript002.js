function iniciar() {
    var res = window.document.getElementById('res');
    var numero = Number(window.prompt('Digite um número: '))

    if(numero % 2 == 0){
        //Par
        res.innerHTML = `O número ${numero} que foi digitado é <strong>PAR!</strong>`

    } else if(numero % 2 != 0){
        //Impar
        res.innerHTML = `O número ${numero} que foi digitado é <strong>ÍMPAR!</strong>`
    } 
}