Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  delay:0.5,
  
});
gsap.to('#box',{
  x:1550,
  duration:2,
  delay:1,
  rotate:360,
  repeat:-1,
  yoyo:true,
  backgroundColor:"#02528A",
  borderRadius: "50%",
  scrollTrigger:"#box",
}) 
gsap.from('#top1',{
  scale:0,
  delay:0.5,
  duration:1,
  rotate:180,
  scrollTrigger:"#top1",
})
gsap.from('#top2',{
  scale:0,
  delay:1,
  duration:1,
  rotate:-180,
  scrollTrigger:'#top2'
})
gsap.from('#top3',{
  scale:0,
  delay:2,
  duration:1,
  rotate:260,
  scrollTrigger:'#top3'
})

