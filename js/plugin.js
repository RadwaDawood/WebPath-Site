
$(document).ready(function(){
    
    $('.navbar-brand').addClass('animated');
    
    $('.navbar-brand').click(function(){
        
        var $navbar = $(this);
        
        $navbar.css('border',' 2.5px solid #000');
        $navbar.css ('border-radius', '7px');
        $navbar.css('padding','5px');  
        $navbar.css('font-size','1em');
   /*     $(this).animate({
            
            margin:'10px',
            borderWidth :' 4px ',
            borderStyle : 'solid',
            borderColor : '#000',
            borderRadius : '10px'
        }); */
    });
    $('.details').click(function(){

        $('.links').toggle(1000);
        $('.links-end').slideToggle(1000);

    }) ;
    
    $('.checked').click(function(){
        
        $(this).hide();
        $('.more').slideToggle('fast');
    });
    
    
    $('.less').click(function(){
        
        $('.more').slideToggle('fast');
        $('.checked').show();
    });

});


/*$(document).ready(function(e){ 
    
$('.colorbox').find('a').colorbox({
        'rel' : 'images',
		'maxWidth' : '90%',
        'maxHeight' : '80%',
		'transition' : "fade",
		'opacity' : 0.5,
        'scalePhotos' : true,
        
        
    
}) ;
    
$('.colorbox').find('iframe').colorbox({
    
    'href' : 'https://www.youtube.com/watch?v=2-akTTZyrcM' ,
    'iframe' : true,
    'maxWidth' : '50%',
    'maxHeight' : '80%',
    
}) ;     
    
});  */



var circle = document.getElementById('circle').getContext('2d');

circle.fillStyle = "rgba(100,0,228,0.3)"; //===rgba(187, 158, 224,0.6);
circle.beginPath();
circle.arc(130,60,50,0, 2*Math.PI);
circle.fill();

circle.fillStyle = "rgba(100,0,228,1)";
circle.beginPath();
circle.arc(150,50,50,0, 2*Math.PI);
circle.fill();


var triangle = document.getElementById('triangle').getContext('2d');

triangle.fillStyle = "rgba(100,0,228,0.3)";
triangle.beginPath();
triangle.moveTo(150,5);
triangle.lineTo(50,90);
triangle.lineTo(180,120);
triangle.fill();

triangle.fillStyle = "rgba(100,0,228,1)";
triangle.beginPath();
triangle.moveTo(170,0);
triangle.lineTo(70,85);
triangle.lineTo(190,110);
triangle.fill();


var square = document.getElementById('square').getContext('2d');

square.fillStyle =  "rgba(100,0,228,0.3)";
square.beginPath();
square.moveTo(190,10);
square.lineTo(100,20);
square.lineTo(110,108);
square.lineTo(203,90);
square.fill();

square.fillStyle =  "rgba(100,0,228,1)";
square.beginPath();
square.moveTo(190,0);
square.lineTo(112,10);
square.lineTo(125,95);
square.lineTo(210,80);
square.fill();




