//level 5 function
function level5(){
    document.getElementById('myCanvas').style.background='#2196F3';
    drawCat(x1,y1,r1);
    drawCloud(x1,y1,r1);
    r1=15;//(Math.pow(y1,0.5))*2;
    drawMouse(x2,y2,10);
    if(x2<1100 && x2>-200){
        x2-=1;
    }
    else{
        x2=1050;
    }

    //change direction of increment if above or below limits, start/stop timer, choose random number, increment y0
    /*if(y01 < y1+(5/40*r1)){
        
        if(timerU1<timeUp1){
            timerU1+=1;
        }
        else{
            dy1=-dy1;
            timerU1 = 0;
            y01=y1+(5/40*r1);
            timeUp1 = (Math.random()*50)+50;
            dy1=((Math.random()*2)+1);
        }
    }
    else if(y01 > y1+(105/40*r1)){
        if(timerD1<timeDown1){
            timerD1+=1;
        }
        else{
            dy1=-dy1;
            timerD1 = 0;
            timeDown1 = (Math.random()*50)+50;
            dy1=-((Math.random()*2)+1);
            y01=y1+(105/40*r1);
        }
    }
    else{
        y01 += dy1;
        if(y01>y1+(105/40*r1) && x1>50 && x1<850) {
            missCount+=1;
        }   
    }

    //decide whether to draw cat, choose random number for indTimerMax
    if(ind1==0 && (indTimer1>indTimerMax1 || indTimer1 ==0)){
        drawCat(x1,y01,r1);
        drawCloud(x1,y1,r1);
        indTimer1=0;
        indTimerMax1=Math.random()*100;
    }
    else{
        //drawBlock(x,y,r);
        indTimer1 +=1;
        timerD1 = 0;
        timerU1 = 0;
        dy1=(Math.random()*2)+1;
        rnd1=Math.random();
        if(rnd1>0.5){
            x1=-150;
        }
        else{
            x1=1050;
        }
        //y1=(Math.random()*430)+30;
        r1=(Math.pow(y1,0.5))*2;
        y01=y1+(106/40*r1);
        ind1=0;
    }
    

    //moving Cat System

    if(x1 < -200){
    xa1=-xa1;
    }
    else if(x1 > 1100){
        xa1=-xa1;
    }
    x1+=xa1;

    if(y1 < -200){
        ya1=-ya1;
    }
    else if(y1 > 800){
        ya1=-ya1;
    }
    //y1+=ya1;

    //y01+=ya1;*/
    
};


function resetPar5(){
    //initial location
     x1=150;
     y1=30;
     r1=(Math.pow(y1,0.5))*2;
    //varying cat y-value
     y01=y1+(105/40*r1);
    //growing hole speed and initial radius
     dr1=0.7;
     ir1=0;
    //speed of cat-y and cat systym x,y
     dy1=-1;
     ya1=0.5;
     xa1=0.5;
    //target click indicator and timer
     ind1=0;
     indTimer1=0;
     indTimerMax1=50;
    //timers up/down
     timerU1=0;
     timeUp1=300;
     timerD1=0;
     timeDown1=200;

     x2=1050;
     y2=120;
     r2=12;//(Math.pow(y2,0.5))*2;
    //varying cat y-value
     y02=y2+(105/40*r2);
    //growing hole speed and initial radius
     dr2=0.7;
     ir2=0;
    //speed of cat-y and cat systym x,y
     dy2=-1;
     ya2=0.5;
     xa2=0.5;
    //target click indicator and timer
     ind2=0;
     indTimer2=0;
     indTimerMax2=40;
    //timers up/down
     timerU2=0;
     timeUp2=300;
     timerD2=0;
     timeDown2=200;
};


//restart level Five function
function reStart5(){
    reStart()
    document.getElementById('btn5').style.display='none';
    resetPar5();
};

//adding level to game
/*
else if(level==5 && lives>0){
    if(levelInd==0){
        if(missCount>20 && lives>1){
            resetPar5();
            levelInd=1;
            lifeInd=1;
            document.getElementById('btn5').style.display='inline';
            document.getElementById('btn5').innerHTML='TRY AGAIN';
        }
        else if (missCount>20 && lives==1){
            resetPar5();
            lives=0;
            levelInd=1;
        }
        else if(Gcount<10){
            level5();
        }
        else if(Gcount>9){
            resetPar5();
            lives=0;
            level=0;
            levelInd=2;
        }
    }
    else if(levelInd==1){
        winLoseBlue('LEVEL 5',325,150);
    }            
}*/