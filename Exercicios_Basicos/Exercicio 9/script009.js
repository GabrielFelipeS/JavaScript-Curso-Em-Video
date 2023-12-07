let resp = document.querySelector('section#result')
var contar = 0

function contador() {                  
    contar++
    resp.innerHTML = `<p>O contador está com <mark>${contar}</mark> cliques</p>`;
}

function zerar() {
    contar = 0
    resp.innerText = null
}