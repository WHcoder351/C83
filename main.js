  
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var W = screen.width;
    var nW = screen.width - 40;
    var nH = screen.height - 200;
  if (W<992){ 
 document.getElementById ("myCanvas").width = nW;
 document.getElementById ("myCanvas").height = nH;
 document.body.style.overflow = "hidden";
 }
    canvas.addEventListener("touchstart", my_touch);
    
    function my_touch(e)
    {
        console.log("touchStart")
        last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
     console.log ("touchMove")
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y =e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

