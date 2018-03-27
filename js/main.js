var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
    cat.setAttribute("src", "http://images.midilibre.fr/images/2014/07/03/la-chatte-venus-a-des-milliers-de-fans-sur-le-web_960255_667x333.jpg?v=1");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "https://img3.bibamagazine.fr/var/bibamagazine/storage/images/1/3/1/9/1319357/quimera-chatte-aux-deux-visages-qui-seduit-web_width1024.png");
});