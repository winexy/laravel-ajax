var form = document.querySelector('#offer-create');
var offersBlock = document.querySelector('#offers');
var deleteButtons = document.querySelectorAll('.offer-delete');
var sortButtons = document.querySelectorAll('.sort');


sortButtons.forEach(function(btn) {
    // btn.addEventListener('click', sortOffers);
    btn.addEventListener('click', sortOffersAxios);
});

deleteButtons.forEach(function(btn) {
    // btn.addEventListener('click', deleteOffer);
    btn.addEventListener('click', deleteOffersAxios);
});


// form.addEventListener('submit', createOffer);
form.addEventListener('submit', createOfferAxios);

function createOffer(event) {
    event.preventDefault();


    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/offers/create');
    xhr.send(formData);

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200)
            alert(xhr.status + ': ' + xhr.statusText);
        else
            offersBlock.innerHTML += xhr.response;
    };

}
function deleteOffer(event) {
    event.preventDefault();


    var btn = event.target;
    var id = btn.dataset.id;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/offers/delete/' + id);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            var block = btn.parentElement.parentElement;
            offersBlock.removeChild(block);
        }
    };

}
function sortOffers(event) {
    var order = event.target.dataset.order;


    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/offers/sort?order=' + order);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            offersBlock.innerHTML = xhr.response;
        }
    };
}

function createOfferAxios(event) {
    event.preventDefault();

    var formData = new FormData(form);

    axios.post('/offers/create', formData)
        .then(function(response) {
            console.log(response);
            offersBlock.innerHTML += response.data;
        })
}
function deleteOffersAxios(event) {
    event.preventDefault();
    var btn = event.target;
    var id = btn.dataset.id;

    axios.get('/offers/delete/' + id)
        .then(function() {
            console.log('axios');
            var block = btn.parentElement.parentElement;
            offersBlock.removeChild(block);
        });

}
function sortOffersAxios(event) {
    var order = event.target.dataset.order;

    axios.get('/offers/sort?order=' + order)
        .then(function(response) {
            console.log('axios');

            offersBlock.innerHTML = response.data;

        });
}