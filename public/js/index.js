var deleteButtons = document.querySelectorAll('.offer-delete');
var offerForm = document.querySelector('#offer-create');
var sortButtons = document.querySelectorAll('.sort');


offerForm.addEventListener('submit', saveAxios);


deleteButtons.forEach(function(button) {
    button.addEventListener('click', deleteOfferAxios);
});
sortButtons.forEach(function(button) {
    button.addEventListener('click', sortAxios);
});


function deleteOffer(event) {
    event.preventDefault();


    var button = event.target;


    var url = '/offers/delete/';
    var id = button.dataset.id;


    var xhr = new XMLHttpRequest();


    xhr.open('GET', url + id);
    xhr.send();


    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;


        if (xhr.status !== 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            var offer = button.parentElement.parentElement;
            var offersBlock = offer.parentElement;

            offersBlock.removeChild(offer);
        }

    };


}
function save(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    const formData = new FormData(offerForm);

    xhr.open('POST', '/offers/create');
    xhr.send(formData);

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;


        if (xhr.status !== 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            emptyOffers();

            // var offer = xhr.response;
            var offer = JSON.parse(xhr.response);
            var offersBlock = document.querySelector('#offers');
            offersBlock.innerHTML += offer.html;

            var deleteButtons = document.querySelectorAll('.offer-delete');
            deleteButtons.forEach(function (button) {
                button.addEventListener('click', deleteOfferAxios);
            });
        }
    };

}


function deleteOfferAxios(event) {
    event.preventDefault();


    var url = '/offers/delete/';

    var button = event.target;
    var id = button.dataset.id;


    axios.get(url + id)
        .then(function() {
            var offer = button.parentElement.parentElement;
            var offersBlock = offer.parentElement;

            offersBlock.removeChild(offer);
        });
}
function saveAxios(event) {
    event.preventDefault();

    var formData = new FormData(offerForm);

    axios.post('/offers/create', formData)
        .then(function(response) {
            emptyOffers();

            var offersBlock = document.querySelector('#offers');

            offersBlock.innerHTML += response.data.html;

            var deleteButtons = document.querySelectorAll('.offer-delete');
            deleteButtons.forEach(function (button) {
                button.addEventListener('click', deleteOfferAxios);
            });
        });
}

function sort(event) {
    var button = event.target;

    var url = '/offers/sort?order=';
    var order = button.dataset.order;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + order);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            var offersBlock = document.querySelector('#offers');
            offersBlock.innerHTML = xhr.response;
        }
    }
}

function sortAxios(event) {
    var button = event.target;

    var url = '/offers/sort?order=';
    var order = button.dataset.order;

    axios.get(url + order)
        .then(response => {
            var offersBlock = document.querySelector('#offers');
            offersBlock.innerHTML = response.data;
        });
}

function emptyOffers() {
    if (document.querySelector('.empty-offers')) {
        document.querySelector('#offers').innerHTML = "";
    }
}