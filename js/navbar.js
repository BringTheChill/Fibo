$(document).ready(function(){
$('.fibonacciToggler').on('click', function () {
    $('#info').load('teorie_si_curiozitati.html');
    $('#sirc').load('sir_c.html');
    $('#exercises').load('excercitii.html');
    $('#first').hide('first.html');
    $('#about').hide('about_us.html');
    $('#contact').hide('contact.html');
});

 $(function first() {
        $('#first').load('first.html');
    });
});




