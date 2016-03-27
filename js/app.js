
$(document).ready(function (){
    

    $.getJSON("http://gateway.marvel.com/v1/public/characters?apikey=388d23d2004fda1f6a8466cbefdfb00105f6767b", function(data) {
		console.log(data);
    });

});

