document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.container').classList.add('flip');
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('flip');
});