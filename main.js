
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
        threshold: 0.7
    }
    let optionsc = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    }
    observer = new IntersectionObserver(handleIntersect, options);
    observerb = new IntersectionObserver(handleIntersect, optionsb);
    observerc = new IntersectionObserver(handleIntersect2, optionsc);
    /* */
    const section = document.getElementById('section-1');
    const lens = document.getElementById('lens');
    const innersection = document.querySelectorAll('.content-section');
    /* */
    observer.observe(section);
    innersection.forEach((e) => {
        observerb.observe(e);
    })
};
function projectObserver() {
    let observer;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    observer = new IntersectionObserver(handler, options);
    observeonce = new IntersectionObserver(handleonce, options);
    const project = document.querySelectorAll('.project');
    project.forEach((e) => {
        observer.observe(e);
    });
    const footer = document.querySelector('footer');
    observeonce.observe(footer);
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
function handleIntersect2(entries) {
    entries.forEach(entry => {
        entry.target.style.backgroundColor = blue;
    }) 
}
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
function handleonce(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slidein');
        }
    })
}
window.addEventListener("load", (e) => {
    pageObserver();
    projectObserver();
});