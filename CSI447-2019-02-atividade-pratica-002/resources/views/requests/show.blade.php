@extends('principal')

@section('conteudo')
    <h1> Request: {{ $request->description}}</h1>

    <p>Código:  {{ $request->id }}</p>
    <p>Subject:  {{ $request->subject->name}}</p>
    <p>Usuário: </p>
    <p>Date:  {{ $request->date }}</p>

    <p>Data de Criação:  {{ $request->created_at }}</p>
    <p>Última Atualização:  {{ $request->updated_at }}</p>

    <!-- Voltar para a Lista //-->
    <a class="btn btn-primary" href=" {{ route('requests.index')}}">Voltar</a>
    @if ((Auth::user()->type)==1)
    <!-- Editar  //-->
    <a class="btn btn-success" href=" {{ route('requests.edit', $request->id)}}">Editar</a>


    <!-- Excluir a Cidade Corrente //-->
    <form method="post" action="{{ route('requests.destroy',$request->id) }}"
          onsubmit="return confirm('Confirma Exclusão da Request?');">

      @csrf
      @method('DELETE')

      <input class="btn btn-danger" type="submit" value="Excluir">
      @endif
    </form>






@endsection
