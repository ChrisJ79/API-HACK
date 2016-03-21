
$(document).ready(function (){
    
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



});

