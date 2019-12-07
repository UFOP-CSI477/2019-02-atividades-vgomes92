<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = ['name','price'];
    // 1:N -> cidades
    public function requests() {
      return $this->hasMany('App\Requisicao');
    }
}
