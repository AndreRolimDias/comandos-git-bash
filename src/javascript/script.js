function copiar() {
    var texto = document.getElementById('texto')
    texto.select()
    document.execCommand('copy')
    alert('Texto Copiado:' + texto.value)
}

