
let btn = document.querySelector('.btn');

btn.addEventListener('click', function (event) {
    let search = document.querySelector('#search').value;
    let imgs = document.querySelector('#imgs');
    imgs.classList.remove("none");
    imgs.classList.add("imgsBox");
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=EWFAW57sDajLjKorvljyIBwMUvFB647S&q=${search}&limit=5&offset=&rating=g&lang=en`)
        .then(res => res.json())
        .then(elem => {
            document.querySelector('#img1').src = elem.data[0].images.downsized.url;
            document.querySelector('#img2').src = elem.data[1].images.downsized.url;
            document.querySelector('#img3').src = elem.data[2].images.downsized.url;
            document.querySelector('#img4').src = elem.data[3].images.downsized.url;
            document.querySelector('#img5').src = elem.data[4].images.downsized.url;
        })
    try {
        if (window.navigator.online == false)
            throw new Error('No Internet Connection');
    } catch (error) {
        console.log(`Oops, ' + ${error.message}`);
    }

});