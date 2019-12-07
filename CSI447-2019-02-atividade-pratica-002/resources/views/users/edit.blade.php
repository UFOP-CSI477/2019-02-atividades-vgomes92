@extends('principal')

@section('conteudo')

  <form method="post" action="{{ route('users.update', $user->id) }}">

    @csrf
    @method('PATCH')

    <p>Nome: <input type="text" name="name" value = "{{ $user->name }}"></p>
    <p>Email: <input type="email" name="email" value = "{{ $user->email }}"></p>
    <p>Senha: <input type="password" name="password" value = "{{ $user->password }}"></p>

    <p>
    <input type="radio" name="type" value="0"/>Usuario
    <input type="radio" name="type" value="1"/>Administrador
    </p>


    <input type="submit" name="btnSalvar" value="Alterar">

  </form>

@endsection
