<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requisicao extends Model
{
    protected $fillable = ['description','date'];

    public function subject() {
      return $this->belongsTo('App\Subject');
    }
}
