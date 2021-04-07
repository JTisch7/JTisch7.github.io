function level2(){
    document.getElementById('myCanvas').style.background='rgb(9, 180, 32)';
    //change direction of increment if above or below limits, start/stop timer, choose random number, increment y0
    if(Gcount>50){
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
                if(ir1<=r1 && ir1>1){
                    ir1 -= dr1;
                }
                else{
                    ir1=0;
                }
            }
            else{
                if(Gcount>50){
                    x1=(Math.random()*330)+510;
                    y1=(Math.random()*70)+30;
                }
                r1=(Math.pow(y1,0.5))*2;
                y01=y1+(105/40*r1);

                dy1=-dy1;
                timerD1 = 0;
                timeDown1 = (Math.random()*da)+db;
                dy1=-((Math.random()*uya)+uyb)*(r1/40);
            }
        }
        else{
            if(ir1<r1){
                ir1 += dr1;
            }
            else if(ir1>=r1){
                ir1=r1;
                y01 += dy1;
                if (y01>y1+(105/40*r1)) {
                    missCount+=1;
                }    
            }
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind1==0 && (indTimer1>indTimerMax1 || indTimer1 ==0)){
            growingHole(x1,y1,r1,ir1);
            drawCat(x1,y01,r1);
            hider(x1,y1,r1);
            indTimer1=0;
            indTimerMax1=(Math.random()*50)+2;
        }
        else{
            ir1=0;
            indTimer1 +=1;
            timerD1 = 0;
            timerU1 = 0;
            //randomize where hole appears
            if(Gcount>50){
                x1=(Math.random()*330)+510;
                y1=(Math.random()*70)+30;
            }
            r1=(Math.pow(y1,0.5))*2;
            //dy1=((Math.random()*2)+1);
            y01=y1+(106/40*r1);
            ind1=0;
        }
    }
    if(Gcount>40){
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
                if(ir2<=r2 && ir2>1){
                    ir2 -= dr2;
                }
                else{
                    ir2=0;
                }
            }
            else{
                if(Gcount>40 && Gcount<51){
                    x2=(Math.random()*330)+510;
                    y2=(Math.random()*70)+180;
                }
                if(Gcount>50){
                    x2=(Math.random()*330)+510;
                    y2=(Math.random()*70)+180;
                }
                r2=(Math.pow(y2,0.5))*2;
                y02=y2+(105/40*r2);

                dy2=-dy2;
                timerD2 = 0;
                timeDown2 = (Math.random()*da)+db;
                dy2=-((Math.random()*uya)+uyb)*(r2/40);
            }
        }
        else{
            if(ir2<r2){
                ir2 += dr2;
            }
            else if(ir2>=r2){
                ir2=r2;
                y02 += dy2;
                if (y02>y2+(105/40*r2)) {
                    missCount+=1;
                }    
            }  
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind2==0 && (indTimer2>indTimerMax2 || indTimer2 ==0)){
            growingHole(x2,y2,r2,ir2);
            drawCat(x2,y02,r2);
            hider(x2,y2,r2);
            indTimer2=0;
            indTimerMax2=(Math.random()*50)+2;
        }
        else{
            ir2=0;
            indTimer2 +=1;
            timerD2 = 0;
            timerU2 = 0;
            //randomize where hole appears
            if(Gcount>40 && Gcount<51){
                    x2=(Math.random()*330)+510;
                    y2=(Math.random()*70)+180;
                }
                if(Gcount>50){
                    x2=(Math.random()*330)+510;
                    y2=(Math.random()*70)+180;
                }
            r2=(Math.pow(y2,0.5))*2;
            //dy2=((Math.random()*2)+1);
            y02=y2+(106/40*r2);
            ind2=0;
        }
    }
    if(Gcount>30){
        //change direction of increment if above or below limits, start/stop timer, choose random number, increment y0
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
                if(ir3<=r3 && ir3>1){
                    ir3 -= dr3;
                }
                else{
                    ir3=0;
                }
            }
            else{
                if(Gcount>30 && Gcount<41){
                    x3=(Math.random()*820)+40;
                    y3=(Math.random()*70)+30;
                }
                if(Gcount>40 && Gcount<46){
                    x3=(Math.random()*820)+40;
                    y3=(Math.random()*70)+30;
                }
                if(Gcount>45){
                    x3=(Math.random()*330)+60;
                    y3=(Math.random()*70)+30;
                }
                r3=(Math.pow(y3,0.5))*2;
                y03=y3+(105/40*r3);

                dy3=-dy3;
                timerD3 = 0;
                timeDown3 = (Math.random()*da)+db;
                dy3=-((Math.random()*uya)+uyb)*(r3/40);
            }
        }
        else{
            if(ir3<r3){
                ir3 += dr3;
            }
            else if(ir3>=r3){
                ir3=r3;
                y03 += dy3;
                if (y03>y3+(105/40*r3)) {
                    missCount+=1;
                }    
            }
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind3==0 && (indTimer3>indTimerMax3 || indTimer3 ==0)){
            growingHole(x3,y3,r3,ir3);
            drawCat(x3,y03,r3);
            hider(x3,y3,r3);
            indTimer3=0;
            indTimerMax3=(Math.random()*50)+2;
        }
        else{
            ir3=0;
            indTimer3 +=1;
            timerD3 = 0;
            timerU3 = 0;
            //randomize where hole appears
            if(Gcount>30 && Gcount<41){
                    x3=(Math.random()*820)+40;
                    y3=(Math.random()*70)+30;
                }
                if(Gcount>40 && Gcount<46){
                    x3=(Math.random()*820)+40;
                    y3=(Math.random()*70)+30;
                }
                if(Gcount>45){
                    x3=(Math.random()*330)+60;
                    y3=(Math.random()*70)+30;
                }
            r3=(Math.pow(y3,0.5))*2;
            //dy3=((Math.random()*2)+1);
            y03=y3+(106/40*r3);
            ind3=0;
        }
    }
    if(Gcount>20){
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
                if(ir4<=r4 && ir4>1){
                    ir4 -= dr4;
                }
                else{
                    ir4=0;
                }
            }
            else{
                if(Gcount>20 && Gcount<31){
                    x4=(Math.random()*780)+60;
                    y4=(Math.random()*70)+180;
                }
                if(Gcount>30 && Gcount<36){
                    x4=(Math.random()*780)+60;
                    y4=(Math.random()*70)+180;
                }
                if(Gcount>35 && Gcount<51){
                    x4=(Math.random()*350)+50;
                    y4=(Math.random()*70)+180;
                }
                if(Gcount>50){
                    x4=(Math.random()*350)+50;
                    y4=(Math.random()*70)+180;
                }
                r4=(Math.pow(y4,0.5))*2;
                y04=y4+(105/40*r4);

                dy4=-dy4;
                timerD4 = 0;
                timeDown4 = (Math.random()*da)+db;
                dy4=-((Math.random()*uya)+uyb)*(r4/40);
            }
        }
        else{
            if(ir4<r4){
                ir4 += dr4;
            }
            else if(ir4>=r4){
                ir4=r4;
                y04 += dy4;
                if (y04>y4+(105/40*r4)) {
                    missCount+=1;
                }    
            } 
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind4==0 && (indTimer4>indTimerMax4 || indTimer4 ==0)){
            growingHole(x4,y4,r4,ir4);
            drawCat(x4,y04,r4);
            hider(x4,y4,r4);
            indTimer4=0;
            indTimerMax4=(Math.random()*50)+2;
        }
        else{
            ir4=0;
            indTimer4 +=1;
            timerD4 = 0;
            timerU4 = 0;
            //randomize where hole appears
            if(Gcount>20 && Gcount<31){
                x4=(Math.random()*780)+60;
                y4=(Math.random()*70)+180;
            }
            if(Gcount>30 && Gcount<36){
                x4=(Math.random()*780)+60;
                y4=(Math.random()*70)+180;
            }
            if(Gcount>35 && Gcount<51){
                x4=(Math.random()*350)+50;
                y4=(Math.random()*70)+180;
            }
            if(Gcount>50){
                x4=(Math.random()*350)+50;
                y4=(Math.random()*70)+180;
            }
            r4=(Math.pow(y4,0.5))*2;
            //dy4=((Math.random()*2)+1);
            y04=y4+(106/40*r4);
            ind4=0;
        }
    }
    if(Gcount>10){
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
                if(ir5<=r5 && ir5>1){
                    ir5 -= dr5;
                }
                else{
                    ir5=0;
                }
            }
            else{
                if(Gcount>10 && Gcount<16){
                    x5=(Math.random()*740)+80;
                    y5=(Math.random()*220)+30;
                }
                if(Gcount>15 && Gcount<31){
                    x5=(Math.random()*740)+80;
                    y5=(Math.random()*70)+330;
                }
                if(Gcount>30 && Gcount<41){
                    x5=(Math.random()*740)+80;
                    y5=(Math.random()*70)+330;
                }
                if(Gcount>40 && Gcount<51){
                    x5=(Math.random()*740)+80;
                    y5=(Math.random()*70)+330;
                }
                if(Gcount>50){
                    x5=(Math.random()*740)+80;
                    y5=(Math.random()*70)+330;
                }
                r5=(Math.pow(y5,0.5))*2;
                y05=y5+(105/40*r5);

                dy5=-dy5;
                timerD5 = 0;
                timeDown5 = (Math.random()*da)+db;
                dy5=-((Math.random()*uya)+uyb)*(r5/40);
            }
        }
        else{
            if(ir5<r5){
                ir5 += dr5;
            }
            else if(ir5>=r5){
                ir5=r5;
                y05 += dy5;
                if (y05>y5+(105/40*r5)) {
                    missCount+=1;
                }    
            }
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind5==0 && (indTimer5>indTimerMax5 || indTimer5 ==0)){
            growingHole(x5,y5,r5,ir5);
            drawCat(x5,y05,r5);
            hider(x5,y5,r5);
            indTimer5=0;
            indTimerMax5=(Math.random()*50)+2;
        }
        else{
            ir5=0;
            indTimer5 +=1;
            timerD5 = 0;
            timerU5 = 0;
            //randomize where hole appears
            if(Gcount>10 && Gcount<16){
                x5=(Math.random()*740)+80;
                y5=(Math.random()*220)+30;
            }
            if(Gcount>15 && Gcount<31){
                x5=(Math.random()*740)+80;
                y5=(Math.random()*70)+330;
            }
            if(Gcount>30 && Gcount<41){
                x5=(Math.random()*740)+80;
                y5=(Math.random()*70)+330;
            }
            if(Gcount>40 && Gcount<51){
                x5=(Math.random()*740)+80;
                y5=(Math.random()*70)+330;
            }
            if(Gcount>50){
                x5=(Math.random()*740)+80;
                y5=(Math.random()*70)+330;
            }
            r5=(Math.pow(y5,0.5))*2;
            //dy5=((Math.random()*2)+1);
            y05=y5+(106/40*r5);
            ind5=0;
        }
    }
    if(Gcount>=0){
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
                if(ir6<=r6 && ir6>1){
                    ir6 -= dr6;
                }
                else{
                    ir6=0;
                }
            }
            else{
                if(Gcount<11){
                    x6=(Math.random()*740)+80;
                    y6=(Math.random()*470)+30;
                }
                if(Gcount>10 && Gcount<21){
                    x6=(Math.random()*740)+80;
                    y6=(Math.random()*20)+480;
                }
                if(Gcount>20 && Gcount<31){
                    x6=(Math.random()*740)+80;
                    y6=(Math.random()*20)+480;
                }
                if(Gcount>30 && Gcount<41){
                    x6=(Math.random()*740)+80;
                    y6=(Math.random()*20)+480;
                }
                if(Gcount>40 && Gcount<51){
                    x6=(Math.random()*740)+80;
                    y6=(Math.random()*20)+480;
                }
                if(Gcount>50){
                    x6=(Math.random()*740)+80;
                    y6=(Math.random()*20)+480;
                }
                r6=(Math.pow(y6,0.5))*2;
                y06=y6+(105/40*r6);

                dy6=-dy6;
                timerD6 = 0;
                timeDown6 = (Math.random()*da)+db;
                dy6=-((Math.random()*uya)+uyb)*(r6/40);
            }
        }
        else{
            if(ir6<r6){
                ir6 += dr6;
            }
            else if(ir6>=r6){
                ir6=r6;
                y06 += dy6;
                if (y06>y6+(105/40*r6)) {
                    missCount+=1;
                }    
            }
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind6==0 && (indTimer6>indTimerMax6 || indTimer6 ==0)){
            growingHole(x6,y6,r6,ir6);
            drawCat(x6,y06,r6);
            hider(x6,y6,r6);
            indTimer6=0;
            indTimerMax6=(Math.random()*50)+2;
        }
        else{
            ir6=0;
            indTimer6 +=1;
            timerD6 = 0;
            timerU6 = 0;
            // randomize where hole appears
            if(Gcount<11){
                x6=(Math.random()*740)+80;
                y6=(Math.random()*470)+30;
            }
            if(Gcount>10 && Gcount<21){
                x6=(Math.random()*740)+80;
                y6=(Math.random()*20)+480;
            }
            if(Gcount>20 && Gcount<31){
                x6=(Math.random()*740)+80;
                y6=(Math.random()*20)+480;
            }
            if(Gcount>30 && Gcount<41){
                x6=(Math.random()*740)+80;
                y6=(Math.random()*20)+480;
            }
            if(Gcount>40 && Gcount<51){
                x6=(Math.random()*740)+80;
                y6=(Math.random()*20)+480;
            }
            if(Gcount>50){
                x6=(Math.random()*740)+80;
                y6=(Math.random()*20)+480;
            }
            r6=(Math.pow(y6,0.5))*2;
            //dy6=((Math.random()*2)+1);
            y06=y6+(106/40*r6);
            ind6=0;
        }
    }

    score(Gcount,20,30);
    missedScore(missCount,140,30);
    livesCount(lives,750,30);

};