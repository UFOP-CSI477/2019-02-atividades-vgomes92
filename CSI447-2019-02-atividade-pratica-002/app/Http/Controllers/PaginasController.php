<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaginasController extends Controller
{
  public function welcome() {
    return view('welcome');
  }

  public function index(){
    return view('principal');
  }

  public function cadastro(){
    return view('cadastro');
  }

}
