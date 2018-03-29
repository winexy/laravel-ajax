<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    //
    public $primaryKey = 'offer_id';
    public $timestamps = false;
    protected $fillable = [
        'offer_title', 'offer_description', 'offer_price'
    ];


}
