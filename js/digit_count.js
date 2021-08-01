function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  animateValue(document.getElementById("judges"), 0, 4, 5000);
  animateValue(document.getElementById("themes"), 0, 6, 5000);
  animateValue(document.getElementById("teams"), 0, 100, 5000);
  animateValue(document.getElementById("prizes"), 0, 10, 5000);