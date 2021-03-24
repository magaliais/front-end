new fullpage('#fullpage', {     // div id that represents our first full page
  autoScrolling: true,     // slide behavior
  navigation: true,     // navigation buttons
  navigationPosition: 'right',

  // title animations
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector('h1')
    const tl = new TimelineMax({delay: 0.5});
    tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1})

  }
});