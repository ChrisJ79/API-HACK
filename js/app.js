
$(document).ready(function () {
    // This function is to get the data from youtube API and display it on the page
    function getResults(query) {
        $.getJSON("http://api.giphy.com/v1/gifs/search", {
        	"api_key": "dc6zaTOxFJmzC",
        	"rating": "r",
        	"q": query
		},
            function (data) {
                console.log(data);
                // If there are no results it will just empty the list
                displaySearchResults(data.data);
            }

        );
    }

    function displaySearchResults(giphys) {
        var html = "";
        $.each(giphys, function (index, giph) {
            // append columns to grid
            console.log(giph.images.downsized_medium.url);
            html = html + "<div class='uk-flex uk-flex-center uk-flex-middle uk-margin-bottom'><a href='" + giph.images.downsized_medium.url +"' target='_blank' class='uk-card uk-margin'><img src='" + giph.images.downsized_medium.url + "'/></a></div>";

        });
        $("#wrapper .list-wrapper").html(html);
    }

    $("#search-form").submit(function(event){
        event.preventDefault();
        getResults($("#query").val());

    });

});






/*
            html = html + "<li><p>" + giph.images.downsized_medium.url +
                "</p><img src='" + giph.images.downsized_medium.url + "'/></li>";

                */
	




