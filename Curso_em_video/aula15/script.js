let num = []
let res = document.getElementById('res')
let txt = document.getElementById('seltab')
let num_txt = document.getElementById('txtn')

function adicionar(){   

    res.innerHTML = null

    if(num.indexOf(Number(num_txt.value)) != -1 || Number(num_txt.value) > 100 || Number(num_txt.value) < 1){ 
        window.alert('Valor é invalido ou já encontrado na lista')
        
    } else {
        num.push(Number(num_txt.value))
        let item = document.createElement('option')
        item.text = `Valor ${num_txt.value} adicionado`
        item.value = `num${num.length}`
        txt.appendChild(item)
            
    }
        
    

   num_txt.value = ''
   num_txt.focus()
    
}

function finalizar(num){
    

    if(num.length == 0){
        window.alert('Insira um número antes de finalizar')
    } else{
        let tamanho = num.length   
        let soma = 0
        let maior = num[0]
        let menor = num[0] 
        for(let pos in num){
            soma += num[pos]
            if(num[pos] > maior){
                maior = num[pos]
            }
            if(num[pos] < menor){
                menor = num[pos]
            }
        }
        let media = soma / tamanho
        
        res.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor falor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>À media dos valores é ${media}</p>`
    }  
}

/*
function somar(num = 0) {
    var soma = 0
    for(var i = 0; i < num.length;i++){
         soma +=  num[i]
    }
    return soma
}

function media(num = 0){
    var conta = somar(num) / num.length
    return conta
}
*/