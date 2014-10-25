$(document).ready(function(){

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    $('.section').each(function(){
        var $obj = $(this);
         
        $(window).scroll(function() {
            var yPos = -( $(window).scrollTop() / $obj.data('speed') );
            var bgpos = '50% '+ yPos + 'px';
         
            $obj.css('background-position', bgpos );
        });
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        $(".navbar-collapse").removeClass("in");
        event.preventDefault();
    });

    //Calculando minha idade atual.
    var dt_nascimento = new Date(1991,10,31);
    var hoje = new Date();        

    var dayDiff = Math.ceil(hoje.getTime() - dt_nascimento.getTime()) / (1000 * 60 * 60 * 24 * 365);
    var idade = parseInt(dayDiff);
    $('.idade-atual').html(idade);

});