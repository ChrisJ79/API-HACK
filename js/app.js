
$(document).ready(function (){
    

    $.getJSON("http://gateway.marvel.com/v1/public/characters?apikey=f1548c72506aff620a1e9233add3e0c8", function(data) {
		console.log(data);
    });

});

