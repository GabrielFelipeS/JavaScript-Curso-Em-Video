function analise(){
    var res = document.getElementById('res');
    var new_date = new Date(); 
    var meses = new Array ('Jan', 'Fev', 'Mar', 'Abri', 'Mai', 'Jun' , 'Jul','Ago', 'Set', 'Out', 'Nov', 'Dez')
    var semanas =  new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    var dia = new_date.getDate()
    var mes = new_date.getMonth()
    var ano = new_date.getUTCFullYear()
    var sem = new_date.getDay()
    var hora = new_date.getHours()
    var minuto = new_date.getMinutes()
    var segundo = new_date.getSeconds()

    res.innerHTML = `<p>Dia: <mark>${dia}</mark></br></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></br> </p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></br></p> `
    res.innerHTML += `<p>Dia da semana: <mark>${semanas[sem]}</mark></br></p> `
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></br></p> `
    res.innerHTML += `<p>Minuto: <mark>${minuto}</mark></br></p>`
    res.innerHTML += `<p>Segundos: <mark>${segundo}</mark></p>`
}