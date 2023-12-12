const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)





const tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start:  "0% 95%",
    end: "50% 50%",
    scrub: true,
}})

tl.to("#fanta",{
    top:"120%",
    left: '0%'
},'orange')
tl.to("#orange-cut",{
    top: "160%",
    left: "23%"
},'orange')
tl.to("#orange",{
    top: "160%",
    right: "10%",
    width: "15%"
},'orange')
tl.to("#leaf3",{
    top: "105%",
    right: "0%",
},'orange')
tl.to("#leaf",{
    top: "100%",
    left: "40%",
    rotate: "-35%"
},'orange')
tl.to("#leaf2",{
    top: "110%",
    left: "0%",
    rotate: "90%"
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-100deg",
    top: "110%",
    left: "100%"
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "100deg",
    top: "110%",
    left: "100%"
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')

var tl5 = gsap.timeline({scrollTrigger:{
    trigger: ".four",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
}})

tl5.to("#cocacola",{
    top:"140%",
    left: "170%",
    rotate: "360%"
},'four')
tl5.to(".lemon1",{
    top: "130%",
    left: "180%",
    rotate: "360"
},'four')
tl5.from("#co-leaf2",{
    top: "0%",
    left: "180%",
    rotate:"0"
},'four')
tl5.from("#glass2",{
    top: "-120",
    left: "120%",
    rotate: "0"
},'four')
tl5.from("#glass",{
    top: "-120%",
    right: "100%",
    rotate: "360%",
    opacity: "0"
},'four')
tl5.from("#co-leaf",{
    top: "-10%",
    opacity: "0",
    right: "300%",
    rotate: "360%"
},'four')
tl5.from("#co-leaf3",{
    right: "200%"
},'four')


var tl6 = gsap.timeline({scrollTrigger:{
    trigger: ".six",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
}})

tl6.to("#cocacola",{
    top:"280%",
    left: "50%",
    rotate: "35deg"
},'six')
tl6.to(".lemon1",{
    top:"325%",
    left: "75%",
},'six')

var tl7 = gsap.timeline({scrollTrigger:{
    trigger: ".six",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    //  markers: true,
}})
tl7.to("#co-leaf2",{
    top:"105%",
    rotate: "0"
},'six')
tl7.to("#glass",{
    top:"160%",
    right: "0%",
    rotate:"-35deg",

},'six')
tl7.to("#co-leaf3",{
    top:"100%",
    left: "5%",
    rotate: "-350deg"

},'six')
tl7.to("#co-leaf",{
    top:"100%",
    left: "50%",
    rotate: "320"
},'six')
tl7.to("#glass2",{
    top:"145%",
    left: "45%",
},'six')
var tl8 = gsap.timeline({scrollTrigger:{
    trigger: ".seven",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})
tl8.to("#cocacola",{
    top:"425%",
    left: "283%",
    rotate: "0"
},'six')
tl8.to(".lemon1",{
    top:"465%",
    left: "250%",
    rotate: "0"
},'six')
tl8.to("#co-leaf2",{
    top:"200%",
    rotate: "0"
},'six')
tl8.to("#glass",{
    top:"255%",
    left: "0"
},'six')
tl8.to("#glass2",{
    top:"247%",
    left: "43%",
    rotate: "0"
},'six')
tl8.to("#co-leaf3",{
    top:"210%",
    left: "50%",
    rotate: "0"
},'six')
tl8.to("#co-leaf",{
    top:"197%",
    left: "0%",
},'six')