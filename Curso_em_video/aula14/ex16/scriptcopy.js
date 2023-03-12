function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('res')




    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML= ('Impossivel contar')
    } else{
        res.innerHTML = `Contando: </br>`
        let passo = Number(pas.value)
        let inicio = Number(ini.value)
        let final = Number(fim.value)

        if(passo <= 0){
            window.alert('PASSO INVALIDO! Contadno com PASSO 1')
            passo = 1
        }

        if(inicio < final){
            for(let i = inicio;i <= final; i +=passo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        else{
            for(let i = inicio;i >= final; i -=passo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
       
        res.innerHTML += `\u{1F3C1}`

    }
}