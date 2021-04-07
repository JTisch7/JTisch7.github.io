//level 3 function
function level3(){
    //document.getElementById('myCanvas').style.background='rgb(9, 146, 180)';
    document.getElementById('myCanvas').style.background='#2196F3';
    if(Gcount>40){
        //change direction of increment if above or below limits, start/stop timer, choose random number, increment y0
        if(y01 < y1+(5/40*r1)){
            
            if(timerU1<timeUp1){
                timerU1+=1;
                y01=y1+(5/40*r1)-0.1;
            }
            else{
                dy1=-dy1;
                timerU1 = 0;
                y01=y1+(5/40*r1);
                timeUp1 = (Math.random()*ua)+ub;
                dy1=((Math.random()*dya)+dyb)*(r1/40);
            }
        }
        else if(y01 > y1+(105/40*r1)){
            if(timerD1<timeDown1){
                timerD1+=1;
                y01=y1+(105/40*r1)+0.1;
            }
            else{
                dy1=-dy1;
                timerD1 = 0;
                timeDown1 = (Math.random()*da)+db;
                dy1=-((Math.random()*uya)+uyb)*(r1/40);
                y01=y1+(105/40*r1);
            }
        }
        else{
            y01 += dy1;
            if(y01>y1+(105/40*r1) && x1>50 && x1<850 && y1>50 && y1<550) {
                missCount+=1;
            }   
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind1==0 && (indTimer1>indTimerMax1 || indTimer1 ==0)){
            drawCat(x1,y01,r1);
            drawCloud(x1,y1,r1);
            indTimer1=0;
            indTimerMax1=Math.random()*100;

            //moving Cat System

            if(x1 < -200){
                x1 = -200;
            xa1=-xa1;
            }
            else if(x1 > 1100){
                x1 = 1100;
                xa1=-xa1;
            }
            x1+=xa1;

            if(y1 < -200){
                y1 = -200;
                ya1=-ya1;
            }
            else if(y1 > 800){
                y1 = 800;
                ya1=-ya1;
            }
            y1+=ya1;

            y01+=ya1;

        }
        else{
            if(ind11==1){
                fallingCloud(x1,y1,r1);
                y01=800;
                y1+=3;
                indTimer1 +=1;
                if(y1>650){
                    ind11=0;
                }
            }
            else{
                indTimer1 +=1;
                timerD1 = 0;
                timerU1 = 0;
                //dy1=(Math.random()*2)+1;
                rnd1=Math.random();
                if(rnd1>0.5){
                    x1=-150;
                }
                else{
                    x1=1050;
                }

                y1=(Math.random()*500)+50;
                if(y1>300){
                    ya1=Math.random()*-0.3;
                }
                else{
                    ya1=Math.random()*0.3;
                }
                xa1=(Math.random()*0.5)+0.4;
                r1=(Math.random()*15)+10;
                y01=y1+(106/40*r1);
                ind1=0;
            }
        }
        
    }

    if(Gcount>=0){
        //System 2
        if(y02 < y2+(5/40*r2)){
            
            if(timerU2<timeUp2){
                timerU2+=1;
                y02=y2+(5/40*r2)-0.1;
            }
            else{
                dy2=-dy2;
                timerU2 = 0;
                y02=y2+(5/40*r2);
                timeUp2 = (Math.random()*ua)+ub;
                dy2=((Math.random()*dya)+dyb)*(r2/40);
            }
        }
        else if(y02 > y2+(105/40*r2)){
            if(timerD2<timeDown2){
                timerD2+=1;
                y02=y2+(105/40*r2)+0.1;
            }
            else{
                dy2=-dy2;
                timerD2 = 0;
                timeDown2 = (Math.random()*da)+db;
                dy2=-((Math.random()*uya)+uyb)*(r2/40);
                y02=y2+(105/40*r2);
            }
        }
        else{
            y02 += dy2;
            if(y02>y2+(105/40*r2) && x2>50 && x2<850 && y2>50 && y2<550) {
                missCount+=1;
            }   
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind2==0 && (indTimer2>indTimerMax2 || indTimer2 ==0)){
            drawCat(x2,y02,r2);
            drawCloud(x2,y2,r2);
            indTimer2=0;
            indTimerMax2=Math.random()*100;

            //moving Cat System

            if(x2 < -200){
                x2=-200;
            xa2=-xa2;
            }
            else if(x2 > 1100){
                x2=1100;
                xa2=-xa2;
            }
            x2+=xa2;

            if(y2 < -200){
                y2=-200;
                ya2=-ya2;
            }
            else if(y2 > 800){
                y2=800;
                ya2=-ya2;
            }
            y2+=ya2;

            y02+=ya2;

        }
        else{
            if(ind22==1){
                fallingCloud(x2,y2,r2);
                y02=800;
                y2+=3;
                indTimer2 +=1;
                if(y2>650){
                    ind22=0;
                }
            }
            else{
                indTimer2 +=1;
                timerD2 = 0;
                timerU2 = 0;
                //dy2=(Math.random()*2)+1;
                rnd2=Math.random();
                if(rnd2>0.5){
                    x2=-150;
                }
                else{
                    x2=1050;
                }
            
                
                y2=(Math.random()*500)+50;
                if(y2>300){
                    ya2=Math.random()*-0.3;
                }
                else{
                    ya2=Math.random()*0.3;
                }
                xa2=(Math.random()*0.5)+0.4;
                r2=(Math.random()*15)+10;
                y02=y2+(106/40*r2);
                ind2=0;
            }
        }
        
    }

    if(Gcount>30){
        //System 3
        if(y03 < y3+(5/40*r3)){
            
            if(timerU3<timeUp3){
                timerU3+=1;
                y03=y3+(5/40*r3)-0.1;
            }
            else{
                dy3=-dy3;
                timerU3 = 0;
                y03=y3+(5/40*r3);
                timeUp3 = (Math.random()*ua)+ub;
                dy3=((Math.random()*dya)+dyb)*(r3/40);
            }
        }
        else if(y03 > y3+(105/40*r3)){
            if(timerD3<timeDown3){
                timerD3+=1;
                y03=y3+(105/40*r3)+0.1;
            }
            else{
                dy3=-dy3;
                timerD3 = 0;
                timeDown3 = (Math.random()*da)+db;
                dy3=-((Math.random()*uya)+uyb)*(r3/40);
                y03=y3+(105/40*r3);
            }
        }
        else{
            y03 += dy3;
            if(y03>y3+(105/40*r3) && x3>50 && x3<850 && y3>50 && y3<550) {
                missCount+=1;
            }   
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind3==0 && (indTimer3>indTimerMax3 || indTimer3 ==0)){
            drawCat(x3,y03,r3);
            drawCloud(x3,y3,r3);
            indTimer3=0;
            indTimerMax3=Math.random()*100;

            //moving Cat System

            if(x3 < -200){
                x3 = -200;
            xa3=-xa3;
            }
            else if(x3 > 1100){
                x3 = 1100;
                xa3=-xa3;
            }
            x3+=xa3;

            if(y3 < -200){
                y3 = -200;
                ya3=-ya3;
            }
            else if(y3 > 800){
                y3 = 800;
                ya3=-ya3;
            }
            y3+=ya3;

            y03+=ya3;

        }
        else{
            if(ind33==1){
                fallingCloud(x3,y3,r3);
                y03=800;
                y3+=3;
                indTimer3 +=1;
                if(y3>650){
                    ind33=0;
                }
            }
            else{
                indTimer3 +=1;
                timerD3 = 0;
                timerU3 = 0;
                //dy3=(Math.random()*2)+1;
                rnd3=Math.random();
                if(rnd3>0.5){
                    x3=-150;
                }
                else{
                    x3=1050;
                }
                

                y3=(Math.random()*500)+50;
                if(y3>300){
                    ya3=Math.random()*-0.3;
                }
                else{
                    ya3=Math.random()*0.3;
                }
                xa3=(Math.random()*0.5)+0.4;
                r3=(Math.random()*15)+10;
                y03=y3+(106/40*r3);
                ind3=0;
            }
        }
        
    }

    if(Gcount>10){
        //System 4
        if(y04 < y4+(5/40*r4)){
            
            if(timerU4<timeUp4){
                timerU4+=1;
                y04=y4+(5/40*r4)-0.1;
            }
            else{
                dy4=-dy4;
                timerU4 = 0;
                y04=y4+(5/40*r4);
                timeUp4 = (Math.random()*ua)+ub;
                dy4=((Math.random()*dya)+dyb)*(r4/40);
            }
        }
        else if(y04 > y4+(105/40*r4)){
            if(timerD4<timeDown4){
                timerD4+=1;
                y04=y4+(105/40*r4)+0.1;
            }
            else{
                dy4=-dy4;
                timerD4 = 0;
                timeDown4 = (Math.random()*da)+db;
                dy4=-((Math.random()*uya)+uyb)*(r4/40);
                y04=y4+(105/40*r4);
            }
        }
        else{
            y04 += dy4;
            if(y04>y4+(105/40*r4) && x4>50 && x4<850 && y4>50 && y4<550) {
                missCount+=1;
            }   
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind4==0 && (indTimer4>indTimerMax4 || indTimer4 ==0)){
            drawCat(x4,y04,r4);
            drawCloud(x4,y4,r4);
            indTimer4=0;
            indTimerMax4=Math.random()*100;

            //moving Cat System

            if(x4 < -200){
                x4 = -200;
            xa4=-xa4;
            }
            else if(x4 > 1100){
                x4 = 1100;
                xa4=-xa4;
            }
            x4+=xa4;

            if(y4 < -200){
                y4 = -200;
                ya4=-ya4;
            }
            else if(y4 > 800){
                y4 = 800;
                ya4=-ya4;
            }
            y4+=ya4;

            y04+=ya4;

        }
        else{
            if(ind44==1){
                fallingCloud(x4,y4,r4);
                y04=800;
                y4+=3;
                indTimer4 +=1;
                if(y4>650){
                    ind44=0;
                }
            }
            else{
                indTimer4 +=1;
                timerD4 = 0;
                timerU4 = 0;
                //dy4=(Math.random()*2)+1;
                rnd4=Math.random();
                if(rnd4>0.5){
                    x4=-150;
                }
                else{
                    x4=1050;
                }
                
                
                y4=(Math.random()*500)+50;
                if(y4>300){
                    ya4=Math.random()*-0.3;
                }
                else{
                    ya4=Math.random()*0.3;
                }
                xa4=(Math.random()*0.5)+0.4;
                r4=(Math.random()*15)+10;
                y04=y4+(106/40*r4);
                ind4=0;
            }
        }
        
    }

    if(Gcount>=0){
        //System 5
        if(y05 < y5+(5/40*r5)){
            
            if(timerU5<timeUp5){
                timerU5+=1;
                y05=y5+(5/40*r5)-0.1;
            }
            else{
                dy5=-dy5;
                timerU5 = 0;
                y05=y5+(5/40*r5);
                timeUp5 = (Math.random()*ua)+ub;
                dy5=((Math.random()*dya)+dyb)*(r5/40);
            }
        }
        else if(y05 > y5+(105/40*r5)){
            if(timerD5<timeDown5){
                timerD5+=1;
                y05=y5+(105/40*r5)+0.1;
            }
            else{
                dy5=-dy5;
                timerD5 = 0;
                timeDown5 = (Math.random()*da)+db;
                dy5=-((Math.random()*uya)+uyb)*(r5/40);
                y05=y5+(105/40*r5);
            }
        }
        else{
            y05 += dy5;
            if(y05>y5+(105/40*r5) && x5>50 && x5<850 && y5>50 && y5<550) {
                missCount+=1;
            }   
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind5==0 && (indTimer5>indTimerMax5 || indTimer5 ==0)){
            drawCat(x5,y05,r5);
            drawCloud(x5,y5,r5);
            indTimer5=0;
            indTimerMax5=Math.random()*100;

            //moving Cat System

            if(x5 < -200){
                x5=-200;
            xa5=-xa5;
            }
            else if(x5 > 1100){
                x5=1100;
                xa5=-xa5;
            }
            x5+=xa5;

            if(y5 < -200){
                y5=-200;
                ya5=-ya5;
            }
            else if(y5 > 800){
                y5=800;
                ya5=-ya5;
            }
            y5+=ya5;

            y05+=ya5;

        }
        else{
            if(ind55==1){
                fallingCloud(x5,y5,r5);
                y05=800;
                y5+=3;
                indTimer5 +=1;
                if(y5>650){
                    ind55=0;
                }
            }
            else{
                indTimer5 +=1;
                timerD5 = 0;
                timerU5 = 0;
                //dy5=(Math.random()*2)+1;
                rnd5=Math.random();
                if(rnd5>0.5){
                    x5=-150;
                }
                else{
                    x5=1050;
                }
                
                y5=(Math.random()*500)+50;
                if(y5>300){
                    ya5=Math.random()*-0.3;
                }
                else{
                    ya5=Math.random()*0.3;
                }
                xa5=(Math.random()*0.5)+0.4;
                r5=(Math.random()*15)+10;
                y05=y5+(106/40*r5);
                ind5=0;
            }
        }
        
    }


    if(Gcount>20){
        //System 6
        if(y06 < y6+(5/40*r6)){
            
            if(timerU6<timeUp6){
                timerU6+=1;
                y06=y6+(5/40*r6)-0.1;
            }
            else{
                dy6=-dy6;
                timerU6 = 0;
                y06=y6+(5/40*r6);
                timeUp6 = (Math.random()*ua)+ub;
                dy6=((Math.random()*dya)+dyb)*(r6/40);
            }
        }
        else if(y06 > y6+(105/40*r6)){
            if(timerD6<timeDown6){
                timerD6+=1;
                y06=y6+(105/40*r6)+0.1;
            }
            else{
                dy6=-dy6;
                timerD6 = 0;
                timeDown6 = (Math.random()*da)+db;
                dy6=-((Math.random()*uya)+uyb)*(r6/40);
                y06=y6+(105/40*r6);
            }
        }
        else{
            y06 += dy6;
            if(y06>y6+(105/40*r6) && x6>50 && x6<850 && y6>50 && y6<550) {
                missCount+=1;
            }   
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind6==0 && (indTimer6>indTimerMax6 || indTimer6 ==0)){
            drawCat(x6,y06,r6);
            drawCloud(x6,y6,r6);
            indTimer6=0;
            indTimerMax6=Math.random()*100;

            //moving Cat System

            if(x6 < -200){
                x6 = -200;
            xa6=-xa6;
            }
            else if(x6 > 1100){
                x6 = 1100;
                xa6=-xa6;
            }
            x6+=xa6;

            if(y6 < -200){
                y6 = -200;
                ya6=-ya6;
            }
            else if(y6 > 800){
                y6 = 800;
                ya6=-ya6;
            }
            y6+=ya6;

            y06+=ya6;

        }
        else{
            if(ind66==1){
                fallingCloud(x6,y6,r6);
                y06=800;
                y6+=3;
                indTimer6 +=1;
                if(y6>650){
                    ind66=0;
                }
            }
            else{
                indTimer6 +=1;
                timerD6 = 0;
                timerU6 = 0;
                //dy6=(Math.random()*2)+1;
                rnd6=Math.random();
                if(rnd6>0.5){
                    x6=-150;
                }
                else{
                    x6=1050;
                }
                y6=(Math.random()*500)+50;
                if(y6>300){
                    ya6=Math.random()*-0.3;
                }
                else{
                    ya6=Math.random()*0.3;
                }
                xa6=(Math.random()*0.5)+0.4;
                r6=(Math.random()*15)+10;
                y06=y6+(106/40*r6);
                ind6=0;
            }
        }
        
    }

    score(Gcount,20,30);
    missedScore(missCount,140,30);
    livesCount(lives,750,30);

};