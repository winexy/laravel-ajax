@extends('layouts.layout')

@section('content')
    <div class="row">
        <div class="col-md-10 offset-md-1 mt-5">
            <h1>Акции 🛍️</h1>
            <hr>
            <div>
                Сортировать по :
                <button class="btn btn-outline-warning sort" data-order="asc">Возрастанию</button>
                <button class="btn btn-outline-warning sort" data-order="desc">Убыванию</button>
            </div>
            <div id="offers" class="p-3">
                @include('include.offers')
            </div>
        </div>
    </div>
    @include('include.offer_form')
@endsection