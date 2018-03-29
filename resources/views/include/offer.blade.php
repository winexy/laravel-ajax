<div class="rounded bg-light p-3 text-dark my-3">
    <form method="GET" action="/offers/delete/{{ $offer->offer_id }}" >
        <button class="float-right btn btn-outline-danger offer-delete" data-id="{{ $offer->offer_id }}">💔</button>
    </form>
    <h4><span class="badge badge-secondary">{{ $offer->offer_id }}</span> {{ $offer->offer_title }}</h4>
    <p style="word-break: break-all">{{ $offer->offer_description }}</p>
</div>