$(document).ready(function() {
  // Handler for .ready() called.

    //answer is img 2
    var q1 =['../sunsilk/assets/6.png','../sunsilk/assets/2.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png',
            '../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/6.png',
            '../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/1.png',
            '../sunsilk/assets/1.png','../sunsilk/assets/1.png','../sunsilk/assets/1.png','../sunsilk/assets/1.png','../sunsilk/assets/6.png']

    for (var num=1; num<=20; num++){
            var random = Math.floor((Math.random()*q1.length));
            $("#no"+num).html("<img src="+ q1[random] + ">");
            q1.splice(random,1);
    }

    //answer is img 1
    var q2 =['../sunsilk/assets/6.png','../sunsilk/assets/2.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png',
            '../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/6.png',
            '../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/2.png',
            '../sunsilk/assets/1.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png']

    for (var num=21; num<=40; num++){
            var random = Math.floor((Math.random()*q2.length));
            $("#no"+num).html("<img src="+ q2[random] + ">");
            q2.splice(random,1);
    }

    //answer is img 3
    var q3 =['../sunsilk/assets/6.png','../sunsilk/assets/2.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png',
            '../sunsilk/assets/3.png','../sunsilk/assets/4.png','../sunsilk/assets/4.png','../sunsilk/assets/5.png','../sunsilk/assets/5.png',
            '../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/2.png',
            '../sunsilk/assets/1.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png']

    for (var num=41; num<=60; num++){
            var random = Math.floor((Math.random()*q3.length));
            $("#no"+num).html("<img src="+ q3[random] + ">");
            q3.splice(random,1);
    }

    //answer is img 6
    var q4 =['../sunsilk/assets/6.png','../sunsilk/assets/2.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png','../sunsilk/assets/7.png',
            '../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png',
            '../sunsilk/assets/5.png','../sunsilk/assets/5.png','../sunsilk/assets/5.png','../sunsilk/assets/5.png','../sunsilk/assets/2.png',
            '../sunsilk/assets/1.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png']

    for (var num=61; num<=80; num++){
            var random = Math.floor((Math.random()*q4.length));
            $("#no"+num).html("<img src="+ q4[random] + ">");
            q4.splice(random,1);
    }

    //answer is img 7
    var q5 =['../sunsilk/assets/7.png','../sunsilk/assets/2.png','../sunsilk/assets/4.png','../sunsilk/assets/5.png','../sunsilk/assets/5.png',
            '../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/3.png','../sunsilk/assets/6.png',
            '../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/6.png','../sunsilk/assets/2.png',
            '../sunsilk/assets/1.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png','../sunsilk/assets/2.png']

    for (var num=81; num<=100; num++){
            var random = Math.floor((Math.random()*q5.length));
            $("#no"+num).html("<img src="+ q5[random] + ">");
            q5.splice(random,1);
    }

    //start coding for the damn timer

    var currentSec = $(".timespan").html();
    var loopcount;

    $(".timeOn").click(function(){
        function startwatch() {
            currentSec++;
            $(".timespan").html(currentSec);
        }
        loopcount = setInterval(startwatch, 1000);
    });

    $("div[id^='no']").click(function(){
            var test = this.id;
            //alert($("#"+test+" img").attr('src') == "../sunsilk/assets/2.png");
            //alert($(location).attr('href'));
            //alert($("#"+test+" img").attr('src') == "../sunsilk/assets/2.png" && $(location).attr('href') == "http://10.14.105.133/webserver/sunsilk/#question1")
            
            if ($("#"+test+" img").attr('src') == "../sunsilk/assets/2.png" && $(location).attr('href') == "http://ec2-23-20-8-70.compute-1.amazonaws.com/campaign/SG/sunsilk/#question1"){
                clearInterval(loopcount);
                $.mobile.changePage("#instruct2",{transition: "fade"});
            } else {

            }

            if ($("#"+test+" img").attr('src') == "../sunsilk/assets/1.png" && $(location).attr('href') == "http://ec2-23-20-8-70.compute-1.amazonaws.com/campaign/SG/sunsilk/#question2"){
               clearInterval(loopcount);
                $.mobile.changePage("#instruct3",{transition: "fade"});
            } else {
                
            } 

            if ($("#"+test+" img").attr('src') == "../sunsilk/assets/3.png" && $(location).attr('href') == "http://ec2-23-20-8-70.compute-1.amazonaws.com/campaign/SG/sunsilk/#question3"){
                clearInterval(loopcount);
                $.mobile.changePage("#instruct4",{transition: "fade"});
            } else {
                //alert("fuck no");
            }

            if ($("#"+test+" img").attr('src') == "../sunsilk/assets/6.png" && $(location).attr('href') == "http://ec2-23-20-8-70.compute-1.amazonaws.com/campaign/SG/sunsilk/#question4"){
               clearInterval(loopcount);
                $.mobile.changePage("#instruct5",{transition: "fade"});
            } else {
                
            }   

            if ($("#"+test+" img").attr('src') == "../sunsilk/assets/7.png" && $(location).attr('href') == "http://ec2-23-20-8-70.compute-1.amazonaws.com/campaign/SG/sunsilk/#question5"){
                clearInterval(loopcount);
                $("#totaltime").html(currentSec + " seconds")
                $.mobile.changePage("#result",{transition: "fade"});
            } else {
                
            }    
    });

    $("#replaygame").click(function(){
        $(".timespan").html("0");
        currentSec=0;
        $.mobile.changePage("#start",{transition: "fade"});
    });

    window.addEventListener('shake', shakeEventDidOccur, false);
    
    //define a custom method to fire when shake occurs.
    function shakeEventDidOccur () {
    
        $("#bottle-before").fadeOut(2000);
        $("#bottle-after").delay(500).fadeIn(1800);
        $("#sunsilk-text").delay(500).fadeIn(1800);
        $("#tap-continue").delay(500).fadeIn(1800);
    }
    
});


