# AJAX


````bash
    git clone https://github.com/winexy/laravel-ajax.git
    cd laravel-ajax
````

````bash
    composer install
    php artisan migrate
    php artisan serve
````


> пример выполнения AJAX запроса
```html
    ...
    <form id="commentForm">
       <input type="text" name="author" id="author">
       <input type="text" name="text" id="text">
       <button id="save-button">Сохранить</button>  
    </form>
    ...
    <script src="/js/index.js"></script>
```


````javascript
    var button = document.querySelector('#save-button');

    // Привязываем к нашей кнопке вызов функции
    // "createOffer" при нажатии
    button.addEventListener('click', createComment);

    // JavaScript автоматически передает в функцию событие
    function createComment(event) {
        // Предовтращает перезагрузку страницы
        event.preventDefault();

        var form = document.querySelector('#commentForm');
        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/comments/create');
        xhr.send(formData);

        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                alert(xhr.response);
            }
        }
    }
    


````
