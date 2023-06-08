function contar() {
    var ainicio = window.document.getElementById('txtinicio')
    var afim = window.document.getElementById('txtfim')
    var apasso = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    var inicio = Number(ainicio.value)
    var fim = Number(afim.value)
    var passo = Number(apasso.value)
    if(inicio == '' || fim == '' || passo == '' || passo == '0') {
        res.innerHTML = `Impossivel contar`
    } else {
        for(var c = inicio; c <= fim; c++) {
        res.innerHTML = `Contando:${c}`
        } 
    }
    
}