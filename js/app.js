
$(document).ready(function (){
    $.ajax({
		url: "http://gateway.marvel.com/v1/public/characters",
		dataType: "json",
		key: "f1548c72506aff620a1e9233add3e0c8",	
		type: "GET"
	});

	console.log();

});

