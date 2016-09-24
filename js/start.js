/**
 * START JS
 * @author: Long lanh
 * @date: 08/8/17
 * 1. Alert a msg: test()
 * 2. Hide a popup: test2()
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
var allpage_fn = {};
/**
 * 1. Alert a msg
 * @param  {[type]}
 * @return {[type]}
 */
allpage_fn.test = function (argument) {
     /* body... */
}
/**
 * 2. Hide a popup
 * @param  {[type]}
 * @return {[type]}
 */
function test2 (argument) {
     // body...
     $("#dropdown").on('click', function(event) {
         event.stopPropagation();
         /* Act on the event */
         if ($(this).hasClass('open')) {
            $(this).removeClass('open');
         } else {
             $(this).addClass('open');
         }
     });
     $('body').on('click', function(event) {
         event.preventDefault();
         /* Act on the event */
         var $selec = $.find('#dropdown');
         if ($($selec).hasClass('open')) {
            $($selec).removeClass('open');
         }
     });
    // $("#dropdown").bind( "clickoutside", function(event){
    //     $(this).removeClass('open');
    // });
}

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    // Alert a msg
    allpage_fn.test();
    // Hide a popup
    test2();
});
/* OnLoad Window */
var init = function () {

};

window.onload = init;;