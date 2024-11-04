//Stores text and button in variables
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "yellow", "green", "orange", "black", "blue"];
    changeColorButton.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)];
        textElement.style.color = randomColor;
    });
}
changeTextColor();

//---------------------------------------------------------//
const pictureElement = document.getElementById("toggle-image");
function changePicture(){
    const images = [
        "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg",
        "https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_square.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg",
        "https://static01.nyt.com/images/2024/05/05/multimedia/05DOG-AGGRESSION-qhgl/05DOG-AGGRESSION-qhgl-mediumSquareAt3X.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg?crop=0.760xw:1.00xh;0.204xw,0&resize=980:*"
    ];
    
    let currentIndex = 0;
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        pictureElement.src = images[currentIndex];
    });
}

changePicture();