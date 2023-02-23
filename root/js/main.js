

let parallax = gsap.timeline();
parallax
    .to('#start svg', 3, {
        scrollTrigger: {
            trigger: ".balloon",
            start: "top bottom",
            end: "top 10%",
            scrub: true
        },
        y: -200,
    })
    .to('.balloon', 3, {
        scrollTrigger: {
            trigger: ".balloon",
            end: "top 10%",
            scrub: true
        },
        y: -900,
    }, '-=3')
    .to('.cls-1', {
        scrollTrigger: {
            trigger: '.cls-1',
            scrub: true,
            start: 'top 10%',
            end: "90% center"
        },
        strokeDashoffset:0,
        ease: 'none',
        duration: 3
    })
    .to('.cls-2', {
        scrollTrigger: {
            trigger: '.cls-2',
            scrub: true,
            start: 'top 10%',
            end: "85% top"
        },
        strokeDashoffset:0,
        ease: 'none',
        duration: 3
    });
    
