@extends('principal')

@section('conteudo')

  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Type</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($users as $u)
      <tr>
        <td>{{ $u->id }}</td>
        <td>{{ $u->name }}</td>
        <td>{{ $u->email }}</td>
        <td>
          @if ( $u->type == 1)
          Administrador
          @endif
          @if ( $u->type == 0)
          Usuário
          @endif
          </td>
        <td><a href="{{ route('users.show', $u->id)}}">Show</a></td>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
