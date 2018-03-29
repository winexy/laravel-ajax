<div class="row">
    <div class="col-md-10 offset-md-1 mt-5 mb-5">
        <hr>
        <form action="/offers/create" method="POST" id="offer-create">
            <div class="form-row">
                <div class="col-md-6">
                    <label for="title">Название</label>
                    <input type="text" id="title" name="offer_title" class="form-control" placeholder="Название">
                </div>
                <div class="col-md-6">
                    <label for="price">Цена</label>
                    <input type="number" id="price" name="offer_price" class="form-control" placeholder="Цена">
                </div>
            </div>
            <div class="form-group mt-1">
                <label for="description">Описание</label>
                <textarea type="text" id="description" name="offer_description" class="form-control" placeholder="Описание"></textarea>
            </div>
            {{ csrf_field() }}
            <button class="btn btn-outline-warning btn-block btn-lg" id="save-offer-button">Сохранить</button>
        </form>
    </div>
</div>