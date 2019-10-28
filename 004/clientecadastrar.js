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

function validartelefone (campo,alerta,label){
    let n = campo.value;
    if (n.length<10 || n.length>11 || isNaN( parseInt(n)  ) ){
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

function validarcidade (campo,alerta,label){

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


function cadastrar(){

  let n1 = document.dados.cpf;
  let n2 = document.dados.telefone;
  let n3 = document.dados.nome;
  let n4 = document.dados.endereco;
  let n5 = document.dados.cidade;
  let n6 = document.dados.data;
  let n7 = document.dados.genero;

  validarcpf(n1, "alerta1", "labelcpf")
  validartelefone(n2, "alerta2", "labeltelefone")
  validar(n3, "alertanome", "labelnome")
  validar(n4, "alertaendereco", "labelendereco")
  validarcidade(n5, "alertacidade", "labelcidade")
  validar(n6, "alertadata", "labeldata")
  validar(n7, "alertagenero", "labelgenero")
}
