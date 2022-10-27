const image = document.querySelector('img');
const io = new IntersectionObserver(
    (entries, io) => {
        if (!FileSystemEntry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            io.unobserve(entry.target);
        }
    });

pimages.forEach(image => {
    io.observe(image);
})

