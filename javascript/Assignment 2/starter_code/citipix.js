$( document ).ready(function() {

   console.log( "here" );

//var city = 0;
var update = 0; //declaring a value for the submit button

	$("#submit-btn").on("click", function(){
		//event.preventDefault();
		var city = $("#city-type").val(); //recording the city input by user
		console.log(city);

		//changing out photos per user input
		if(city = "NYC", "NY", "New York", "New York City") {
			$("body").addClass("nyc");
		}
		else if(city = "SF", "San Francisco") {
			$("body").addClass("sf");
		}
		else if(city = "LA", "Los Angeles") {
			$("body").addClass("la")
		}
		else if(city = "ATX", "Austin") {
			$("body").addClass("austin");
		}
		else if(city = "SYD", "Sydney") {
			$("body").addClass("sydney");
		}
	});

});