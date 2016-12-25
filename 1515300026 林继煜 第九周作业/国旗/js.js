/**
 * Created by lenovo on 2016/11/23.
 */
window.onload=function() {

    var canvas =document.getElementById("canvas")
    canvas.width=900;
    canvas.height=500;
    var content = canvas.getContext("2d")


    var x1=125;
    var y1=150;
    drawStar(content,x1,y1,100,50,35)
    content.fillStyle="#F9F900"
    content.fill()
    //drawStar(content,300,75,40,15,35)
    var x =125
    var y =150;
    var  m=25;
    var n=-40;
    var r=200;
    drawStar(content,x+Math.cos((m)/180*Math.PI)*r,y-Math.sin((m)/180*Math.PI)*r,20,10,0)
    drawStar(content,x+Math.cos((m-(m-n)/3)/180*Math.PI)*r,y-Math.sin((m-(m-n)/3)/180*Math.PI)*r,20,10,20)
    drawStar(content,x+Math.cos((m-(m-n)*2/3)/180*Math.PI)*r,y-Math.sin((m-2*(m-n)/3)/180*Math.PI)*r,20,10,45)
    drawStar(content,x+Math.cos((n)/180*Math.PI)*r,y-Math.sin((n)/180*Math.PI)*r,20,10,60)
    context.fillStyle = "#000";
    context.fill();

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
        cxt.lineJoin = "butt";

        cxt.fill();
        cxt.stroke();
    }
}