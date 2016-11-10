$(document).ready(function(){

   console.log("here"); //log to show that it works so far

var year; //declaring city input as a variable

	$("#find-button").on("click", function(e){ //creating an event function when update button is clicked
		e.preventDefault();
		year = $("#birth-year").val(); //recording the city input by user
		console.log(year);  //log to show that it works so far
		$("#birth-year").val(""); //Reset the user input field after it is submitted

		//changing out photos per user input
		if(year === "1912" || year === "1924" || year === "1936" || year === "1948" || year === "1960" || year === "1972" || year === "1984" || year === "1996" || year === "2008" || year === "2020") { 
			$(".rat").slideToggle( "medium" ); 
    	// Animation complete.
    		$("this").addClass("rat");
 			$("section").removeClass("ox tiger rabbit dragon snake horse goat monkey rooster dog pig"); 
	   		$("div").removeClass("cover");
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1913" || year === "1925" || year === "1937" || year === "1949" || year === "1961" || year === "1973" || year === "1985" || year === "1997" || year === "2009" || year === "2021") { 
  			$(".ox").slideToggle( "medium" ); 
    	// Animation complete.
	  		$("section").addClass("ox");
	  		$("div").removeClass("cover");
  			$("section").removeClass("rat tiger rabbit dragon snake horse goat monkey rooster dog pig");  
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1914" || year === "1926" || year === "1938" || year === "1950" || year === "1962" || year === "1974" || year === "1986" || year === "1998" || year === "2010" || year === "2022") { 
			$(".tiger").slideToggle( "medium" ); 
    	// Animation complete.
    	    $("section").addClass("tiger");
    		$("div").removeClass("cover");
			$("section").removeClass("ox rat rabbit dragon snake horse goat monkey rooster dog pig"); 
    		// $(".cover").slideToggle( "fast" ); 
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1915" || year === "1927" || year === "1939" || year === "1951" || year === "1963" || year === "1975" || year === "1987" || year === "1999" || year === "2011" || year === "2023") { 
			$(".rabbit").slideToggle( "medium" ); 
			$("section").addClass("rabbit");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rat dragon snake horse goat monkey rooster dog pig"); 			
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1916" || year === "1928" || year === "1940" || year === "1952" || year === "1964" || year === "1976" || year === "1988" || year === "2000" || year === "2012" || year === "2024") { 
			$(".dragon").slideToggle( "medium" ); 
			$("section").addClass("dragon");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit rat snake horse goat monkey rooster dog pig"); 
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1917" || year === "1929" || year === "1941" || year === "1953" || year === "1965" || year === "1977" || year === "1989" || year === "2001" || year === "2013" || year === "2025") { 
 			$(".snake").slideToggle( "medium" ); 
	   		$("section").addClass("snake");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon rat horse goat monkey rooster dog pig"); 
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1918" || year === "1930" || year === "1942" || year === "1954" || year === "1966" || year === "1978" || year === "1990" || year === "2002" || year === "2014" || year === "2026") { 
			$(".horse").slideToggle( "medium" ); 
    		$("section").addClass("horse");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon snake rat goat monkey rooster dog pig"); 
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1919" || year === "1931" || year === "1943" || year === "1955" || year === "1967" || year === "1979" || year === "1991" || year === "2003" || year === "2015" || year === "2027") { 
 			$(".goat").slideToggle( "medium" ); 
	   		$("section").addClass("goat");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon snake horse rat monkey rooster dog pig");  
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1920" || year === "1932" || year === "1944" || year === "1956" || year === "1968" || year === "1980" || year === "1992" || year === "2004" || year === "2016" || year === "2028") { 
			$(".monkey").slideToggle( "medium" ); 
    		$("section").addClass("monkey");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon snake horse goat rat rooster dog pig");  
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1921" || year === "1933" || year === "1945" || year === "1957" || year === "1969" || year === "1981" || year === "1993" || year === "2005" || year === "2017" || year === "2029") { 
			$(".rooster").slideToggle( "medium" ); 
    		$("section").addClass("rooster");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon snake horse goat monkey rat dog pig"); 
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1922" || year === "1934" || year === "1946" || year === "1958" || year === "1970" || year === "1982" || year === "1994" || year === "2006" || year === "2018" || year === "2030") { 
			$(".dog").slideToggle( "medium" ); 
    		$("section").addClass("dog");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon snake horse goat monkey rooster rat pig");  
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}

		else if(year === "1923" || year === "1935" || year === "1947" || year === "1959" || year === "1971" || year === "1983" || year === "1995" || year === "2007" || year === "2019" || year === "2031") { 
			$(".pig").slideToggle( "medium" ); 
    		$("section").addClass("pig");
    	// Animation complete.
    		$("div").removeClass("cover");
			$("section").removeClass("ox tiger rabbit dragon snake horse goat monkey rooster dog rat"); 
			$("#birth-year").val(""); //Reset the user input field after it is submitted to the value given
		}
	});

});