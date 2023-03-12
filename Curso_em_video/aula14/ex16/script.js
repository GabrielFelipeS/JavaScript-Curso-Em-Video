function contar() {
    //Inicio
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passos = window.document.getElementById('passo')
    var res = window.document.querySelector('div#res')



    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
       //Veirica e avisa que FALTA DADOS')
        res.innerHTML = `Impossível contar!`  
    } else{
        let começo = Number(inicio.value)
        let final = Number(fim.value)
        let passo = Number(passos.value)
        res.innerHTML = `Contando: </br>`

        if(passo <= 0){
            //Passo negativo ou igual a zero é transformador em 1
                window.alert('Passo invalido! Considerando PASSO 1')
                passo = 1         
        }
        if(começo < final){
            //Se final é maior que  começo faz uma contagem crescente
            for(let i = começo; i <= final; i += passo){
                res.innerHTML += `${i} \u{1F449}`
            }
            
        } else {
            //Se final é menor que começo faz uma contagem regressiva
            for( let i = começo; i >= final; i -= passo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
            
        res.innerHTML += `\u{1F3C1}`      
    }
    
/*
    if(passo == 0){
        window.alert('Passo invalido! Considerando PASSO 1')
        passo = 1
    }
*/
    
}