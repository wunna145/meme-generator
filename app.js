let sub = document.querySelector('.submit-button');
let topTxt = document.getElementById('txt1');
let btmTxt = document.getElementById('txt2');
let imgSrc = document.getElementById('imgSrc');
let result = document.querySelector("#image");

sub.addEventListener('click', function(e){
    e.preventDefault();
    var memeContainer = document.createElement('div');
    memeContainer.className = 'meme-container';

    var memeImg = document.createElement('img');
    memeImg.src = imgSrc.value;
    memeImg.setAttribute('title', 'Click to DELETE!');
    memeImg.className = 'meme-image';

    memeImg.onload = function() {
        var memeTxt1 = document.createElement('span');
        memeTxt1.className = 'meme-text-top';
        memeTxt1.innerText = topTxt.value;

        var memeTxt2 = document.createElement('span');
        memeTxt2.className = 'meme-text-bottom';
        memeTxt2.innerText = btmTxt.value;

        var memeTextContainer = document.createElement('div');
        memeTextContainer.className = 'meme-text-container';

        memeTextContainer.appendChild(memeTxt1);
        memeTextContainer.appendChild(memeTxt2);

        memeContainer.appendChild(memeImg);
        memeContainer.appendChild(memeTextContainer);

        result.appendChild(memeContainer);

        adjustTextPosition(memeContainer);
    };

    memeImg.addEventListener('click', function() {
        memeContainer.remove();
    });
});

function adjustTextPosition(container) {
    var memeImg = container.querySelector('.meme-image');
    var memeTxt1 = container.querySelector('.meme-text-top');
    var memeTxt2 = container.querySelector('.meme-text-bottom');

    var imageWidth = memeImg.clientWidth;
    var imageHeight = memeImg.clientHeight;

    var textContainerHeight = memeTxt1.offsetHeight + memeTxt2.offsetHeight;

    memeTxt1.style.top = ((imageHeight - textContainerHeight) / 30) + 'px';
    memeTxt2.style.top = ((imageHeight - textContainerHeight) + memeTxt1.offsetHeight) + 'px';
}