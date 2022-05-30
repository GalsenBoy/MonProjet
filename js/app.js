let body = document.querySelector('body')
let boite = document.querySelector('.hamburger');
boite.addEventListener('click', function(e) {
    body.classList.toggle('open');
    e.target.classList.toggle('active')
})

//Api Observer
//On déclare notre div
const radius = document.querySelector('.radius');
const card = document.querySelector('.card')
    //Nos paramètres d'options
let options = {
        root: null,
        threshold: 0.5
    }
    //entries c'est les éléments qu'on observe
function handleIntersect(entries) {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.toggle('show')
                entry.target.style.opacity = 1;
            }
        })
        //console.log(entries);
}
//on crée crée notre constructeur 
const observer = new IntersectionObserver(handleIntersect, options);
//On observe notre div radius
observer.observe(radius);
observer.observe(card)