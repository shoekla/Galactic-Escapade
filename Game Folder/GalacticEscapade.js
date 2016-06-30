$(document).ready(function() {
var audio = $("audio")[0];
    audio.play();
//sets the variables

var sec=0;

var min=0;

var limit= 300;

var limitBad= 400;

var speed=3000;

var score=0;

var boxLeft=30;

var level=1;

var lives= 7;

paused=false;

var mouseoff = 13;

var planet=1;




if(lives >= 6){
lives==6;

}
$("#scon").click(function(){
    
	$('#ss').slideUp(1000);
	$('#scon').slideUp(1000);
	$('#sss').slideUp(1000);
	level=7;
	lives=nlives;
	score=nscore;
	speed= speed;
	boxLeft=15;
	



});

$('#pause').click(function(){
   pause===true;
}) ;

$('#PSB').click(function(){
   $('#PS').hide();
 }) ;



$('#continue').click(function(){
   $('#continue').slideUp(1000);
   $('#story').slideUp(1000);
	$("#rule").show();
}); 

$('#con').click(function(){
   var name= prompt("What is your name?");
   $('#con').slideUp(1000);
	$("#story").show();
	$('#story').html('This is the year 2092. The Earth is almost detroyed by external attacks such as solar flares and alien attacks.You are the Astronaut '+ name +' who searches space for human improvment A.K.A a Galactic runner. NASA finds a mysterious element unlike any other on the periodic table. They send you on a mission to retrive it. With it a sheild could be activated to prevent any external attacks and NASA is almost certian that any major  Disease should be cured with this element.The element is on the Dwarf Planet of Pluto. Your Mission retrieve the unknown element and save Earth...');
	$('#continue').show();

	

}) 



///removes the instructions




$('#begin').click(function(){

	$('#info').slideUp(1000);
$('#rule').slideUp(1000);
$('#story').slideUp(1000);

	

}) 




$('#begun').click(function(){

	$('#win').slideUp(1000);
		$('#loose').slideUp(1000);
	$('#begun').slideUp(1000);
$('#story').slideDown(1000);
	$('#continue').slideDown(1000);

}) 
$('#began').click(function(){
    
	$('#win').slideUp(1000);
	$('#loose').slideUp(1000);
	$('#began').slideUp(1000);
$('#story').show();
	$('#continue').show();
	

}) 

$("#startback").click(function(){
$("#gallery").hide();
})

$("#stat").click(function(){
$("#gallery").show();
})

$("#erisback").click(function(){
$("#gallery").show();
$("#eris").hide();
});

$(".erisstat").click(function(){
$("#gallery").hide();
$("#eris").show();
});

$(".ceresstat").click(function(){
$("#gallery").hide();
$("#ceres").show();
});

$("#ceresback").click(function(){
$("#gallery").show();
$("#ceres").hide();
});

$(".plutostat").click(function(){
$("#gallery").hide();
$("#pluto").show();
});
$("#plutoback").click(function(){
$("#gallery").show();
$("#pluto").hide();
});

$(".nepstat").click(function(){
$("#gallery").hide();
$("#neptune").show();
});
$("#nepback").click(function(){
$("#gallery").show();
$("#neptune").hide();
});

$(".urstat").click(function(){
$("#gallery").hide();
$("#Uranus").show();
});
$("#Uranusback").click(function(){
$("#gallery").show();
$("#Uranus").hide();
});

$(".satstat").click(function(){
$("#gallery").hide();
$("#saturn").show();
});
$("#saturnback").click(function(){
$("#gallery").show();
$("#saturn").hide();
});

$(".jupstat").click(function(){
$("#gallery").hide();
$("#jup").show();
});
$("#jupback").click(function(){
$("#gallery").show();
$("#jup").hide();
});

$(".marsstat").click(function(){
$("#gallery").hide();
$("#mars").show();
});
$("#marback").click(function(){
$("#gallery").show();
$("#mars").hide();
});

$(".earthstat").click(function(){
$("#gallery").hide();
$("#earth").show();
});
$("#earthback").click(function(){
$("#gallery").show();
$("#earth").hide();
});


	

$('#title').html('Planet: Earth');







//sets the dificulty by changing the variables

$('#easy').click(function(){

	speed=1700;

	limit=300;

	limitBad= 400;

	$('#easy').css('background-color','green');	

	$('#hard').css('background-color','red');

	$('#extreme').css('background-color','red');

	boxLeft=30;

	

});




$('#hard').click(function(){

	speed=1500;

	limit=200;

	limitBad= 300;

	$('#easy').css('background-color','red');	

	$('#hard').css('background-color','green');

	$('#extreme').css('background-color','red');

	boxLeft=35;

});




$('#extreme').click(function(){

	speed=1450;

	limit=100;

	limitBad= 200;

	$('#easy').css('background-color','red');	

	$('#hard').css('background-color','red');

	$('#extreme').css('background-color','green');

	boxLeft=40;

});




var box     = $("#box");

    var boxSize = {

        height: box.height(),

        width : box.width()

    };

    





$('#bottom').html(min+":"+sec);







//colision															

 function testCollision(position1, size1, position2, size2, el) {

        if (((position1.left + size1.width)  > position2.left) &&

            ((position1.top  + size1.height) > position2.top)  &&

            ((position2.left + size2.width)  > position1.left) &&

            ((position2.top  + size2.height) > position1.top)) {

            

            

        

        

        	if(el.hasClass('newBlock')){

        		 score++;

        		 boxLeft--;

        		$('#score').html('Score :<br/>'+ score);

        		$('#boxLeft').html('Boxes left :<br/>'+ boxLeft);

        		el.remove();

        		mouseoff+=5

        		

       } else if(el.hasClass('badBlock')) { 

       			score--;

       			lives--;

        		$('#score').html('Score :<br/>'+ score);

        		el.remove();

        		$('#lives').html('Lives :<br/>'+ lives);

        		mouseoff-=5

        }else if (el.hasClass('lifeBlock')) {

        		lives++;

        		el.remove();

        		$('#lives').html('Lives :<br/>'+ lives);

        };

    		

        	if(boxLeft ==0){

        		level++;

        		speed-=50;

        		limit-=10;

        		limitBad-=10;

        		lives++;

        		

        		$('#box').css('width','20px');

        		boxSize.width= 20;

        		$('#level').html('Level :<br/>'+ level);

        		$('#lives').html('Lives :<br/>'+ lives);

        		clearInterval(dropBox);

				clearInterval(baddropBox);

				mouseoff=10;

				$('#other').css('width','100%');

				

//calls function again                                                           calls function again 

					function fallBlock(el){

			el.animate({ 'top': '90%' },speed, function(){$(this).remove();});	

			

		

			}
		
			

			if(level==1){

			    $('#title').html('Planet: Earth');

			    boxLeft=30;
			    
			    	
			    $('#level1').show();
			     
			    	 

			}else if(level==2){
			    
            $('#title').html('Planet: Mars');
		   
		    boxLeft=35;
		    
		    
	       $('#level1').slideUp(1000);
			    $('#level2').show();
			     
	
			
		
		
		
			
        
		
            }else if(level==3){

			    $('#title').html('Meteriod Belt');

			    boxLeft=40;
			    
                    
			      $('#level2').slideUp(1000);
			    $('#level3').show();
			     
		

			}else if(level==4){

			    $('#title').html('Planet: Juptier');

			    boxLeft=45;
			    $('#level3').slideUp(1000);
			    $('#level4').show();
			     

			}else if(level==5){

			    $('#title').html('Planet: Saturn');

			    boxLeft=50;
			    $('#level4').slideUp(1000);
			    $('#level5').show();
			     

			}else if(level==6){

			    $('#title').html('Planet: Saturns Moon');

			    boxLeft=15;
			    
			   $('#level5').slideUp(1000);
			    $('#level6').show();
			     
			    nlives=lives;
			    nscore=score;
                $('#ss').show();
                $('#scon').show();

			}else if(level==7){
			    $('#title').html('Planet: Saturn');

			    boxLeft=50;
			    
			    $('#level6').slideUp(1000);
			    $('#level7').show();
			     
			    }else if(level==8){
			        $('#title').html('Planet: Jupiter');

			    boxLeft=50;
			     $('#level6').slideUp(1000);
			    $('#level7').slideUp(1000);
			    $('#level8').show();
			     
			    
			        }else if(level==9){
			            $('#title').html('Meteriod Belt');                                 boxLeft=45;
			            $('#level8').slideUp(1000);
			    $('#level9').show();
			     
			            
			            }else if(level==10){
			     $('#title').html('Planet: Mars');                                 boxLeft=45;
			     $('#level9').slideUp(1000);
			    $('#level10').show();
			     
			            }else if(level==11){
			     $('#title').html('Planet: Earth');                                 boxLeft=45;
			     $('#level10').slideUp(1000);
			    $('#level11').show();
			     
			            }else if(level==12){
                $('#level11').slideUp(1000);
			    
			     
			      $('#win').show();
			      $('#begun').show();
			      $('wow').slideUp(1000);
		$('#began').click(function(){
                $('#wow').slideUp(1000);
	$('#win').slideUp(1000);
$('#story').show();
	$('#continue').show();

}) ;
			      	};
			      	
        	

        	dropBox = setInterval(function(){

			var new_block = $('.good').clone().addClass('newBlock').addClass('col').removeClass('good').css({top:'-5px',left:Math.floor(Math.random()*95)+"%"}).insertAfter($('.good'));

			fallBlock(new_block);

			},limit);




		

//inserts the bad bricks	

	

			baddropBox = setInterval(function(){

			var badBlock = $('.bad').clone().addClass('badBlock').addClass('col').removeClass('bad').css({top:'-5px',left:Math.floor(Math.random()*95)+"%"}).insertAfter($('.bad'));				fallBlock(badBlock);

			},limitBad);	

	

        		

        	}

        	if (lives==0) {
        	    
            $('#title').html('Dwarf Planet: Eris');
            
        		clearInterval(myCounter);

				clearInterval(dropBox);

				clearInterval(baddropBox);

				clearInterval(lifedropBox);
				
				score=0;

				$('#bottom').html(min+":"+sec);

				$('#box').css('width','20px');

				$('#score').html('Score :<br/>'+ score+'<br/> GAME OVER');

				$('.col').remove();

				boxSize.width= 20;

				$('#easy').click();

				min=0;

				sec=0;

				mouseoff=13

				$('#other').css('width','100%')
				 $("#loose").show();
				 $('#began').show();
				$('#level1').slideUp(1000);
			    $('#level2').slideUp(1000);
		        $('#level3').slideUp(1000);
			    $('#level4').slideUp(1000);
                $('#level5').slideUp(1000);
			    $('#level6').slideUp(1000);
			    $('#level7').slideUp(1000);
			    $('#level8').slideUp(1000);
			    $('#level9').slideUp(1000);
			    $('#level10').slideUp(1000);
				$('#level11').slideUp(1000);
			    

        	};







    }

}

//starts the game

$('#start').click(function(){

//resets variables

    $('#title').html(' Planet: Earth');
    score=0;
    lives= 9;
    boxLeft=30;

	level=1;


 $('#level1').show();
	
	

	

	$('#score').html('Score :<br/>'+ score);

	$('#lives').html('Lives :<br/>'+ lives);

//detects collision

$('#level').html('level :<br/>'+ level);

$('#boxLeft').html('Boxes left :<br/>'+ boxLeft);




//sets the box catcher movement

	$('#other').mousemove(function(event) {

	$('#box').offset({left: (event.pageX-mouseoff)});

});




// clock timer

	myCounter = setInterval(function () {

    if(sec<59){

    sec += 1;

    $('#bottom').html(min+":"+sec);}

    else{

		min+=1;

		sec-=59;

		$('#bottom').html(min+":"+sec);

    }

}, 1000);










	function fallBlock(el){

		el.animate({ 'top': '90%' },speed, function(){$(this).remove();});

	}

		

//inserts new good blocks

		dropBox = setInterval(function(){

		var new_block = $('.good').clone().addClass('newBlock').addClass('col').removeClass('good').css({top:'-5px',left:Math.floor(Math.random()*95)+"%"}).insertAfter($('.good'));

		fallBlock(new_block);

		},limit);




		

//inserts the bad bricks	

	

		baddropBox = setInterval(function(){

		var badBlock = $('.bad').clone().addClass('badBlock').addClass('col').removeClass('bad').css({top:'-5px',left:Math.floor(Math.random()*95)+"%"}).insertAfter($('.bad'));

		fallBlock(badBlock);

		},limitBad);	

	

//inserts the lives blocks

		lifedropBox = setInterval(function(){

		var lifeBlock = $('.ugly').clone().addClass('lifeBlock').addClass('col').removeClass('ugly').css({top:'-5px',left:Math.floor(Math.random()*95)+"%"}).insertAfter($('.ugly'));

		fallBlock(lifeBlock);

		},5000);













});







collisionBox=setInterval(function(){$('.col').each(function(){

		var new_blockSize = {height: $(this).height(), width: $(this).width()};




	// calls the function

	testCollision(box.position(), boxSize, $(this).position(), new_blockSize,$(this));




});},10)



	










//stops the game

$('#stop').click(function(){

	min=0;

	sec=0;
	
		$('#level1').slideUp(1000);
			    $('#level2').slideUp(1000);
		        $('#level3').slideUp(1000);
			    $('#level4').slideUp(1000);
                $('#level5').slideUp(1000);
			    $('#level6').slideUp(1000);
			    $('#level7').slideUp(1000);
			    $('#level8').slideUp(1000);
			    $('#level9').slideUp(1000);
			    $('#level10').slideUp(1000);
				$('#level11').slideUp(1000);
        
		clearInterval(myCounter);

		clearInterval(dropBox);

		clearInterval(baddropBox);

		clearInterval(lifedropBox);

		$('#bottom').html(min+":"+sec);

		$('#box').css('width','20px');

		$('#easy').click();

		boxSize.width= 20;

		$('.col').remove();

		mouseoff=13;

		$('#other').css('width','100%')

		 $('#title').html('Game Cancelled');

$('#info').slideDown(1000);
$("#story").show();
	$("#continue").show();
		

});







$('#began').click(function(){

	min=0;

	sec=0;

		clearInterval(myCounter);

		clearInterval(dropBox);

		clearInterval(baddropBox);

		clearInterval(lifedropBox);

		$('#bottom').html(min+":"+sec);

		$('#box').css('width','20px');

		$('#easy').click();

		boxSize.width= 20;

		$('.col').remove();

		mouseoff=13

		$('#other').css('width','100%')

		 $('#title').html('Game Cancelled');
		 

$('#began').slideUp(1000);

		$('#info').slideDown(1000);

});
$('#begun').click(function(){
    
    	min=0;

	sec=0;

		clearInterval(myCounter);

		clearInterval(dropBox);

		clearInterval(baddropBox);

		clearInterval(lifedropBox);

		$('#bottom').html(min+":"+sec);

		$('#box').css('width','20px');

		$('#easy').click();

		boxSize.width= 20;

		$('.col').remove();

		mouseoff=13;

		$('#other').css('width','100%');



		 $('#title').html("You Won");
		 
$('#begun').slideUp(1000);


		$('#info').slideDown(1000);

});



});
		
		
		
		
