$(document).ready(function(){

$('.summarize__button').on('click', function(){

    $(".modal").addClass('modal_active');

})

$('.modal__close').on('click', function(){

    $(".modal").removeClass('modal_active');

})

})
