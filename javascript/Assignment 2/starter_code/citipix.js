$(document).ready(function(){

   console.log("here"); //log to show that it works so far

var city; //declaring a value for city input

	$("#submit-btn").on("click", function(e){ //creating an event function when update button is clicked
		e.preventDefault();
		city = $("#city-type").val(); //recording the city input by user
		console.log(city);  //log to show that it works so far
		$("#city-type").val(""); //Reset the user input field after it is submitted

		//changing out photos per user input
		if(city === "NYC" || city === "NY" || city === "New York"|| city === "New York City" || 
			city === "nyc" || city === "ny" || city === "new york" || city === "new york city") {
			$("body").addClass("nyc");
			$("body").removeClass("sf la austin sydney");
			$("#city-type").val("Too busy!");
		}
		else if(city === "SF"|| city === "San Francisco" || city === "san francisco" || city === "sf") {
			$("body").addClass("sf");
			$("body").removeClass("nyc la austin sydney");
			$("#city-type").val("Such a beautiful city!");
		}
		else if(city === "LA" || city === "Los Angeles" || city === "la" || city === "lax" || city === "LAX") {
			$("body").addClass("la");
			$("body").removeClass("sf nyc austin sydney");
			$("#city-type").val("For celebrities only!");
		}
		else if(city === "ATX" || city === "Austin" || city === "atx" || city === "austin") {
			$("body").addClass("austin");
			$("body").removeClass("sf la nyc sydney");
			$("#city-type").val("Too hot for me!");
		}
		else if(city === "SYD" || city === "Sydney" || city === "syd" || city === "sydney") {
			$("body").addClass("sydney");
			$("body").removeClass("sf la austin nyc");
			$("#city-type").val("Must visit!");

		}
	});

});