window.onload=()=>{
    const canvas = document.getElementById('miCanvas');
    let ctx = canvas.getContext('2d');
    
    ctx.lineWidth=10;
    ctx.strokeStyle='red';

    ctx.beginPath();
    ctx.moveTo(275,100);
    ctx.lineTo(325,100);
    ctx.lineTo(325,150);
    ctx.lineTo(375,150);
    ctx.lineTo(375,200);
    ctx.lineTo(425,200);
    ctx.lineTo(425,250);

    ctx.lineTo(175,250);
    ctx.lineTo(175,200);
    ctx.lineTo(225,200);
    ctx.lineTo(225,150);
    ctx.lineTo(275,150);
    ctx.lineTo(275,100);
    ctx.closePath()
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150,50);
    ctx.lineTo(50,150);
    ctx.lineTo(250,150)
    ctx.lineTo(150,50);
    ctx.closePath()

    ctx.stroke()

}