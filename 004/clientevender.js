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

function validarcpf (campo,alerta,label){
    let n = campo.value;
    if (n.length!=11 || isNaN( parseInt(n) ) ){
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

    if ( n.length==0 || isNaN( parseInt(n) )) {

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

  let n1 = document.dados.num;
  let n2 = document.dados.nomeprod;
  let n3 = document.dados.qtde;
  let n4 = document.dados.valor;
  let n5 = document.dados.cpfcliente;
  let n6 = document.dados.pagamento;

  validarnum(n1, "alertanum", "labelnum")
  validar(n2, "alertanome", "labelnome")
  validarnum(n3, "alertaqtde", "labelqtde")
  validarnum(n4, "alertavalor", "labelvalor")
  validarcpf(n5, "alertacpf", "labelcpf")
  validar(n6, "alertapagamento", "labelpagamento")
}
