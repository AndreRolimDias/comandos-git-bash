function copiar() {
  var texto = document.getElementById("texto1");
  var texto = document.getElementById("texto2");
  texto.select();
  document.execCommand("copy");
  alert("Texto Copiado:" + texto.value);
}
