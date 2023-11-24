var box = document.querySelector(".co-container")// select the container from html 

box.addEventListener("mousemove",function(fnc){
    var lmouse = box.getBoundingClientRect();// This is showing to where is you pointer
    var Wmouse = fnc.clientX - lmouse.left ; // clientX means Width and this line is minus the value of lmouse in left sie
    if(Wmouse<lmouse.width/2){ //Wmouse<lmouse.width/2 🌟 this is half a width
        // 👇 this is gsap 
        var red = gsap.utils.mapRange(
            0, // Left side se
            lmouse.width/2, // Half box tak
            255, // If mouse if left side
            0, // If your mouse if half line touch in the box
            Wmouse //Start a right side
        );
        // 👇 Then execute this code CSS using Gsap
        gsap.to(box,{
            backgroundColor : `rgb(${red},0,0)`,
            ease : Power4
        });
    }
    else{
        var blue = gsap.utils.mapRange(
            lmouse.width/2, // Box ke half se start
            lmouse.width, // Box ke end tak
            0, //starting color
            255, // Ending color
            Wmouse // ye var ka
        );
        gsap.to(box,{
            backgroundColor : `rgb(0,0,${blue})`,
            ease : Power4
        });
    }
})


// 👇 If leave to this box then what's listner work 
box.addEventListener("mouseleave", function(){
    gsap.to(box,{
        backgroundColor : "white"
    });
})