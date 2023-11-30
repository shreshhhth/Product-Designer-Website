var timeout;



function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
        });
}



document.querySelectorAll(".elem").forEach(function (elem) {
    const img = elem.querySelector("img");

    elem.addEventListener("mouseenter", function () {
        gsap.to(img, { opacity: 1, duration: 0.5 });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(img, { opacity: 0, duration: 0.5 });
    });
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),  /* el is the top most element in HTML in which the whole website is running, which in this case is main*/
    smooth: true,
});

function firstPageAnim() {

    gsap.from(
        "#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    }
    )
    gsap.to(
        ".boundingelem", {
        y: '0',
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2  //to give some delay to different elements in the animation
    }
    )
    gsap.from(
        "#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: 1,
        ease: Expo.easeInOut
    }
    )



}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`; /*backticks are used to join two operators*/
    });

}

function circleSkew() {
    var timeout;
    //define the default scale value
    var xscale = 1;
    var yscale = 1;

    //global variables to store the previous values of x and y
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        //the values we get from the about is our scaled values so

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        // var xdiff = dets.clientX - xprev;   //this will give the difference between the current location and previous location in X axis
        // var ydiff = dets.clientY - yprev;   //this will give the difference between the current location and previous location in X axis
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        //to make circle back to its original shape we set a 100ms timeout
        timeout = setTimeout(function () {
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

        })

    });
}


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});





/*calling the functions here*/
circleMouseFollower();
firstPageAnim();
circleSkew();


