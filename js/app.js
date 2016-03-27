
$(document).ready(function (){
    
<<<<<<< HEAD
    function getResults(query) {
        $.getJSON("http(s)://gateway.marvel.com/", {
            "dataType": "json",
            "part": "snippet",
            "apikey": "388d23d2004fda1f6a8466cbefdfb00105f6767b",
            "q": "query"
        },
        function(data) {
            console.log(data);
        });

    }  


=======

    $.getJSON("http://gateway.marvel.com/v1/public/characters?apikey=f1548c72506aff620a1e9233add3e0c8", function(data) {
		console.log(data);
    });
>>>>>>> master

});

