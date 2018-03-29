@if(isset($offers) and count($offers) > 0)
    @foreach($offers as $offer)
        @include('include.offer')
    @endforeach
@else
    <h2 class="mt-5 text-center empty-offers">🤷 Акции отсутствуют️</h2>
@endif