function validar (campo,alerta,label){

    let n = campo.value;

    if ( n.length == 0 ) {

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

function validarfornecedor (campo,alerta,label){

    let n = campo.value;

    if ( n<1 || n>5) {

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

function validarnum (campo,alerta,label){

    let n = campo.value;

    if ( n.length == 0 || isNaN(parseFloat(n)) ) {

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





function cadastrar(){

  let n1 = document.dados.nome;
  let n2 = document.dados.medida;
  let n3 = document.dados.mercado;
  let n4 = document.dados.peso;
  let n5 = document.dados.valor;
  let n6 = document.dados.estoque;
  let n7 = document.dados.fornecedor;

  validar(n1, "alertanome", "labelnome")
  validar(n2, "alertamedida", "labelmedida")
  validarnum(n4, "alertapeso", "labelpeso")
  validarnum(n5, "alertavalor", "labelvalor")
  validarnum(n6, "alertaestoque", "labelestoque")
  validarfornecedor(n7, "alertafornecedor", "labelfornecedor")
  validar(n3, "alertamercado", "labelmercado")

}
