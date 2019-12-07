<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;


class UserController extends Controller
{
  public function __construct()
    {
        $this->middleware('auth');
    }

  public function index()
  {
      if (Auth::user()->type == 1){
        $users = User::orderBy('name')->get();
        return view ('users.index',['users'=>$users]);
      }else{
      //Retornar Erro
      session()->flash('mensagem', 'Apenas Administradores!');
      return redirect('/');
      }

  }

  public function show(User $user)
  {
      //dd($cidade);
      return view('users.show',['user'=> $user]);
  }

  public function create()
  {
      return view('users.create');
  }

  public function store(Request $request)
  {
      //Opçao 2
      User::create($request->all());

      return redirect()->route('users.index');

  }

  public function edit(User $user)
  {
    return view('users.edit',[ 'user' => $user ]);
  }

  public function update(Request $request, User $user)
  {
      $user->fill($request->all()); //Atualiza Objeto
      $user->save();                //Persiste no BD

      session()->flash('mensagem', 'User Atualizado com sucesso!');
      return redirect()->route('users.index');
  }

  public function destroy(User $user)
  {
      //Validação - verificar se o registro pode ser excluido

      $user->delete();

      return redirect()->route('users.index');

  }
}
