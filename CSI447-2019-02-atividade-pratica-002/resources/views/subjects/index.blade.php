@extends('principal')

@section('conteudo')

  @if (isset(Auth::user()->id))
      <a href = "{{route('subjects.create')}}">  New Subject </a>
  @endif



  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($subjects as $s)
      <tr>
        <td>{{ $s->id }}</td>
        <td>{{ $s->name }}</td>
        <td>{{ $s->price }}</td>
        <td>
          @if (isset(Auth::user()->id))
              <a href = "{{route('subjects.show', $s->id)}}">  Exibir </a>
          @endif
        </td>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
