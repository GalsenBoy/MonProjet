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



document.getElementById('ouvrir').addEventListener('click', function() {
    document.getElementById('menu').style.transform = 'translateX(0)';
    document.getElementById('menu').style.transition = 'transform 2s';
    document.getElementById('acces').style.transform = 'translateX(0)';
    document.getElementById('acces').style.transition = 'transform 2s';
    document.getElementById('ouvrir').addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('acces').style.display = 'none';
    })
})




/*
function myFunction() {
    const menu = document.getElementById('menu');
    if (menu.style.transform === ('translateX(-100%)')) {
        menu.style.transform = 'translateX(0)';
        menu.style.transition = 'transform 2s';

    } else {
        menu.style.transform = 'translateX(-100%)';
    }
}

*/