<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'OffersController@index')
    ->name('offers.index');

Route::get('offers/create', 'OffersController@create')
    ->name('offers.create');

Route::post('offers/create', 'OffersController@store')
    ->name('offers.store');

Route::get('offers/delete/{id}', 'OffersController@destroy');

Route::get('offers/sort', 'OffersController@sort');
