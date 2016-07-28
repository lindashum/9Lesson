$(document).ready(function(){ //make sure this doesn't load prematurely
	$("#txt").css("color","blue");//changes all the ids in the .cssdocument to the color blue
	//remainders use the % symbol//


	function startTime() { //can call this anything//
		var today= new Date (); //var is a holder for a data value//
		var h= today.getHours();
		var m= today.getMinutes();
		var s= today.getSeconds();
		h=correctTime(h);		
		m=checkTime(m); //renaming it later on in function checkTime
		s=checkTime(s);
		textColor(m);
		backGround(m);
		fontSize(h);
		indexCheck(index);
		var d= amPm(h);

//OUTPUT//
		//displaying the time within the div with id of 'txt'//	
			// document.getElementbyID('txt').innerHTML = h + ":" + m +":" +s;
		$('#txt').html (h + ":" + m +":" + s + d);
		//two arguments - the function stated above, time); - this is saying in half a second (milliseconds), start the time out. 
		setTimeout(startTime, 500);
	};




	function checkTime(i) {   //responsible for ensuring all digits are double digits//
	//we are renaming checkTime "i" so you can set conditions - we want to make sure that seconds less than 10 get displayed as 01, 02, 03, etc. as needed
		if (i<10){
			i="0" + i 
		}
		return i; 
	};

	function amPm(i){ //this has to happen before "correctTime"
		if(i<12){
			return " AM";
		}
		else {
			return " PM";
		}
	};

	//responsible for setting standard time - does need an argument because it needs to "check" the standard value//
	function correctTime(i) {  //can call this function anything//
		if (i>12){
			i= i - 12;
		}

		if (i<12){
			i= "0" + i;
		}
		return i;
	};

	function textColor(i){
		if(i % 2 === 1){
		return  $("#txt").css("color","red");//changes all the ids in the .cssdocument to the color blue
		}
		else{
			return $("#txt").css("color","blue");//changes all the ids in the .cssdocument to the color blue
		}
	};

	
	// function backGround(i){
	// 	if (i%5 === 0){
	// 		$('body').css("background-color","lightpink");//changes all the ids in the .cssdocument to the color
	// 	}
	// 	else if (i % 10 === 0){
	// 		$('body').css("background-color","lightgreen");//changes all the ids in the .cssdocument to the color 
	// 	}	
	// };

var random = [red, blue, green, yellow];
	function backGround(i){
		if (i%5 === 0){
			$('body').css("background-color", random[math.floor(math.random()*random.length)])
		else if (i % 10 === 0){
			$('body').css("background-color", random[math.floor(math.random()*random.length)])
		}	
	};


	function randomBackground(i){

	}

	var sizes = [8, 18, 28, 38];
	var index = 0;

	function fontSize(i){
		if (i%2===0){
			$('body').css("font-size",sizes[index]+"px"); //changes all the ids in the .cssdocument to the color blue
			index=index+1;
		}
	};
	function indexCheck(i){
		if (i>(sizes.length-1)){
			index=0
		}
		//cycle through//
	};
	startTime()
	textColor()		

});
