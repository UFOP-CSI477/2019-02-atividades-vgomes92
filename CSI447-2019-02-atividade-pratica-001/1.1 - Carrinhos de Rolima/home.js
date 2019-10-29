var posicao = 1;
var participantes = [];

function novoCampeonato(){

  let nome = document.dados.nomeComp;
  let tempo = document.dados.tempoComp;

if (valida(nome, "alertanome", "labelnome") && validatempo(tempo, "alertatempo", "labeltempo") && validalargada(posicao)) {
  var linhaTabela = document.createElement("tr");
  var posicaolargada = document.createElement("td");
  var nomecomp = document.createElement("td");
  var tempocomp = document.createElement("td");


   posicaolargada.appendChild(document.createTextNode(posicao));
   nomecomp.appendChild(document.createTextNode(nome.value));
   tempocomp.appendChild(document.createTextNode(tempo.value));
   linhaTabela.appendChild(posicaolargada);
   linhaTabela.appendChild(nomecomp);
   linhaTabela.appendChild(tempocomp);

   document.getElementById("TabelaDados").appendChild(linhaTabela);
   competidor = {nome: nome.value, tempo: tempo.value, largada: posicao}
   participantes.push(competidor);
   posicao += 1;

  }

}


function resultado(){
  
  participantes.sort(function(a, b) {
    return a.tempo - b.tempo;
  });

  for(var i=0;i<participantes.length;i++){

    var linhaTabela2 = document.createElement("tr");
    var posicaofinal = document.createElement("td");
    var posicaolargada = document.createElement("td");
    var nomecomp2 = document.createElement("td");
    var tempocomp2 = document.createElement("td");
    var vencedor = document.createElement("td");


    nomecomp2.appendChild(document.createTextNode(participantes[i].nome));
    posicaolargada.appendChild(document.createTextNode(participantes[i].largada));
    tempocomp2.appendChild(document.createTextNode(participantes[i].tempo));

    var posicao = i+1;

    if(i>0){
      if(participantes[i].tempo == participantes[i-1].tempo){
        posicao = i;
      }
    }


    if(posicao == 1){
        vencedor.appendChild(document.createTextNode("Vencedor(a)!"));
    }else{
      vencedor.appendChild(document.createTextNode("--"));
    }

    posicaofinal.appendChild(document.createTextNode(posicao));

    linhaTabela2.appendChild(posicaofinal);
    linhaTabela2.appendChild(posicaolargada);
    linhaTabela2.appendChild(nomecomp2);
    linhaTabela2.appendChild(tempocomp2);
    linhaTabela2.appendChild(vencedor);


    document.getElementById("TabelaResultado").appendChild(linhaTabela2);

  }
  while(participantes.length) {
            participantes.pop();
          }
}

function valida (campo,alerta,label) {
  let n = campo.value;

  if ( n.length == 0) {
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

function validatempo (campo,alerta,label) {
  let n = campo.value;

  if ( n.length == 0 || isNaN( parseFloat(n) )) {
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

function validalargada (valor) {
  let n = valor;

  if ( n > 6) {
    alert("Número Máximo de Competidores Atingido!");
    return false;

  }

  return true;
}
