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

function mouseover() {

}


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
ouvrir.addEventListener('click', function() {
    body.classList.toggle('open');
})