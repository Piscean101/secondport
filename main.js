
function pageObserver() {
    let observer;
    let observerb;
    let observerc;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
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
function blockObserver() {
    let observer;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    }
    observer = new IntersectionObserver(handletext, options);
    const block = document.querySelectorAll('.block');
    block.forEach((e) => {
        let c = e.children;
        observer.observe(c);
    })
}
function projectObserver() {
    let observer;
    const project = document.querySelectorAll('.project');
    const footer = document.querySelector('footer');
    const logo = document.querySelectorAll('.logo');
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    observer = new IntersectionObserver(handler, options);
    observeonce = new IntersectionObserver(handleonce, options);
    project.forEach((e) => {
        observer.observe(e);
    });
    logo.forEach((e) => {
        observeonce.observe(e);
    })
    observeonce.observe(footer);
};
function handleIntersect(entries) {
    entries.forEach(entry => {
        let style = entry.target.style;
        let rise = document.querySelectorAll('.rise');
        if (entry.isIntersecting) {
            style.backgroundColor = 'white';
            entry.target.classList.add('grow');
            rise.forEach((e) => {
                e.classList.add('float');
            })
        } else {
            style.backgroundColor = 'black';
            style.color = 'black';
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
    const logos = document.querySelectorAll('.logo');
    window.addEventListener("scroll", (e) => {
        function checkHeight() {
            logos.forEach((logo) => {
                const edge = logo.getBoundingClientRect().top;
                console.log(edge);
                if (edge < 300) {
                    logo.classList.add('slidein');
                }
            })
        }
        checkHeight();
    });
});

