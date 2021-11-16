let currentQuestion = 0;
let score = 0;
let time = -1;
let timer; //timer function
let questions = [
   {
	"question": "What is this mob?",
	"a": "Villager",
	"b": "Pillager",
	"c": "Vindicator",
	"d": "Evoker",
	"e": "Ravager",
	//"value": 1,
	"image":"quizimages/q1.jpg",
	"answer": "c"
   },
   {
	"question": "What is the crafting recipe for a Helmet?",
	"a": "4 of a material",
	"b": "5 of a material",
	"c": "6 of a material",
	"d": "7 of a material",
	"e": "8 of a material",
	//"value": 1,
	"image":"quizimages/q2.jpg",
	"answer": "b"
   },
   {"question": "What is the crafting recipe for a Book?",
	"a": "3 Paper",
	"b": "3 Paper, 1 Leather",
	"c": "3 Paper, 3 Leather",
	"d": "6 Paper, 3 Leather",
	"e": "Not craftable",
	//"value": 1,
	"image":"quizimages/q3.jpg",
	"answer": "b"
   },
   {
	"question": "What is the crafting recipe for the End Crystal?",
	"a": "1 Eye of Ender, 3 Obsidian, 5 Glass",
	"b": "1 Eye of Ender, 1 Ghast tear, 7 Glass",
	"c": "1 Eye of Ender, 1 Blaze powder, 7 Glass",
	"d": "1 Eye of Ender, 8 Glass",
	"e": "Not craftable",
	//"value": 1,
	"image":"quizimages/q4.jpg",
	"answer": "b"
   },
   {
	"question": "What is the crafting recipe for the Saddle?",
	"a": "3 Leather, 2 Iron Ingot",
	"b": "5 Leather, 3 Iron Ingot",
	"c": "3 Leather, 2 Iron Ingot, 1 String",
	"d": "5 Leather, 2 Iron Ingot, 1 String",
	"e": "Not craftable",
	//"value": 1,
	"image":"quizimages/q5.jpg",
	"answer": "e"
   },
   {
	"question": "How many hearts of health does an Enderman have?",
	"a": "10",
	"b": "15",
	"c": "20",
	"d": "25",
	"e": "30",
	//"value": 1,
	"image":"quizimages/q6.jpg",
	"answer": "c"
   },
   {
	"question": "How many hearts of health does the Ender Dragon have?",
	"a": "50",
	"b": "100",
	"c": "150",
	"d": "200",
	"e": "250",
	//"value": 1,
	"image":"quizimages/q7.jpg",
	"answer": "b"
   },
   {
	"question": "What does the Wither drop when defeated?",
	"a": "Wither Skull",
	"b": "Wither Rose",
	"c": "Nether Star",
	"d": "Netherrack",
	"e": "Netherite",
	//"value": 1,
	"image":"quizimages/q8.jpg",
	"answer": "c"
   },
   {
	"question": "What are the odds of getting a 12-eye end portal?",
	"a": "1 in 12",
	"b": "1 in 1,000",
	"c": "1 in 1,000,000",
	"d": "1 in 1,000,000,000",
	"e": "1 in 1,000,000,000,000",
	//"value": 1,
	"image":"quizimages/q9.jpg",
	"answer": "e"
   },
   {
	"question": "What item can be used to brew a Night Vision potion?",
	"a": "Golden Carrot",
	"b": "Golden Apple",
	"c": "Glistering Melon Slice",
	"d": "Magma Cream",
	"e": "Blaze Powder",
	//"value": 1,
	"image":"quizimages/q10.jpg",
	"answer": "a"
   },
   {
	"question": "What name when given to a mob will cause it to flip upside down?",
	"a": "flipit",
	"b": "notch",
	"c": "jeb_",
	"d": "Dinnerbone",
	"e": "Johnny",
	//"value": 1,
	"image":"quizimages/q11.jpg",
	"answer": "d"
   },
   {
	"question": "Which of these are not a source of Enchanted Golden Apples?",
	"a": "Dungeon chests",
	"b": "Mineshaft chests",
	"c": "Desert temple chests",
	"d": "Shipwreck chests",
	"e": "Woodland mansion chests",
	//"value": 1,
	"image":"quizimages/q12.jpg",
	"answer": "d"
   },
 ];
	

	


 function loadQuestion() {
    //if timer is running from prev question, stop it
	if (time >= 0) {
		clearInterval(timer);
	}
    // close light box for first question
    
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "60vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	document.getElementById("e").innerHTML = "E. " + questions[currentQuestion].e;
 } // loadQuestion
 
 
 function markIt(ans) {
	 
	 if (time >= 0) {
		clearInterval(timer);
	}
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score += 1;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! +1 social credit! " + score + " / " + questions.length;
    } else {
		//score -= 2;
		
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
	   
       message = "Incorrect! Your score is " + score + " / " + questions.length; 
    } // else
        
   
	
	if (currentQuestion >= questions.length -1) {
		// create a special message
		message = "Your score is " + score +"/"+ questions.length;
		if (score == 12) {
			message += "<br>You're a hardcore Minecraft fan";
		} else if (score >= 9) {
			message += "<br>You're a casual Minecraft player";
		} else {
			message += "<br>Get outta here, scrub";
		}
		document.getElementById("retrybox").style.display = "block";
		
	}
	
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
	
	
    // move to the next question
    currentQuestion++;
    /*if (currentQuestion >= questions.length) {
       // create a special message
       message = "Your score is " + score +"/10";
	   if (score == 10) {
		   message += "<br>You're a hardcore Minecraft fan";
		} else if (score >= 8) {
			message += "<br>You're a casual Minecraft player";
		} else {
			message += "<br>Get outta here, scrub";
		}
		message += "<br>Click to try again";
    } else {
       //loadQuestion();
    }*/
    
  
 }  // markIt
 
 function closeLightBox() {

	//if a new question is loaded, start timer when lightbox closes
	if (currentQuestion <= questions.length - 1) {
		document.getElementById("lightbox").style.display = "none";
		document.getElementById("retrybox").style.display = "none";
		loadQuestion();
		startTimer();
	}
 } // closeLightbox
 
 //Start timer for current question
 function startTimer() {
	 time = 4;
	 timer = setInterval(function(){
		 document.getElementById("countdown").innerHTML = time;
		 time--;
		 
		 if (time < 0) {
			 clearInterval(timer);
			 // show the lightbox
			 
			 
			 
			 document.getElementById("score").innerHTML = score + " / " + questions.length;
			 
			 let message = "";
			 if (currentQuestion >= questions.length -1) {
				// create a special message
				message = "Your score is " + score +"/"+ questions.length;
				if (score == 12) {
					message += "<br>You're a hardcore Minecraft fan";
				} else if (score >= 9) {
					message += "<br>You're a casual Minecraft player";
				} else {
					message += "<br>Get outta here, scrub";
				}
				document.getElementById("retrybox").style.display = "block";
			 } else {
			    message = "Time out! Your score is " + score + " / " + questions.length;
			 }
			 document.getElementById("lightbox").style.display = "block";
			 document.getElementById("message").innerHTML = message;
			 currentQuestion++;
		 }
	 } , 1000);
 }
 
 function retry(){
	 location.reload()
 }
 
 
 
 
 
 
 
   
