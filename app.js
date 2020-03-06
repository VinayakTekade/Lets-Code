$(window).on('load', function(){
    
    //Terminal
     $("#terminal").click(function(){
        $('.popup').show();
        $('#terminal-popup').show();
     });
     $('.popupCloseButton').click(function(){
        $('.popup').hide();
        $('#terminal-popup').hide();
     });

     
});