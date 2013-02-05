define(function(){
	var canvas, ctx;

	canvas = document.getElementById('game');
	canvas.height = document.body.clientHeight;
	canvas.width = document.body.clientWidth;

	ctx = canvas.getContext('2d');

	return {
		canvas : canvas,
		ctx: ctx
	}
});