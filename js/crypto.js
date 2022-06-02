const crypto = ScrollReveal({
    origin: 'left',
    duration: 1500,
    distance: '50px'
});
crypto.reveal('.image_btc');
crypto.reveal('.image_minage');
crypto.reveal('.image_bnb');
crypto.reveal('.image_defi');
crypto.reveal('.image_shiba');

/********************************************** */
const wordReveal = ScrollReveal({
    duration: 1500,
    distance: '85px'
})
wordReveal.reveal('.definition_blockchain', {
    delay: 500,
    duration: 1500,
    distance: '85px'
})
wordReveal.reveal('h3');
wordReveal.reveal('li');
wordReveal.reveal('p', {
    delay: 300
});