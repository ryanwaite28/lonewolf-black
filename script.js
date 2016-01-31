$(document).ready(function(){

	var homeBtn = $('#home-btn');
	var musicBtn = $('#music-btn');
	var videoBtn = $('#video-btn');
	var pictureBtn = $('#picture-btn');
	
	var homePage = $('#c-home');
	var musicPage = $('#c-music');
	var videoPage = $('#c-video');
	var picturePage = $('#c-picture');
	
	homePage.css({
		'position': 'static',
		'left': '0px',
	});
	
	homeBtn.click(function () {
		
		homePage.css({
			'position': 'static',
			'left': '0px',
		});
		musicPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		videoPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		picturePage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		
	})
	
	musicBtn.click(function () {
		
		homePage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		musicPage.css({
			'position': 'static',
			'left': '0px',
		});
		videoPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		picturePage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		
	})
	
	videoBtn.click(function () {
		
		homePage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		musicPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		videoPage.css({
			'position': 'static',
			'left': '0px',
		});
		picturePage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		
	})
	
	pictureBtn.click(function () {
		
		homePage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		musicPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		videoPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		picturePage.css({
			'position': 'static',
			'left': '0px',
		});
		
	})

});