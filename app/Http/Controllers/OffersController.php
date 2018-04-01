<?php

namespace App\Http\Controllers;

use App\Offer;
use Illuminate\Http\Request;

class OffersController extends Controller
{
    public function index() {
        $offers = Offer::all();
        return view('index', ['offers' => $offers]);
    }

    public function create() {
        return view('offer_form');
    }

    public function store(Request $request) {
        $offer = Offer::create($request->all());

//        return $offer;

//        $view = view('include.offer', ['offer' => $offer])->render();
//        return redirect()->route('offers.index');
//        /*
        $view = view('include.offer')->with('offer', $offer)->render();
        return $view;
//        */
    }

    public function destroy($id) {
        Offer::destroy($id);
        return redirect()->route('offers.index');
    }

    public function sort(Request $request) {
        $order = $request->get('order');

        $offers = Offer::orderBy('offer_id', $order)->get();

//        return view('index', ['offers' => $offers]);

//        /*
        return view('include.offers', ['offers' => $offers])->render();
//        */
    }
}
