<?php

namespace App\Http\Controllers;
use App\Models\Products;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function read() {
        $products = Products::all();
        return("test");
    }
    
    public function create(Request $request) {
        $data = array (
            'name' => $request->name,
            'category' => $request->category,
            'image' => $request->image,
            'price' => $request->price,
            'description' => $request->description,
            'status' => $request->status,

        );
        if (Products::create($data)) return $data;
        else return("oh no! something went wrong");
    }
}
