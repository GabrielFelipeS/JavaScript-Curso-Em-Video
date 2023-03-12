function sistema(){
    var res = window.document.getElementById('res');
    var data = new Date();
    //data += new_date.getUTCFullYear()
    res.innerHTML = `O que eu recebi do sistema foi <mark>${data}</mark>`
}