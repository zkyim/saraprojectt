
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

let slidesCount = sliderImages.length;

let currentSlide = 1;

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");


nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let pabinationElement = document.createElement("ul");

pabinationElement.setAttribute ("id" , "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement("li");

    paginationItem.setAttribute("data-index" , i);

    pabinationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(pabinationElement);


let paginationCreateedUl = document.getElementById ("pagination-ul");

let paginationsBulliets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < paginationsBulliets.length; i++) {
    paginationsBulliets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();
    }
}


theChecker();

function nextSlide() {
        currentSlide++;
        theChecker();
}

function prevSlide() {
        currentSlide--;
        theChecker();
}

function theChecker() {
    removeAllActive ();
    if (currentSlide < 1) {
        currentSlide = slidesCount;
    }
    
    if (currentSlide == slidesCount + 1) {
        currentSlide = 1;
    }
    
    sliderImages[currentSlide - 1].classList.add("active");

    paginationCreateedUl.children[currentSlide - 1].classList.add("active");
}

function removeAllActive () {

    sliderImages.forEach(function (img) {
        img.classList.remove("active")
    });

    paginationsBulliets.forEach(function (bullet) {
        bullet.classList.remove("active");
    })
}

// *******************************************************************************************************
let chiledul = document.querySelectorAll(".list ul li");
let chiledulArray = Array.from(chiledul);
let videoTitle = document.querySelector(".preview .info");
let theVideo = document.querySelector(".videos .preview .infovideo ");
let iframe = document.querySelector(".videos .preview iframe");


let videosPlayer = document.querySelectorAll('video');
let quiltySelector = document.querySelectorAll('.qulity-selector');
let quiltySelector2 = document.querySelector('.video .qulity-selector');
let iconQuiltySelector = document.querySelectorAll('.qulity-selector > i')
let menuSelector = document.querySelectorAll('.qulity-selector .menu-qulity');
let menuSelector2 = document.querySelector('.video .qulity-selector .menu-qulity');
let globalIndex = 0;

chiledulArray.forEach( (ele) => {
    ele.addEventListener('click', function (e) {
        chiledulArray.forEach( (ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        e.currentTarget.innerText;
        videoTitle.innerText = e.currentTarget.innerText;
        if (e.currentTarget.dataset.type == 'video') {
            iframe.src = '';
            iframe.style.display = 'none';
            theVideo.style.display = 'block';
            theVideo.src = e.currentTarget.dataset.src;
        }else if (e.currentTarget.dataset.type == 'url') {
            theVideo.src = '';
            theVideo.style.display = 'none';
            quiltySelector2.style.display = 'none';
            iframe.style.display = 'block';
            iframe.src = e.currentTarget.dataset.src;
        }
    });
});

// *******************************************************************************************************

let up = document.querySelector(".up")
window.onscroll = () => {
    this.scrollY >= 500 ? up.classList.add("show") : up.classList.remove("show")
}
up.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}