define(['jquery', 'application/canvas'], function($, c){
    var showStartScreen, 
        fadeToWhite,
        canvas = c.canvas,
        ctx = c.ctx;
        
    showStartScreen = function(){
        var phrase, measure, gradient, logo;

        gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0); 
        gradient.addColorStop(0, '#ceefff');
        gradient.addColorStop(1, '#52bcff');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        (function(){
            var img, origWidth, imgobj;
            
            img = new Image();
            img.src = 'img/logo.png';

            img.onload = function(){
                origWidth = img.width;
                img.width = Math.round((50 * document.body.clientWidth) / 100); 
                img.height = Math.round((img.width * img.height) / origWidth);

                logo = {
                    img : img,
                    x: (canvas.width/2) - (img.width/2), 
                    y: (canvas.height/2) - (img.height/2)
                }
                ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width, logo.img.height);

                phrase = 'Click or tap the screen to start the game';
                ctx.font = 'bold 16px Helvetica, Arial, sans-serif';
                measure = ctx.measureText(phrase);
                xCoord = (canvas.width / 2) - (measure.width / 2);
                ctx.fillStyle = '#000000';
                ctx.fillText(phrase, xCoord, (logo.y + logo.img.height) + 50);
            }
        }());
    };  

    fadeToWhite = function(val){
        var alphaVal = (val == undefined) ? 0.02 : parseFloat(val) + 0.02;

        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = alphaVal;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (alphaVal < 1.0) { 
            setTimeout(function() {
                fadeToWhite(alphaVal); 
            }, 30);
        }
    }
    
    return {
        show : showStartScreen,
        fadeToWhite: fadeToWhite
    }

});



