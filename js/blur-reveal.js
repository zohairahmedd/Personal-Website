// blur reveal animation
document.addEventListener('DOMContentLoaded', function() {
  // options for the Intersection Observer
  const options = {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // trigger when at least 10% of the element is visible
  };

  // create an observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // add the 'reveal' class when element is in view
        entry.target.classList.add('reveal');
        
        // if the element should only animate once, unobserve it
        if (entry.target.dataset.once === 'true') {
          observer.unobserve(entry.target);
        }
      } else if (entry.target.dataset.once !== 'true') {
        // remove the class if it should animate every time it enters the viewport
        entry.target.classList.remove('reveal');
      }
    });
  }, options);

  // get all elements with the blur-reveal class
  const elements = document.querySelectorAll('.blur-reveal');
  
  // observe each element
  elements.forEach(element => {
    observer.observe(element);
  });

  // for staggered animations
  const staggerGroups = document.querySelectorAll('.blur-reveal-group');
  
  staggerGroups.forEach(group => {
    const children = group.querySelectorAll('.stagger-item');
    
    // set delay for each child
    children.forEach((child, index) => {
      const delay = parseFloat(group.dataset.staggerDelay || 0.1);
      child.style.transitionDelay = `${index * delay}s`;
    });
    
    // observe the group
    observer.observe(group);
  });
});

