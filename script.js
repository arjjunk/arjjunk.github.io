

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);


const mouseEffect = document.querySelector('.mouse-effect');

document.addEventListener('mousemove', e => {
  mouseEffect.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


// Name Animation

SplitText.create(".name", {
  type: "words,chars",
  mask: "chars",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.chars, {
      duration: 2,
      x: 800, 
      y: 800, 
      autoAlpha: 0, 
      stagger: 0.2
    })
  }
});

// Section Heading Animation

function sectionHeadingAnimation(selector){
  SplitText.create(selector, {
  type: "words,chars",
  mask: "chars",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.chars, {
      scrollTrigger: {
        trigger: selector,
        start: "top 75%", 
        toggleActions: "play reverse play reverse"
      },
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.2
    });
  }
});
}

sectionHeadingAnimation(".about-heading");
sectionHeadingAnimation(".contact-heading");
sectionHeadingAnimation(".works-heading");

// Text Line Animation

function splitLineAnimate(selector) {
  SplitText.create(selector, {
    type: "lines, words",
    mask: "lines",
    autoSplit: true,
    onSplit(self) {
      gsap.from(self.lines, {
        scrollTrigger: {
          trigger: selector,
          start: "top 75%", 
          toggleActions: "play reverse play reverse"
        },
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.3
      });
    }
  });
}

splitLineAnimate(".about-content");
splitLineAnimate(".about-sub-heading");
splitLineAnimate(".skills-heading");
splitLineAnimate(".skill-category");
splitLineAnimate(".cta-content");
splitLineAnimate(".contact-content");



// About Image Animation

gsap.from("#about-img",{
  scrollTrigger: {
    trigger: "#about-img",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  },
  x: -500,
  y: 400,
  rotate: 40,
  duration:1
});

// Card Animation


function cardAnimation(selector, trigger) {
  gsap.from(selector,{
    scrollTrigger: {
      trigger: trigger,
      start: "top 75%",
      toggleActions: "play reverse play reverse",
    },
    x: -200,
    opacity:0,
    duration:1,
    stagger: 0.5
  });
}

cardAnimation(".skill-card", ".skill-container")


// Balloon Animation

let flipCtx;

const createTimeline = () => {
  flipCtx && flipCtx.revert();

  flipCtx = gsap.context(() => {
    const secondState = Flip.getState(".second .marker");
    const thirdState = Flip.getState(".third .marker");
    const fourthState = Flip.getState(".fourth .marker");
    const fifthState = Flip.getState(".fifth .marker");
    const sixthState = Flip.getState(".sixth .marker");
    const flipConfig = {
      ease: "none",
      duration: 2
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flip-container.initial",
        start: "clamp(top center)",
        endTrigger: ".sixth",
        end: "clamp(top center)",
        scrub: true,
      }
    });

    tl.add(Flip.fit(".box", secondState, flipConfig)).add(
      Flip.fit(".box", thirdState, flipConfig)
    ).add(Flip.fit(".box", fourthState, flipConfig)).add(
      Flip.fit(".box", fifthState, flipConfig)
    ).add(Flip.fit(".box", sixthState, flipConfig));
  });
};


// Horizontal Scrolling

createTimeline();

window.addEventListener("resize", createTimeline);

const sections = gsap.utils.toArray(".panel");

let horizontalScroll = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".works",
    pin: true,
    scrub: 1,
    snap: false,
    end: () => "+=" + document.querySelector(".works-container").offsetWidth
  }
});


// Animate items inside horizontal scroll
sections.forEach((panel,i) => {
  const right = panel.querySelector(".panel-right");
  const company = right.querySelector(".company");
  const desc = right.querySelector(".work-desc");
  let startPos = i === 0 ? "left 95%" : "left 75%";
  if (company) {
    let splitCompany = new SplitText(company, { type: "words, chars" });
    gsap.from(splitCompany.chars, {
      scrollTrigger: {
        trigger: right,
        containerAnimation: horizontalScroll, // 🔑 tie to horizontal scroll
        start: startPos,
        end: "left 60%",
        toggleActions: "play reverse play reverse",
        scrub: true
      },
      y: 30,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1
    });
  }

  if (desc) {
    let splitDesc = new SplitText(desc, { type: "words" });
    gsap.from(splitDesc.words, {
      scrollTrigger: {
        trigger: right,
        containerAnimation: horizontalScroll,
        start: startPos,
        end: "left 60%",
        toggleActions: "play reverse play reverse",
        scrub: true
      },
      y: 50,
      autoAlpha: 0,
      stagger: 1,
      duration: 10
    });
  }
});


const hint = document.querySelectorAll('.scroll-down, .scroll-indicator');
  new IntersectionObserver(e =>
    hint.forEach(el => el.classList.toggle('hide', e[0].isIntersecting))
  ).observe(document.querySelector('.last'));




