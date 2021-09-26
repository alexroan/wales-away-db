
$(window).ready(function(){

	loadDB();

});

function loadDB() {
  console.log("loading DB")

  $.getJSON("database/db.json", function(data){
		console.log(data)
	});
}