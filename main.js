
function pageObserver() {
    let observer;
    let observerb;
    let observerc;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    }
    let optionsb = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25
    }
    let optionsc = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    }
    observer = new IntersectionObserver(handleIntersect, options);
    observerb = new IntersectionObserver(handleIntersect, optionsb);
    observerc = new IntersectionObserver(handleIntersect, optionsc);
    const section = document.getElementById('section-1');
    observer.observe(section);
    const lens = document.getElementById('lens');
   
};
function projectObserver() {
    let observer;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    observer = new IntersectionObserver(handler, options);
    const project = document.querySelectorAll('.project');
    project.forEach((e) => {
        observer.observe(e);
    })
}
function handleIntersect(entries) {
    entries.forEach(entry => {
        let style = entry.target.style
        if (entry.isIntersecting) {
            style.backgroundColor = 'white';
            entry.target.classList.add('grow');
        } else {
            style.backgroundColor = 'black';
            style.color = 'black';
            entry.target.classList.remove('grow');
        }
    })
};
function handler(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add('slidein');
        } else {
            entry.target.classList.remove('slidein');
        }
    })
}
window.addEventListener("load", (e) => {
    pageObserver();
    projectObserver();
});