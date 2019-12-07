<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subject;

class SubjectController extends Controller
{

  public function index()
  {
      $subjects = Subject::orderBy('name')->get();
      return view ('subjects.index', [ 'subjects' => $subjects]);
  }

  public function create()
  {
      return view('subjects.create');
  }

  public function store(Request $request)
  {
      //Opçao 2
      Subject::create($request->all());

      return redirect()->route('subjects.index');

  }

  public function show(Subject $subject)
  {
      //dd($cidade);
      return view('subjects.show',['subject'=> $subject]);
  }

  public function edit(Subject $subject)
  {
    return view('subjects.edit',[ 'subject' => $subject ]);
  }

  public function update(Request $request, Subject $subject)
  {
      $subject->fill($request->all()); //Atualiza Objeto
      $subject->save();                //Persiste no BD

      session()->flash('mensagem', 'Subject Atualizada com sucesso!');
      return redirect()->route('subjects.index');
  }

  public function destroy(Subject $subject)
  {
      //Validação - verificar se o registro pode ser excluido

      $subject->delete();

      return redirect()->route('subjects.index');

  }
}
