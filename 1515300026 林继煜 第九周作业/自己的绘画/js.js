/**
 * Created by lenovo on 2016/12/2.
 */
window.onload = function()
{
    var canvas = document.getElementById("canvas");
    canvas.width=800;
    canvas.height=800;
    var context = canvas.getContext("2d");


    drawSky(context)

    context.beginPath()
    context.lineTo(350,100)
    context.lineTo(100,400)
    context.lineTo(350,700)

    context.lineTo(400,650)
    context.lineTo(185,400)

    context.lineTo(400,150)

    context.lineTo(615,400)
    context.lineTo(400,650)

    context.lineTo(350,700)

    context.lineTo(450,700)
    context.lineTo(700,400)
    context.lineTo(450,100)

    context.lineTo(400,150)
    context.lineTo(450,100)

    context.closePath()
    context.fillStyle="gray"
    context.fill()
    context.stroke()

   /* context.beginPath()
    context.lineTo(450,100)
    context.lineTo(700,400)
    context.lineTo(450,700)
    context.lineTo(400,650)
    context.lineTo(615,400)
    context.lineTo(400,150)
    context.closePath()
    context.fillStyle="red"
    context.fill()
    context.stroke()
*/
    context.beginPath()
    context.lineTo(185,400)
    context.lineTo(400,285-50)
    context.lineTo(615,400)
    context.lineTo(400,515+50)
    context.closePath()
    context.fillStyle="green"
    context.fill()
    context.stroke()

    context.beginPath()
    context.lineTo(185,400)
    context.lineTo(615,400)
    context.closePath()

    context.strokeStyle = "white"
    context.stroke()

    context.beginPath()
   //context.moveTo(400,185)
    context.lineTo(400,285-50)
    context.lineTo(400,515+50)
    //context.arcTo(400,285,400,515,200)
    context.closePath()

    context.strokeStyle = "white"
    context.stroke()

    context.beginPath()
    tuoyuan(context,400,285,120,115,10)
    tuoyuan1(context,400,285,120,115,10)
    tuoyuan2(context,400,285,120,115,10)
    tuoyuan3(context,400,285,120,115,10)
    context.fillStyle = "black"
    context.fill()
    context.strokeStyle = "blue"
    context.stroke()

    context.beginPath()
    context.arc(350,400,25,Math.PI*0,Math.PI*2,true)
    context.fillStyle = "white"
    context.fill()
    context.stroke()

    context.beginPath()
    context.arc(350,400,15,Math.PI*0,Math.PI*2,true)
    context.fillStyle = "black"
    context.fill()
    context.stroke()

    context.beginPath()
    context.arc(450,400,25,Math.PI*0,Math.PI*2,true)
    context.fillStyle = "white"
    context.fill()
    context.stroke()

    context.beginPath()
    context.arc(450,400,15,Math.PI*0,Math.PI*2,true)
    context.fillStyle = "black"
    context.fill()
    context.stroke()

    context.beginPath()
    context.arc(400,460,50,Math.PI*(-1/6),Math.PI*(-5/6),false)
    context.fillStyle = "red"
    context.fill()
    context.stroke()

    context.beginPath()
    context.lineTo(400,285)
    context.lineTo(400,435)
    context.lineWidth = 10
    context.strokeStyle= "black"
    context.stroke()
}


function drawStar(cxt, x, y, r, R, rot) {
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(
            Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * R + x,
            -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * R + y
        );
        cxt.lineTo(
            Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * r + x,
            -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * r + y
        );
    }
    cxt.closePath();

    cxt.fillStyle = "#fb3";
    cxt.strokeStyle = "#fb5";
    cxt.lineWidth = 3;
    cxt.lineJoin = "round";

    cxt.fill();
    cxt.stroke();
}

function drawSky(cxt) {
    var sky = cxt.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0.0, "#000");
    sky.addColorStop(1.0, "#035");
    cxt.fillStyle = sky;
    cxt.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 200; i++) {
        var R = Math.random() * 10 + 10;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var rot = Math.random() * 360;
        drawStar(cxt, x, y, R/2.0, R, rot);
    }
}

function tuoyuan(cxt,x1,y1,a,b,t)
{
//    cxt.beginPath()
    for(i=x1,j=y1;j<=(y1+2*b);)
    {

        /*cxt.lineTo(i,j)
        vx=vx+ax*t
        i=vx*t+0.5*ax*t*t+i
        vy=vy+ay*t
        j=vy*t+0.5*ay*t*t+j*/
        cxt.lineTo(i,j)
        i=i+t;
        j=Math.sqrt((a*a*b*b-b*b*(i-x1)*(i-x1))/(a*a))+y1+b

    }
//    cxt.stroke()
}

function tuoyuan1(cxt,x1,y1,a,b,t)
{
//    cxt.beginPath()
    for(i=x1,j=y1;j<=(y1+2*b);)
    {

        /*cxt.lineTo(i,j)
         vx=vx+ax*t
         i=vx*t+0.5*ax*t*t+i
         vy=vy+ay*t
         j=vy*t+0.5*ay*t*t+j*/
        cxt.lineTo(i,j)
        i=i+t;
        j=-Math.sqrt((a*a*b*b-b*b*(i-x1)*(i-x1))/(a*a))+y1+b

    }
//    cxt.stroke()
}

function tuoyuan2(cxt,x1,y1,a,b,t)
{
//    cxt.beginPath()
    for(i=x1,j=y1;j<=(y1+2*b);)
    {

        /*cxt.lineTo(i,j)
         vx=vx+ax*t
         i=vx*t+0.5*ax*t*t+i
         vy=vy+ay*t
         j=vy*t+0.5*ay*t*t+j*/
        cxt.lineTo(i,j)
        i=i-t;
        j=Math.sqrt((a*a*b*b-b*b*(i-x1)*(i-x1))/(a*a))+y1+b

    }
//    cxt.stroke()
}

function tuoyuan3(cxt,x1,y1,a,b,t)
{
//    cxt.beginPath()
    for(i=x1,j=y1;j<=(y1+2*b);)
    {

        /*cxt.lineTo(i,j)
         vx=vx+ax*t
         i=vx*t+0.5*ax*t*t+i
         vy=vy+ay*t
         j=vy*t+0.5*ay*t*t+j*/
        cxt.lineTo(i,j)
        i=i-t;
        j=-Math.sqrt((a*a*b*b-b*b*(i-x1)*(i-x1))/(a*a))+y1+b

    }
//    cxt.stroke()
}