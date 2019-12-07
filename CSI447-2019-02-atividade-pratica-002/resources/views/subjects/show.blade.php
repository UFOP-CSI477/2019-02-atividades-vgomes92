@extends('principal')

@section('conteudo')
    <h1> Subject: {{ $subject->name}}</h1>

    <p>Código:  {{ $subject->id }}</p>
    <p>Nome:  {{ $subject->name }}</p>
    <p>Preço:  {{ $subject->price }}</p>

    <p>Data de Criação:  {{ $subject->created_at }}</p>
    <p>Última Atualização:  {{ $subject->updated_at }}</p>

    <!-- Voltar para a Lista //-->
    <a class="btn btn-primary" href=" {{ route('subjects.index')}}">Voltar</a>

    <!-- Editar  //-->
    <a class="btn btn-success" href=" {{ route('subjects.edit', $subject->id)}}">Editar</a>


    <!-- Excluir a Cidade Corrente //-->
    <form method="post" action="{{ route('subjects.destroy',$subject->id) }}"
          onsubmit="return confirm('Confirma Exclusão da Subject?');">

      @csrf
      @method('DELETE')

      <input class="btn btn-danger" type="submit" value="Excluir">
    </form>



@endsection
