@extends('principal')

@section('conteudo')

  <form method="post" action="{{ route('users.store') }}">
    @csrf

    <p>Nome: <input type="text" name="name"></p>
    <p>Email: <input type="email" name="email"></p>
    <p>Senha: <input type="password" name="password"></p>

    <p>
    <input type="radio" name="type" value="0">Usuario</input>
    <input type="radio" name="type" value="1"/>Administrador</input>
    </p>

    <input type="submit" name="btnSalvar" value="Incluir">

  </form>

@endsection
