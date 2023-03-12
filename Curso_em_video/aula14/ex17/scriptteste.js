function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(var i = 1;i <= 10;i++){
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }

    }

    
}