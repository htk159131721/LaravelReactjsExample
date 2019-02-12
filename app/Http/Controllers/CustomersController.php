<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customers;

class CustomersController extends Controller
{
   public function getCustomers() {
   		$data = Customers::getCustomer();
   		return response() -> json($data);
   }
}
