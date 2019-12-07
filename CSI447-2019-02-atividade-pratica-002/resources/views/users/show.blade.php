@extends('principal')

@section('conteudo')
    <h1> User: {{ $user->name}}</h1>

    <p>Código:  {{ $user->id }}</p>
    <p>Nome:  {{ $user->name }}</p>
    <p>Email:  {{ $user->email }}</p>
    <p>Tipo:  @if ( $user->type == 1)
    Administrador
    @endif
    @if ( $user->type == 0)
    Usuário
    @endif</p>

    <p>Data de Criação:  {{ $user->created_at }}</p>
    <p>Última Atualização:  {{ $user->updated_at }}</p>

    <!-- Voltar para a Lista //-->
    <a class="btn btn-primary" href=" {{ route('users.index')}}">Voltar</a>

    <!-- Editar  //-->
    <a class="btn btn-success" href=" {{ route('users.edit', $user->id)}}">Editar</a>


    <!-- Excluir a Cidade Corrente //-->
    <form method="post" action="{{ route('users.destroy',$user->id) }}"
          onsubmit="return confirm('Confirma Exclusão do Usuário?');">

      @csrf
      @method('DELETE')

      <input class="btn btn-danger" type="submit" value="Excluir">
    </form>



@endsection
