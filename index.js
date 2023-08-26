function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
init()

var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var media = document.querySelector(".media")
document.addEventListener("mousemove", function(dets){
    cursor.style.left=dets.x+20+"px"
    cursor.style.top=dets.y+20+"px"
})
media.addEventListener("mouseenter", function(){
    cursor.style.backgroundColor="#EBDFFF"
    cursor.style.color="#111"
    cursor.style.height="12px"
    cursor.style.width="3vw"
    cursor.style.borderRadius="0px"
    cursor.innerText="tap here"
    cursor.style.fontSize="10px"

})
media.addEventListener("mouseleave", function(dets){
    cursor.style.left=dets.x+20+"px"
    cursor.style.top=dets.y+20+"px"
    cursor.style.backgroundColor="#EBDFFF"
    cursor.style.height="10px"
    cursor.style.width="10px"
    cursor.style.borderRadius="50%"
    cursor.innerText=""
    cursor.style.fontSize="0px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top 27%",
        end: "top 0",
        scrub:3,
    }
})
tl.to("#page1 h1", {
    x:-70,
}, "anim")
tl.to("#page1 h2", {
    x:100,
}, "anim")
tl.to("#page1 video", {
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top -127%",
        end: "top -130%",
        scrub:3,
    }
})
tl2.to("#main", {
    backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top -227%",
        end: "top -210%",
        scrub:3,
    }
})
tl3.to("#main",{
    backgroundColor:"#0f0d0d"
})

var box=document.querySelectorAll('.box')
box.forEach(function(el){
    el.addEventListener("mouseenter", function(){
        var att = el.getAttribute("data-image")
        cursor.style.width="450px"
        cursor.style.height="380px"
        cursor.style.borderRadius="0px"
        cursor.style.backgroundImage=`url(${att})`

    })

    el.addEventListener("mouseleave", function(){
        cursor.style.width="20px"
        cursor.style.height="20px"
        cursor.style.borderRadius="50%"
        cursor.style.backgroundImage=`none`
    })
})
var h4 = document.querySelectorAll("#nav")
var purple=document.querySelector("#purple")
h4.forEach(function(el){
    el.addEventListener("mouseenter", function(){
        purple.style.display="block"
        purple.style.opacity="1"
    })
    el.addEventListener("mouseleave", function(){
        purple.style.display="none"
        purple.style.opacity="0"
    })
})

var marq = document.querySelectorAll("#nav h4")
marq.forEach(function(el){
    el.addEventListener("mouseenter", function(){
    var att = el.getAttribute("data-id")
    purple.innerHTML +=`<marquee scrollamount="23" style='font-size:90px; font-weight:600;'>${att}  ${att}  ${att}  ${att}  ${att}  ${att}</marquee>`;
    purple.style.display="flex"
    purple.style.alignItems="center";
    purple.style.justifyContent="center";
})
el.addEventListener("mouseleave", function(){
    purple.innerHTML=""
    purple.style.display="none"
})
})