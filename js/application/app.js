define(function(require){
	var $ = require('jquery'),
		startscreen = require('application/scenes/startscreen'),
		c = require('application/canvas'),
		canvas = c.canvas,
		ctx = c.ctx;
	

	var State = { 
		_current: 0, 
		INTRO: 0, 
		LOADING: 1, 
		LOADED: 2
	};

	startscreen.show();

	$('body').click(function(){
		startscreen.fadeToWhite();
	});

	$(window).resize(function(){
		canvas.width = document.body.clientWidth; 
		canvas.height = document.body.clientHeight;
		switch (State._current) { 
			case State.INTRO:
			startscreen.show();
			break; 
		}
	})



});



