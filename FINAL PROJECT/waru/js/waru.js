$(document).ready(function(){

   console.log("here"); //log to show that it works so far

function signs() {
var start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex;

// with (document.zodiac.sign){

// if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Aquarius";}
// if (month == 1 && date > 31) {value = "Huh?";}
// if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Pisces";}
// if (month == 2 && date > 29) {value = "Say what?";}
// if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
// if (month == 3 && date > 31) {value = "OK.  Whatever.";}
// if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Taurus";}
// if (month == 4 && date > 30) {value = "I'm soooo sorry!";}
// if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gemini";}
// if (month == 5 && date > 31) {value = "Umm ... no.";}
// if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
// if (month == 6 && date > 30) {value = "Sorry.";}
// if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
// if (month == 7 && date > 31) {value = "Excuse me?";}
// if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
// if (month == 8 && date > 31) {value = "Yeah. Right.";}
// if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
// if (month == 9 && date > 30) {value = "Try Again.";}
// if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Scorpio";}
// if (month == 10 && date > 31) {value = "Forget it!";}
// if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagittarius";}
// if (month == 11 && date > 30) {value = "Invalid Date";}
// if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricorn";}
// if (month == 12 && date > 31) {value = "No way!";}
// }

x = (start - birthyear) % 12
with (document.zodiac.sign){
if (x == 1 || x == -11) {value = "Rat";}
if (x == 0) {value = "Ox";}
if (x == 11 || x == -1) {value = "Tiger";}
if (x == 10 || x == -2) {value = "Rabbit";}
if (x == 9 || x == -3)  {value = "Dragon";}
if (x == 8 || x == -4)  {value ="Snake";}
if (x == 7 || x == -5)  {value = "Horse";}
if (x == 6 || x == -6)  {value = "Sheep";}
if (x == 5 || x == -7)  {value = "Monkey";}
if (x == 4 || x == -8)  {value = "Rooster";}
if (x == 3 || x == -9)  {value = "Dog";}
if (x == 2 || x == -10)  {value = "Pig";}  
}
}
});
//  End -->


 //   // $("#city-type").on("click", function(e) {
 //   // 		e.preventDefault();
 //   // 		console.log("city type clicked")

 //   //Add "NYC", "SF", "LA", "ATX", "SYD" to the dropdown menu selection
 //   		var arrayCity = ["NYC", "SF", "LA", "ATX", "SYD"];
      
 //      //Creating a for loop by calling arrayCity
 //      for (var i = 0; i <= 4; i++) {
 //       $("#city-type").append($("<option>"+arrayCity[i]+"</option>"))
 //      };

	// $("#city-type").change(function() { //creating an event function when update button is clicked
	// 	var city = $("#city-type").val(); //recording the city input by user
	// 	console.log(city);  //log to show that it works so far
	// 	$("#city-type").val(""); //Reset the user input field after it is submitted

	// 	//changing out photos per user input
	// 	if(city === "NYC" || city === "NY" || city === "New York" || city === "New York City" || 
	// 		city === "nyc" || city === "ny" || city === "new york" || city === "new york city") {
	// 		$("body").addClass("nyc");
	// 		$("body").removeClass("sf la austin sydney");
	// 		$("#city-type").val("Too busy!"); //Reset the user input field after it is submitted to the value given
	// 	}
	// 	else if(city === "SF"|| city === "San Francisco" || city === "san francisco" || city === "sf") {
	// 		$("body").addClass("sf");
	// 		$("body").removeClass("nyc la austin sydney");
	// 		$("#city-type").val("Such a beautiful city!"); //Reset the user input field after it is submitted to the value given
	// 	}
	// 	else if(city === "LA" || city === "Los Angeles" || city === "la" || city === "lax" || city === "LAX") {
	// 		$("body").addClass("la");
	// 		$("body").removeClass("sf nyc austin sydney");
	// 		$("#city-type").val("For celebrities only!"); //Reset the user input field after it is submitted to the value given
	// 	}
	// 	else if(city === "ATX" || city === "Austin" || city === "atx" || city === "austin") {
	// 		$("body").addClass("austin");
	// 		$("body").removeClass("sf la nyc sydney");
	// 		$("#city-type").val("Too hot for me!"); //Reset the user input field after it is submitted to the value given
	// 	}
	// 	else if(city === "SYD" || city === "Sydney" || city === "syd" || city === "sydney") {
	// 		$("body").addClass("sydney");
	// 		$("body").removeClass("sf la austin nyc");
	// 		$("#city-type").val("Must visit!"); //Reset the user input field after it is submitted to the value given
	// 	}

// })

// });