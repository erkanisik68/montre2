let images = [
    {
        src: "image/IMG_5213.jpg",
        text: "Tim, 20 ans, voulait améliorer ses performances sportives. Découvrez comment il a utilisé la montre pour suivre ses progrès et atteindre ses objectifs.",
        secondaryImage: "image/stats-histoire1.jpg"
    },
    {
        src: "image/cardiaque-min.jpg",
        text: "François voulait surveiller sa santé cardiaque. Découvrez comment la montre l'a alertée à temps.",
        secondaryImage: "image/stats-histoire2.jpg"
    },
    {
        src: "image/IMG_5211.jpg",
        text: "Karim souffrait d’un mauvais sommeil. Voyez comment la montre a analysé ses cycles de sommeil pour l’aider à mieux dormir.",
        secondaryImage: "image/stats-histoire3.jpg"
    }
];

function showCarousel(index) {
    document.getElementById('carousel').style.display = 'flex';
    document.getElementById('carousel-img').src = images[index].src;
    document.getElementById('carousel-text').textContent = images[index].text;
    document.getElementById('carousel-secondary-img').src = images[index].secondaryImage;
    document.body.classList.add('no-scroll');
}

document.querySelector('.close').onclick = function() {
    document.getElementById('carousel').style.display = 'none';
    document.body.classList.remove('no-scroll');
};

document.querySelectorAll('.story').forEach((story, index) => {
    story.onclick = function() {
        showCarousel(index);
    };
});
