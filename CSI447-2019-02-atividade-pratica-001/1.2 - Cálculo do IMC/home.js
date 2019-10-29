function validar(campo, alerta, label) {

  let n = campo.value;

  if ( n.length == 0 || isNaN( parseFloat(n) )  ) {

    // Erro
    // Exibir alerta:
    document.getElementById(alerta).style.display = "block";

    // Reporte o campo como inválido
    campo.classList.add("is-invalid");

    // Reportar o label como inválido/atenção:
    document.getElementById(label).classList.add("text-danger");


    // Finalizar
    campo.value = "";
    campo.focus();
    return false;

  }

  // Tudo correto
  document.getElementById(alerta).style.display = "none";
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");

  document.getElementById(label).classList.remove("text-danger");

  document.getElementById(label).classList.add("text-success");

  return true;

}

function calcular(){

  let peso = document.dados.peso;
  let altura = document.dados.altura;

  if ( validar(peso, "alertapeso", "labelpeso") && validar(altura, "alertaaltura","labelaltura") ) {
    let res = parseFloat(peso.value) / ((parseFloat(altura.value))*(parseFloat(altura.value)));
    var arredondado = parseFloat(res.toFixed(2));

    var string = "";

    if(arredondado<=18.5){
      string = " (Subnutrição)";
    }else if (arredondado<=24.9){
      string = " (Peso Ideal)";
    }else if (arredondado<=29.9){
      string = " (Sobrepeso)";
    }else if (arredondado<=34.9){
      string = " (Obesidade Grau 1)";
    }else if (arredondado<=39.9){
      string = " (Obesidade Grau 2)";
    }else if (arredondado>39.9){
      string = " (Obesidade Grau 3)";
    }

    document.dados.resultado.value = arredondado + string;

    let pesoinferior = 18.5*(parseFloat(altura.value))*(parseFloat(altura.value));
    let pesosuperior = 24.9*(parseFloat(altura.value))*(parseFloat(altura.value));
    var arredondado2 = parseFloat(pesoinferior.toFixed(2));
    var arredondado3 = parseFloat(pesosuperior.toFixed(2));
    document.dados.inferior.value = arredondado2 + " Kg";
    document.dados.superior.value = arredondado3 + " Kg";
  }
}
