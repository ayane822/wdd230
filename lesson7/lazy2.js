// generate HTML
for (let i = 1; i <= 41; i++) {
    const img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", `https://picsum.photos/1600/900?${i}`);
    document.body.appendChild(img);
  }
  
  // observing intersection
  let paragraphs = document.querySelectorAll("img");
  
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  };
  
  const options = {
    threshold: 0.7
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  paragraphs.forEach((parag) => observer.observe(parag));
  