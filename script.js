let images = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg',
              './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg', './img/img13.jpg', './img/img14.jpg', './img/img15.jpg', './img/img16.jpg',
              './img/img17.jpg', './img/img18.jpg', './img/img19.jpg', './img/img20.jpg', './img/img21.jpg', './img/img22.jpg', './img/img23.jpg', './img/img24.jpg',
              './img/img25.jpg', './img/img26.jpg', './img/img27.jpg', './img/img28.jpg', './img/img29.jpg', './img/img30.jpg', './img/img31.jpg', './img/img32.jpg',]



function load() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('content').innerHTML += /*html*/`
                <div onclick="showImage(${i})" class="imgbox">
                    <img src="${images[i]}" alt="Bild">
                </div>`;
    }
}

function showImage(i) {
    document.getElementById('show-img-bg').classList.remove('d-none');
    document.getElementById('img').src = `${images[i]}`;
}

function closeImage() {
    document.getElementById('show-img-bg').classList.add('d-none');
}