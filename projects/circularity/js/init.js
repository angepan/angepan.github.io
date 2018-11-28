var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeRunner = function() {
        
        window.opspark.runner = {};
        var runner = window.opspark.runner;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle  //
        var drawCircle;
        var drawCircle = function() {
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    circles.push(circle);
        

        // TODO 3 : Call the drawCircle function 5 times //
    drawCircle("circle1", "circle2", "circle3", "circle4", "circle5")

        // TODO 7 : Create a Loop to call drawCircle 100 times
        var counter = 0; 
        while (counter < 10) {
        // do something
        counter++
        }

for (var counter = 0; counter < 10; counter++) {
    // do something
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        runner.checkCircleBounds = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone out the right side of the screen then place it off-screen left
            if ( circle.x > canvas.width + circle.radius ) {
                circle.x = 0 - circle.radius;
            } 
            // TODO 5a) if the circle has gone out of the left side of the screen then place it off-screen right
            else if ( / * Fill me in! * / ) {
             if (circle.x > canvas.width) {
	            circle.x = 0;
}	   
            } 

            // TODO 5b) if the circle has gone out of the top side of the screen then place it off-screen bottom
            if ( / * Fill me in! * / ) {
                if (circle.x > canvas.height) {
	            circle.x = 0;
}	 
            }
            // TODO 5c) if the circle has gone out of the bottom side of the screen then place it off-screen top 
            else if ( / * Fill me in! * / ) {
                if (circle.x > circle.y) {
	            circle.x = 0;
}	
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        var update = function() {
            // TODO 4 : Update the circle's position //
             physikz.updatePosition(circles[0]);
            // TODO 6 : Call checkCircleBounds on your circles.
           var counter = 0; 
            while (counter < 10) {
            // do something
            counter++
            }       

            for (var counter = 0; counter < 10; counter++) {
            // do something
            }

            // TODO 8 : Iterate over the array
           var drawCircle = ['Circle1', 'Circle2', 'Circle3', 'Circle4', 'Circle5'];
           var drawCircle;
           // for loop version
           for (var i = 0; i < drawCircle.length; i++) {
           drawCircle = drawCircle[i];
           console.log(drawCircle);
           }

          // while loop version
          var i = 0;
          while (i < drawCircle.length) {
          drawCircle = drawCricle[i];
          console.log(drawCricle);
          i++;
}

        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        runner.circle = circle;
        runner.circles = circles;
        runner.drawCircle = drawCircle;
        runner.update = update;
        
        app.addUpdateable(window.opspark.runner);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
