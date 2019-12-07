@extends('principal')

@section('conteudo')

  <form method="post" action="{{ route('subjects.store') }}">
    @csrf
    
    <p>Nome: <input type="text" name="name"></p>
    <p>Preço: <input type="number" name="price"></p>

    <input type="submit" name="btnSalvar" value="Incluir">

  </form>

@endsection
