

$(document).ready(function (){
    function getResults(query){    
		$.getJSON("https://api.nasa.gov/planetary/apod?api_key=Y4bXXhWMURLkwiGoOFrqcmel8b1ZFNUKlNngOJ5V", {
            "date": "2016-03-27",
            "hd": "false",                
            "api_key": "Y4bXXhWMURLkwiGoOFrqcmel8b1ZFNUKlNngOJ5V"
    	},
    		function(data) {
    			console.log(data);
    				if (data.pageInfo.totalResults == 0) {
                    	alert("No videos found!");
                }
    		}
        )        
    }




});


/*    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=Y4bXXhWMURLkwiGoOFrqcmel8b1ZFNUKlNngOJ5V", function(data) {
		console.log(data); ------??????------ */

    }); 
