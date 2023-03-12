function valor(){
    var res = window.document.getElementById('res');
    var number1 = Number(window.prompt('Digite um número: '));
    var number2 = Number(window.prompt('Digite outro número: '));

    res.innerHTML = `Analisando os valores <mark>${number1}</mark> e <mark>${number2}</mark>, `
    if(number1 == number2)
    {
        res.innerHTML += `ambos são <strong>IGUAIS</strong></p>`

    } else if( number1 > number2){
       res.innerHTML += `o maior valor é <strong>${number1}</strong>`

    } else if( number2 > number1){
        res.innerHTML += `o maior valor é <strong>${number2}</strong>`

    }
   
}