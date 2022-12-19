function copiar() {
  var texto = document.getElementById("texto1");
  texto.select();
  document.execCommand("copy");
  alert("Texto Copiado:" + texto.value);
}
