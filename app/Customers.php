<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    public $timestamp = false;
    protected $table = 'customers';


    public static function getCustomer() {
    	return Customers::all();
    }
}
