//level 4 function
function level4(){
    document.getElementById('myCanvas').style.background='rgb(9, 180, 32)';
    drawSky();
    Hole(x3,y3,r3);
    trashCan(x3,y3,r3);
    Hole(x8,y8,r8);
    trashCan(x8,y8,r8);

    if(Gcount>20){
        if(y01 < y1+(5/40*r1)){
                
            if(timerU1<timeUp1){
                timerU1+=1;
                y01=y1+(5/40*r1)-0.1;
            }
            else{
                dy1=-dy1;
                timerU1 = 0;
                y01=y1+(5/40*r1);
                timeUp1 = (Math.random()*ua)+ub+200;
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
            //y1+=ya1;

            //y01+=ya1;
        }
        else{
            if(ind11==1){
                fallingCloud(x1,y1,r1);
                y01=800;
                y1+=3;
                indTimer1 +=1;
                if(y1>200){
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
                y1=30;
                r1=8;//(Math.pow(y1,0.5))*2;
                y01=y1+(106/40*r1);
                ind1=0;
            }
        }
    
    }



    if(Gcount>50){
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
                timeUp2 = (Math.random()*ua)+ub+200;
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
            if(y02>y2+(105/40*r2) && x2>50 && x2<850) {
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
            //y2+=ya2;

            //y02+=ya2;
        }
        else{
            if(ind22==1){
                fallingCloud(x2,y2,r2);
                y02=800;
                y2+=3;
                indTimer2 +=1;
                if(y2>200){
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
                y2=100;
                r2=12;//(Math.pow(y2,0.5))*2;
                y02=y2+(106/40*r2);
                ind2=0;
            }
        }
        
    }


    if(Gcount>40){
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
            if(y03>y3+(105/40*r3)) {
                missCount+=1;
            }   
        }
        Hole(x3,y3,r3);
        //decide whether to draw cat, choose random number for indTimerMax
        if(ind3==0 && (indTimer3>indTimerMax3 || indTimer3 ==0)){
            drawCat(x3,y03,r3);
            indTimer3=0;
            indTimerMax3=Math.random()*100;
        }
        else{
            indTimer3 +=1;
            timerD3 = 0;
            timerU3 = 0;
            //dy3=(Math.random()*2)+1;
            y03=y3+(106/40*r3);
            ind3=0;
        }
        
        trashCan(x3,y3,r3);
    }


    if(Gcount>=0){
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
                x4=(Math.random()*350)+50;
                y4=(Math.random()*150)+200;
                r4=13;//(Math.pow(y4,0.5))*2;
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
            x4=(Math.random()*350)+50;
            y4=(Math.random()*150)+200;
            r4=13;//(Math.pow(y4,0.5))*2;
            //dy4=((Math.random()*2)+1);
            y04=y4+(106/40*r4);
            ind4=0;
        }
    }
    

    if(Gcount>30){
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
                x5=(Math.random()*350)+500;
                y5=(Math.random()*140)+215;
                r5=13;//(Math.pow(y5,0.5))*2;
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
            x5=(Math.random()*350)+500;
            y5=(Math.random()*140)+215;
            r5=13;//(Math.pow(y5,0.5))*2;
            //dy5=((Math.random()*2)+1);
            y05=y5+(106/40*r5);
            ind5=0;
        }
    }
    

    if(Gcount>50){
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
                x6=(Math.random()*350)+50;
                y6=(Math.random()*50)+400;
                r6=20;//(Math.pow(y6,0.5))*2;
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
            x6=(Math.random()*350)+50;
            y6=(Math.random()*50)+400;
            r6=20;//(Math.pow(y6,0.5))*2;
            //dy6=((Math.random()*2)+1);
            y06=y6+(106/40*r6);
            ind6=0;
        }
    }


    if(Gcount>=0){
        if(y07 < y7+(5/40*r7)){
            
            if(timerU7<timeUp7){
                timerU7+=1;
                y07=y7+(5/40*r7)-0.1;
            }
            else{
                dy7=-dy7;
                timerU7 = 0;
                y07=y7+(5/40*r7);
                timeUp7 = (Math.random()*ua)+ua;
                dy7=((Math.random()*dya)+dyb)*(r7/40);
            }
        }
        else if(y07 > y7+(105/40*r7)){
            if(timerD7<timeDown7){
                timerD7+=1;
                y07=y7+(105/40*r7)+0.1;
                if(ir7<=r7 && ir7>1){
                    ir7 -= dr7;
                }
                else{
                    ir7=0;
                }
            }
            else{
                x7=(Math.random()*350)+500;
                y7=(Math.random()*120)+400;
                r7=20;//(Math.pow(y7,0.5))*2;
                y07=y7+(105/40*r7);

                dy7=-dy7;
                timerD7 = 0;
                timeDown7 = (Math.random()*da)+db;
                dy7=-((Math.random()*uya)+uyb)*(r7/40);
            }
        }
        else{
            if(ir7<r7){
                ir7 += dr7;
            }
            else if(ir7>=r7){
                ir7=r7;
                y07 += dy7;
                if (y07>y7+(105/40*r7)) {
                    missCount+=1;
                }    
            }
        }

        //decide whether to draw cat, choose random number for indTimerMax
        if(ind7==0 && (indTimer7>indTimerMax7 || indTimer7 ==0)){
            growingHole(x7,y7,r7,ir7);
            drawCat(x7,y07,r7);
            hider(x7,y7,r7);
            indTimer7=0;
            indTimerMax7=(Math.random()*50)+2;
        }
        else{
            ir7=0;
            indTimer7 +=1;
            timerD7 = 0;
            timerU7 = 0;
            // randomize where hole appears
            x7=(Math.random()*350)+500;
            y7=(Math.random()*120)+400;
            r7=20;//(Math.pow(y7,0.5))*2;
            //dy7=((Math.random()*2)+1);
            y07=y7+(106/40*r7);
            ind7=0;
        }
    }


    if(Gcount>10){
        if(y08 < y8+(5/40*r8)){
            
            if(timerU8<timeUp8){
                timerU8+=1;
                y08=y8+(5/40*r8)-0.1;
            }
            else{
                dy8=-dy8;
                timerU8 = 0;
                y08=y8+(5/40*r8);
                timeUp8 = (Math.random()*ua)+ub;
                dy8=((Math.random()*dya)+dyb)*(r8/40);
            }
        }
        else if(y08 > y8+(105/40*r8)){
            if(timerD8<timeDown8){
                timerD8+=1;
                y08=y8+(105/40*r8)+0.1;
            }
            else{
                dy8=-dy8;
                timerD8 = 0;
                timeDown8 = (Math.random()*da)+db;
                dy8=-((Math.random()*uya)+uyb)*(r8/40);
                y08=y8+(105/40*r8);
            }
        }
        else{
            y08 += dy8;
            if(y08>y8+(105/40*r8)) {
                missCount+=1;
            }   
        }
        Hole(x8,y8,r8);
        //decide whether to draw cat, choose random number for indTimerMax
        if(ind8==0 && (indTimer8>indTimerMax8 || indTimer8 ==0)){
            drawCat(x8,y08,r8);
            indTimer8=0;
            indTimerMax8=Math.random()*100;
        }
        else{
            indTimer8 +=1;
            timerD8 = 0;
            timerU8 = 0;
            //dy8=(Math.random()*2)+1;
            y08=y8+(106/40*r8);
            ind8=0;
        }
    }

    trashCan(x8,y8,r8);
    

    drawTree(100);
    drawTree(730);
    drawTree(800);
    //trashCan(x3,y3,r3);
    
    score(Gcount,20,30);
    missedScore(missCount,140,30);
    livesCount(lives,750,30);

};