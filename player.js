$(document).ready(function(){


	//var audio = "Stairway.mp3";
	//var playPic = $("<img>");
	//var pausePic = $("<img>");
	//var start = 1;
	
	$("#playButton").on("click",function() {

		var $this = $(this),
			audio = $this.siblings("audio")[0],

		
		if (audio.paused === false) {
			//audio.play();
			//$("#playImage").hide("fast");
			// $(pausePic).attr("src", "images/pause.png");
			// $("#playButton").append(pausePic);
			//$(".playButton").append("<div><img src="images/pause.png"  id="pauseImage" alt="pause button" height="42" width="42"></div>")
			//start = 2;
			audio.pause();
		} else  {
			//audio.pause():
			//start = 1;
			//$(".playImage").show("fast");
			//$(".pauseImage").hide("fast");
			//$(playPic).attr("src", "images/play.png");
			//$("#playButton").append(playPic);

			audio.play();


		} 
	});


}