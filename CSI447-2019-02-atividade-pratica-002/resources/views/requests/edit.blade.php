@extends('principal')

@section('conteudo')

  <form method="post" action="{{ route('requests.update', $request->id) }}">

    @csrf
    @method('PATCH')
    <p>Descrição: <input type="text" name="description" value = "{{ $request->description }}"></p>
    <p>Subject: </p>

    <select name="subject_id">

      @foreach ($subjects as $s)
        <option value="{{ $s->id }}" @if ( $s->id == $request->subject_id) selected @endif>{{ $s->name }}</option>
      @endforeach

    </select>

    <p>Data: <input type="date" name="date" value='{{$request->date}}'></p>

    <input type="submit" name="btnSalvar" value="Alterar">

  </form>

@endsection
