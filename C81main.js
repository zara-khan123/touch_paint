mouseEvent="";
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d")
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width= document.getElementById("width").value;
    mouseEvent="mouseDown";
    console.log(color);
    
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent =="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle  = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_mouse_x, current_mouse_y);
        ctx.stroke();
    }
    last_x = current_mouse_x;
    last_y = current_mouse_y;
}


function clear_btn()
{
ctx.clearRect(0,0,canvas.width, canvas.height);
}
