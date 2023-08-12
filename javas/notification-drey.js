
var btnAsp = document.querySelector('.container-notificare-el-btn-asp');


var anuntEl1 = document.querySelector('.container-anunt-el-1');


var anuntEl1XDiv = document.querySelector('.container-anunt-el-1-x-div');


btnAsp.addEventListener('click', function() {

    anuntEl1.classList.add('notificare-intrare');
    
    if (anuntEl1.classList.contains('notificare-iesire')) {

        anuntEl1.classList.remove('notificare-iesire');
    }
});


anuntEl1XDiv.addEventListener('click', function() {

    anuntEl1.classList.add('notificare-iesire');
    anuntEl1.classList.remove('notificare-intrare');
});
