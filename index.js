// main document ready function to check if dom is loaded fully or not

let myToken;
let mySearchValue;
let obj;

$(document).ready(() => {

    myToken = prompt("Please enter your Token:", "");

    if (myToken == null || myToken == "") {

        alert("No usr Token found");
		//getAllDetails();

    } else {
		//$('.container').css('display', 'block','margin-top:20px;');

    } // end if condition

}); // end document.ready function

$(document).ready(() => {
	$('.btn').click(function(){
		mySearchValue=$("#test").val();
		//getAllDetails();
		obj=$("#input").val();
			getAllDetails(obj);
	});
});

let getAllDetails = (obj) => {


    // API call to get user details

    $.ajax({
        type: 'POST',
        dataType: 'json',
        async: true,
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=' +myToken,
		
        success: (response) => {
		$('.remove').remove();
			
		//alert(response[0].Year);
		if(mySearchValue==(eval("response."+obj))){
            $('#dataSection').css('display', 'block');

            console.log(response);

            $('#Name').html(response.Title);

            $('#year').html(response.Year);
			
			$('#Rated').html(response.Rated);
			
			$('#Released').html(response.Released);
			
			$('#Runtime').html(response.Runtime);
			
			$('#Genre').html(response.Genre);
			
			$('#Director').html(response.Director);
			
			$('#Writer').html(response.Writer);
			
			$('#Actors').html(response.Actors);
			
			$('#Plot').html(response.Plot);
			
			$('#Language').html(response.Language);
			
			$('#Country').html(response.Country);
			
			$('#Awards').html(response.Awards);
			
			$('#Poster').html('<img src="' +response.Poster +'" class="profileHeight"/>');
			
			$('#Metascore').html(response.Metascore);
			
			$('#imdbRating').html(response.imdbRating);
			
			$('#imdbVotes').html(response.imdbVotes);
			
			$('#imdbID').html(response.imdbID);
			
			$('#Type').html(response.Type);
			
			$('#DVD').html(response.DVD);
			
			$('#BoxOffice').html(response.BoxOffice);
			
			$('#Production').html(response.Production);
			
			$('#Website').html(response.Website);
			
			
			
			//alert(response.Ratings[0].Source);
			jQuery.each(response.Ratings, function( key, value ) {
				//$('#Ratings').append(response.Ratings);
			$('#Source').append('<td class=remove>'+response.Ratings[key].Source+'</td>');
			

});

jQuery.each(response.Ratings, function( key, value ) {
				//$('#Ratings').append(response.Ratings);
			
			$('#Value').append('<td class = remove>'+response.Ratings[key].Value+'</td>');
});
			
			//$('#Poster').append('<img src="' + response.Poster'");

            //$('#Poster').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

            //$('#cover').css('background-image', 'url(' + response.cover.source + ')');
		}
		else{
			alert("enter correct details");
		}

        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 

}