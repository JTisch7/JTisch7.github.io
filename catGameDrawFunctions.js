//drawCAt
function drawCat(x,y,r){
    //head
    ctx.beginPath();
    ctx.ellipse(x,y,r,32/40*r,0,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    //ears
    ctx.beginPath();
    ctx.moveTo(x-r,y);
    ctx.lineTo(x-(30/40*r),y-(50/40*r));
    ctx.lineTo(x,y-(25/40*r));
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.lineTo(x+(30/40*r),y-(50/40*r));
    ctx.lineTo(x,y-(25/40*r));
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    //eyes(left)
    ctx.beginPath();
    ctx.arc(x-(20/40*r),y+(2/40*r),13/40*r,1.10*Math.PI,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x-(18/40*r),y-(10.2/40*r),16.3/40*r,0.25*Math.PI,.85*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x-(17/40*r),y-(3/40*r),4/40*r,6/40*r,0,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    //eyes(right)
    ctx.beginPath();
    ctx.arc(x+(20/40*r),y+(2/40*r),13/40*r,Math.PI,1.9*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x+(18/40*r),y-(10.2/40*r),16.3/40*r,0.15*Math.PI,.75*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x+(17/40*r),y-(3/40*r),4/40*r,6/40*r,0,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    //body
    ctx.beginPath();
    ctx.arc(x,y+(70/40*r),50/40*r,1.15*Math.PI,1.85*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
};  
//hole
function Hole(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y+(32/40*r),70/40*r,15/40*r,0,0,2*Math.PI);
    ctx.lineWidth=r/50*1.5;
    ctx.strokeStyle='rgb(36, 21, 14)';
    ctx.fillStyle ='rgb(107, 62, 40)';
    //ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};
//Growinghole
function growingHole(x,y,r,r2){
    ctx.beginPath();
    ctx.ellipse(x,y+(32/40*r),70/40*r2,15/40*r2,0,0,2*Math.PI);
    ctx.lineWidth=r/50*1.5 ;
    ctx.strokeStyle='black';
    ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};
//grassHider
function hider(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y+(32/40*r),70/40*r,15/40*r,0,0,Math.PI);
    ctx.lineTo(x-(70/40*r),y+(160/40*r));
    ctx.lineTo(x+(70/40*r),y+(160/40*r));
    ctx.lineTo(x+(70/40*r),y+(32/40*r));
    ctx.fillStyle = 'rgb(9, 180, 32)';
    ctx.fill();
    ctx.closePath();
};
//trashcan
function trashCan(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y+(32/40*r),70/40*r,15/40*r,0,0,Math.PI);
    ctx.lineTo(x-(70/40*r),y+(160/40*r));
    ctx.lineTo(x+(70/40*r),y+(160/40*r));
    ctx.lineTo(x+(70/40*r),y+(32/40*r));
    ctx.fillStyle = 'rgb(145, 101, 89)';//'rgb(70, 46, 34)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x,y+(160/40*r),70/40*r,15/40*r,0,0,2*Math.PI);
    ctx.fillStyle = 'rgb(145, 101, 89)';//'rgb(70, 46, 34)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x-(70/40*r),y+(32/40*r));
    ctx.lineTo(x-(70/40*r),y+(160/40*r));
    ctx.lineWidth=r/50*1.5;
    ctx.strokeStyle='rgb(36, 21, 14)';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x+(70/40*r),y+(32/40*r));
    ctx.lineTo(x+(70/40*r),y+(160/40*r));
    ctx.ellipse(x,y+(160/40*r),70/40*r,15/40*r,0,0,Math.PI);
    ctx.lineWidth=r/50*1.5;
    ctx.strokeStyle='rgb(36, 21, 14)';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x+(70/40*r),y+(32/40*r));
    ctx.ellipse(x,y+(32/40*r),70/40*r,15/40*r,0,0,Math.PI);
    ctx.lineWidth=r/50*1.5;
    ctx.strokeStyle='rgb(36, 21, 14)';
    ctx.stroke();
    ctx.closePath();
};
//drawClowd
function drawCloud(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y+(51/20*r),40/20*r,33/20*r,0,0,2*Math.PI);
    ctx.ellipse(x+(35/20*r),y+(51/20*r),30/20*r,19/20*r,0,0,2*Math.PI);
    ctx.ellipse(x-(35/20*r),y+(51/20*r),30/20*r,19/20*r,0,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
};
//drawBlock
function drawBlock(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y,r,32/40*r,0,0,2*Math.PI);
    ctx.fillStyle = 'Pink';
    ctx.fill();
    ctx.closePath();
};
//sky
function drawSky(){
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(0,0,900,200);
};
//tree
function drawTree(x){
    ctx.fillStyle = 'brown';
    ctx.fillRect(x,204,8,-30);
    ctx.beginPath();
    ctx.ellipse(x+4,173,18,18,0,0,2*Math.PI);
    ctx.ellipse(x+4,155,18,18,0,0,2*Math.PI);
    ctx.ellipse(x+12,168,18,18,0,0,2*Math.PI);
    ctx.ellipse(x-4,168,18,18,0,0,2*Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
};
//drawMouse
function drawMouse(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y,r,r,0,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
};
//falling cloud
function fallingCloud(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y,0.4*r,r,0,0.5*Math.PI,1.5*Math.PI);
    ctx.ellipse(x,y,0.4*r,r,0,1.5*Math.PI,0.5*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.ellipse(x,y+(0.7*r),0.7*r,0.7*r,0,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
};
//hit-Count text
function score(t,x,y){
    ctx.fillStyle= 'white';
    ctx.font = '25px serif';
    ctx.fillText('HIT = ' + t,x,y);
};
//miss-Count text
function missedScore(t,x,y){
    ctx.fillStyle= 'red';
    ctx.font = '25px serif';
    ctx.fillText('MISS = ' + t,x,y);
};
//life-Count text
function livesCount(t,x,y){
    ctx.fillStyle= 'blue';
    ctx.font = '25px serif';
    ctx.fillText('LIVES = ' + t,x,y);
};
//Win/Lose/try again text
function winLose(t,x,y){
    ctx.fillStyle= 'GREEN';
    ctx.font = '65px serif';
    ctx.fillText(t,x,y);
};
//Win/Lose/try again text
function winLoseBlue(t,x,y){
    ctx.fillStyle= 'rgb(50, 98, 255)';
    ctx.font = '65px serif';
    ctx.fillText(t,x,y);
};
//Win/Lose/try again text
function winLoseBlack(t,x,y){
    ctx.fillStyle= 'purple';
    ctx.font = '65px serif';
    ctx.fillText(t,x,y);
};