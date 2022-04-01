const body = document.querySelector('body');
const crypto = document.querySelector('#crypto')
crypto.addEventListener('mouseover', function(e) {
    document.getElementById('ul_crypto').style.display = "block";
    document.getElementById('ul_nft').style.display = "none";
    document.getElementById('ul_metavers').style.display = "none";
    body.addEventListener('click', function() {
        document.getElementById('ul_crypto').style.display = "none";
    })
})
const nft = document.querySelector("#nft")
nft.addEventListener('mouseover', function(e) {
    document.getElementById('ul_nft').style.display = "block";
    document.getElementById('ul_crypto').style.display = "none";
    document.getElementById('ul_metavers').style.display = "none";
    body.addEventListener('click', function() {
        document.getElementById('ul_nft').style.display = "none";
    })
})
const metavers = document.querySelector('#metavers')
metavers.addEventListener('mouseover', function(e) {
    document.getElementById('ul_metavers').style.display = "block";
    document.getElementById('ul_nft').style.display = "none";
    document.getElementById('ul_crypto').style.display = "none";
    body.addEventListener('click', function() {
        document.getElementById('ul_metavers').style.display = "none";
    })
})

let ouvrir = document.querySelector('.ouvrir');
let liste = document.querySelector('.liste');
let acces = document.querySelector('.acces')
ouvrir.addEventListener('click', function() {
    if (liste.style.transform == 'translateX(-100%)') {
        liste.style.transform = 'translateX(0)';
        liste.style.transition = 'transform 2s';
        acces.style.transform = 'translateX(0)';
        acces.style.transition = 'transform 2s';

    } else {
        liste.style.transform = 'translateX(-100%)';
        acces.style.transform = 'translateX(-100%)';
        //liste.style.position = 'relative';
    }
})


/*
function click() {
    document.getElementById('ouvrir').addEventListener('click', function(e1) {
        document.getElementById('menu').style.transform = 'translateX(0)';
        document.getElementById('menu').style.transition = 'transform 2s';
        document.getElementById('acces').style.transform = 'translateX(0)';
        document.getElementById('acces').style.transition = 'transform 2s';
        console.log(e1);
        document.getElementById('ouvrir').addEventListener('click', function(e2) {
            document.getElementById('menu').style.transform = 'translateX(-100%)';
            document.getElementById('acces').style.transform = 'translateX(-100%)';
            console.log(e2);
        })
    })
}
click();
*/