let crsr = document.querySelector("#cursor")
let crsrblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x - 200 + "px"
    crsrblur.style.top = dets.y - 200 + "px"
})


gsap.to("#nav", {
    backgroundColor: "#0cf6c7ee",
    height: "78px",
    duration: 0.5,
    scrollTrigger: {        //we are triggering #nav and scrolling body
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -100 %",
        scrub: 2

    }
})

