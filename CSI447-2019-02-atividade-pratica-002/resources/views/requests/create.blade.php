@extends('principal')

@section('conteudo')

  <form method="post" action="{{ route('requests.store') }}">
    @csrf

    <p>Descrição: <input type="text" name="description"></p>
    <p>Subject: </p>
    <select name="subject_id">

      @foreach ($subjects as $s)
        <option value="{{ $s->id }}">{{ $s->name }}</option>
      @endforeach

    </select>
    <p>Data: <input type="date" name="date"></p>

    <input type="submit" name="btnSalvar" value="Incluir">

  </form>

@endsection
