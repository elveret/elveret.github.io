

$(function(){

    $('.mobile_menu_click').on('click', function() {
       $('.page-wrap__header-menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});
