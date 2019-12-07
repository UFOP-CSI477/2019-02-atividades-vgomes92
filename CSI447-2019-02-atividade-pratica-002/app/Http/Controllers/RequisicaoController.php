<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Requisicao;
use App\Subject;
use Auth;

class RequisicaoController extends Controller
{
  public function __construct()
    {
        $this->middleware('auth');
    }
  public function index()
  {
      $requests = Requisicao::orderBy('description')->get();
      return view ('requests.index',['requests' => $requests]);
  }

  public function create()
  {
      $subjects = Subject::orderBy('name')->get();
      return view('requests.create',[ 'subjects' => $subjects ]);
  }

  public function store(Request $request)
  {
    //Gravação
      //Opçao 1:
      $r = new Requisicao;
      $r-> description = $request->description;
      $r-> subject_id = $request->subject_id;
      $r-> date =$request->date;
      $r->save();

      return redirect()->route('requests.index');

  }

  public function show(Requisicao $request)
  {
      //dd($cidade);
      return view('requests.show',['request'=> $request]);
  }

  public function destroy(Requisicao $request)
  {

      if (Auth::user()->type == 1){
        $request->delete();
        return redirect()->route('requests.index');
      }else{
      //Retornar Erro
      session()->flash('mensagem', 'Apenas Administradores!');
      return redirect()->route('requests.index');
      }


  }

  public function edit(Requisicao $request)
  { if (Auth::user()->type == 1){
      $subjects = Subject::orderBy('name')->get();
      return view('requests.edit',[ 'subjects' => $subjects,'request' => $request ]);
    }else{
    //Retornar Erro
    session()->flash('mensagem', 'Apenas Administradores!');
    return redirect()->route('requests.index');
    }
  }

  public function update(Request $request, Requisicao $r)
  {
      $r->fill($request->all());
      $r->save();         //Persiste no BD

      session()->flash('mensagem', 'Request Atualizada com sucesso!');
      return redirect()->route('requests.index');
  }
}
