@extends('principal')

@section('conteudo')

  <a href = "{{route('requests.create')}}">  New Request </a>

  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Id</th>
        <th>Description</th>
        <th>Date</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($requests as $r)
      <tr>
        <td>{{ $r->id }}</td>
        <td>{{ $r->description }}</td>
        <td>{{ $r->date }}</td>
        <td><a href="{{ route('requests.show', $r->id)}}">Show</a></td>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
