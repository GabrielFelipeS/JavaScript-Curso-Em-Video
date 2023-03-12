function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }  else{
        let n = Number(num.value)
        tab.innerHTML = ''

        for(var i = 1;i <= 10; i++){
            let item = window.document.createElement('option')
            item.text =  `${n} x ${i} = ${n*i}`
            itam.value = `tab${i}`
            tab.appendChild(item)
        }    
    }   
}

