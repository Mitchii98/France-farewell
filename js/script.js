
/* =========================================================
   🌷 FRANCE FAREWELL WEBSITE
   Main JavaScript
========================================================= */


/* =========================================================
   💗 SURPRISE BUTTON
========================================================= */

function showSurprise() {

    const message =
        document.getElementById("surpriseMessage");

    const button =
        document.getElementById("surpriseButton");

    message.classList.toggle("show");


    if (message.classList.contains("show")) {

        button.textContent =
            "Hide Surprise 💌";

        // Create heart celebration
        createHeartBurst();

        // Scroll to surprise message
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        button.textContent =
            "Open Your Surprise 💗";

    }
}


/* =========================================================
   💬 COWORKER MESSAGE CARDS
========================================================= */

function revealMessage(card) {

    card.classList.toggle("revealed");

}


/* =========================================================
   🥚 HIDDEN EASTER EGGS
========================================================= */

function activateEgg(type) {

    const popup =
        document.getElementById("eggMessage");

    const icon =
        document.getElementById("eggIcon");

    const title =
        document.getElementById("eggTitle");

    const text =
        document.getElementById("eggText");


    if (type === "flower") {

        icon.textContent = "🌷";

        title.textContent =
            "A Little Secret for You 💕";

        text.textContent =
            "No matter where life takes you, " +
            "I hope you always remember the people " +
            "and moments that made this chapter special.";

    }


    else if (type === "heart") {

        icon.textContent = "💗";

        title.textContent =
            "You Found the Hidden Heart!";

        text.textContent =
            "Some people become part of our lives " +
            "for a reason, and some memories stay " +
            "with us forever. ♡";

    }


    else if (type === "star") {

        icon.textContent = "⭐";

        title.textContent =
            "SECRET MESSAGE!";

        text.textContent =
            "Plot twist: Leaving the company doesn't " +
            "mean you're allowed to escape our memories. 😂💗";

    }


    popup.classList.add("show");

}


/* =========================================================
   ❌ CLOSE EASTER EGG POPUP
========================================================= */

function closeEgg() {

    const popup =
        document.getElementById("eggMessage");

    popup.classList.remove("show");

}


/* Close popup when clicking outside */

const eggMessage =
    document.getElementById("eggMessage");

if (eggMessage) {

    eggMessage.addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeEgg();

            }

        }
    );

}


/* =========================================================
   🃏 MYSTERY MEMORY CARDS
========================================================= */

function flipMemory(card) {

    card.classList.toggle("flipped");

    const isFlipped =
        card.classList.contains("flipped");


    card.setAttribute(
        "aria-pressed",
        String(isFlipped)
    );

}


/* =========================================================
   💕 HEART BURST ANIMATION
========================================================= */

function createHeartBurst() {

    const hearts = [
        "💗",
        "💕",
        "💖",
        "♡",
        "🌸",
        "🌷"
    ];


    const button =
        document.getElementById("surpriseButton");


    if (!button) return;


    const rect =
        button.getBoundingClientRect();


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "heart-particle";


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        /* Starting position */

        heart.style.left =
            rect.left +
            rect.width / 2 +
            "px";


        heart.style.top =
            rect.top +
            rect.height / 2 +
            "px";


        /* Random movement */

        const x =
            (Math.random() - 0.5) * 500;

        const y =
            -Math.random() * 450 - 100;

        const rotate =
            (Math.random() - 0.5) * 90;


        heart.style.setProperty(
            "--x",
            `${x}px`
        );


        heart.style.setProperty(
            "--y",
            `${y}px`
        );


        heart.style.setProperty(
            "--rotate",
            `${rotate}deg`
        );


        document.body.appendChild(heart);


        /* Remove after animation */

        setTimeout(function() {

            heart.remove();

        }, 2000);

    }

}


/* =========================================================
   📸 PHOTO GALLERY
========================================================= */

const photoGallery =
    document.getElementById("photoGallery");

const loadMoreButton =
    document.getElementById("loadMoreButton");


const totalPhotos = 40;

const photosPerLoad = 12;

let photosShown = 0;


/* =========================================================
   📸 PHOTO CAPTIONS
========================================================= */

const photoCaptions = {

    1: "Your first family day together ♡",
    2: "Payats Days HAHAHA 😂",
    3: "Tara kainan na 😂",
    4: "Our First Christmas Party, Major ka agad HAHA 😂",
    5: "One of our favorite moments 📸",
    6: "Atake ang Outfit, Close Deal ba sa Condo ? HAHA 😂",
    7: "Always a good day with you 🌷",
    8: "Making memories together 💕",
    9: "Happy Yarn ? ♡",
    10: "Ganda yarn 💗",
    11: "One for the scrapbook 🌸",
    12: "KAYA PABA TODAY 😂 ?",
    13: "Itabi mo, ako na lalaban, one move checkmate agad 😂!",
    14: "Smiles all around 😊",
    15: "Together is always better ♡",
    16: "A day to remember 🌷",
    17: "Little moments, big memories 💗",
    18: "Dancer na singer pa ! ♡",
    19: "One more memory to keep 📸 Ginalingan ni ninang mars ",
    20: "Happiness with the team 🌸",
    21: "Another chapter together 💕",
    22: "The memories we made ♡",
    23: "Good vibes only 💗",
    24: "A special moment 🌷",
    25: "Forever part of the memories ♡",
    26: "Laughing through the workdays 😂",
    27: "First Outing sa FRDP 💕",
    28: "One of those happy days 🌸",
    29: "Memories we will always keep ♡",
    30: "A little piece of our story 💗",
    31: "Another moment together 🌷",
    32: "PAK frdp gurls ahahaha 😂",
    33: "Our little work adventure 💕",
    34: "A memory worth keeping 📸",
    35: "Good people, good memories 🌸",
    36: "Another chapter in our story ♡",
    37: "The LoveBirds 💗",
    38: "One last memory together 🌷 in FRDP 😂",
    39: "Until we meet again 💕",
    40: "See you in the next chapter ♡"

};


/* =========================================================
   📸 CREATE PHOTO CARD
========================================================= */

function createPhoto(number) {

    const card =
        document.createElement("div");


    card.className =
        "photo-card";


    card.onclick = function() {

        openPhotoViewer(number);

    };


    card.innerHTML = `

        <div class="photo-frame">

            <img
                src="images/memory${number}.jpeg"
                alt="France memory ${number}"
                onerror="tryNextFormat(this, ${number})"
            >

        </div>


        <div class="photo-caption">

            <span>♡</span>

            <p>
                ${photoCaptions[number]}
            </p>

        </div>

    `;


    if (photoGallery) {

        photoGallery.appendChild(card);

    }

}


/* =========================================================
   📸 SUPPORT JPEG / PNG / JPG
========================================================= */

function tryNextFormat(img, number) {

    const currentSrc = img.src.toLowerCase();

    if (currentSrc.endsWith(".jpeg")) {

        img.src = `images/memory${number}.png`;

    }

    else if (currentSrc.endsWith(".png")) {

        img.src = `images/memory${number}.jpg`;

    }

    else if (currentSrc.endsWith(".jpg")) {

        img.src = `images/memory${number}.jpeg`;

    }

    else {

        img.style.display = "none";

    }

}

/* =========================================================
   📸 LOAD MORE PHOTOS
========================================================= */

function loadMorePhotos() {

    if (!photoGallery) return;


    const nextLimit =
        Math.min(
            photosShown + photosPerLoad,
            totalPhotos
        );


    for (
        let i = photosShown + 1;
        i <= nextLimit;
        i++
    ) {

        createPhoto(i);

    }


    photosShown =
        nextLimit;


    /* Hide button when all photos are displayed */

    if (
        photosShown >= totalPhotos &&
        loadMoreButton
    ) {

        loadMoreButton.style.display =
            "none";

    }

}


/* Load first 12 photos */

loadMorePhotos();


/* =========================================================
   🔍 PHOTO VIEWER
========================================================= */

let currentPhoto = 1;


/* =========================================================
   🔍 OPEN PHOTO VIEWER
========================================================= */

function openPhotoViewer(number) {

    currentPhoto =
        number;


    const viewer =
        document.getElementById("photoViewer");


    if (!viewer) return;


    viewer.classList.add("show");


    showViewerPhoto();

}


/* =========================================================
   🔍 SHOW CURRENT PHOTO
========================================================= */

function showViewerPhoto() {

    const image =
        document.getElementById("viewerImage");

    const caption =
        document.getElementById("viewerCaption");


    if (!image || !caption) return;


    image.src =
        `images/memory${currentPhoto}.jpeg`;


    image.onerror = function() {

        image.src =
            `images/memory${currentPhoto}.png`;


        image.onerror = function() {

            image.src =
                `images/memory${currentPhoto}.jpg`;

        };

    };


    caption.textContent =
        photoCaptions[currentPhoto];

}


/* =========================================================
   ➡️ NEXT PHOTO
========================================================= */

function nextPhoto() {

    currentPhoto++;


    if (currentPhoto > totalPhotos) {

        currentPhoto = 1;

    }


    showViewerPhoto();

}


/* =========================================================
   ⬅️ PREVIOUS PHOTO
========================================================= */

function previousPhoto() {

    currentPhoto--;


    if (currentPhoto < 1) {

        currentPhoto =
            totalPhotos;

    }


    showViewerPhoto();

}


/* =========================================================
   ❌ CLOSE PHOTO VIEWER
========================================================= */

function closePhotoViewer() {

    const viewer =
        document.getElementById("photoViewer");


    if (!viewer) return;


    viewer.classList.remove("show");

}


/* =========================================================
   💌 OPEN WHEN LETTERS
========================================================= */

function toggleOpenWhen(button) {

    const card =
        button.closest(".open-when-card");


    const letter =
        card.querySelector(".open-when-letter");


    const isOpening =
        letter.hidden;


    /* Open / close selected letter */

    letter.hidden =
        !isOpening;


    /* Update card appearance */

    card.classList.toggle(
        "open",
        isOpening
    );


    /* Accessibility */

    button.setAttribute(
        "aria-expanded",
        String(isOpening)
    );


    /* Change arrow */

    const arrow =
        button.querySelector(".letter-arrow");


    arrow.textContent =
        isOpening ? "−" : "＋";

}



/* =========================================================
   💌 ENVELOPE
========================================================= */

function openEnvelope() {

    const envelope =
        document.getElementById("envelope");

    const hint =
        document.getElementById("envelope-hint");

    if (!envelope) return;

    /* Open / close envelope */

    envelope.classList.toggle("open");


    /* Update envelope hint */

    if (envelope.classList.contains("open")) {

        if (hint) {

            hint.textContent =
                "Your letter is waiting for you ♡";

        }

    } else {

        if (hint) {

            hint.textContent =
                "Click the envelope 💌";

        }

    }

}

 


/* ========================================
   ⭐ RANDOM WISHES JAR
======================================== */

const franceWishes = [
    "May your next chapter be filled with happiness, success, and beautiful surprises! ♡",

    "Never forget how much joy you brought to our workplace. We will miss you! 💗",

    "May every new beginning bring you closer to your dreams. Keep shining, France! ✨",

    "Wishing you new adventures, wonderful people, and countless reasons to smile. 🌷",

    "Work may take us in different directions, but the memories will always stay. 💌",

    "May your coffee be strong, your worries be small, and your happiness be endless. ☕",

    "You are capable of amazing things. Believe in yourself as much as we believe in you! ⭐",

    "Here's to new opportunities, exciting challenges, and a future brighter than ever! 💖",

    "Thank you for the laughter, the memories, and the little moments that made work special. 🥹",

    "Wherever life takes you, remember that you will always have people cheering for you. ♡",

    "May your Mondays be easy, your weekends be long, and your dreams come true! 😂",

    "This isn't the end of our story. It's just a new chapter. Keep in touch, France! 🌸",

    "You deserve all the good things that are coming your way. Never stop being you! 💗",

    "May you find happiness in the little things and courage in every new beginning. ✨",

    "Sending you a jar full of love, friendship, and warm wishes for your next adventure! 💌"
];

let lastWishIndex = -1;

function pickRandomWish() {

    const wishMessage =
        document.getElementById("wishMessage");

    const wishText =
        document.getElementById("wishText");

    if (!wishMessage || !wishText) return;

    let randomIndex;

    // Avoid showing the same wish twice in a row.
    do {
        randomIndex = Math.floor(
            Math.random() * franceWishes.length
        );
    } while (
        franceWishes.length > 1 &&
        randomIndex === lastWishIndex
    );

    lastWishIndex = randomIndex;

    wishText.textContent = franceWishes[randomIndex];

    // Restart the reveal animation.
    wishMessage.classList.remove("show");

    void wishMessage.offsetWidth;

    wishMessage.classList.add("show");

}



/* =========================================
   💗 FRANCE PHOTO CAROUSEL
========================================= */

let franceCarouselIndex = 0;

function moveFranceCarousel(direction) {
    const track = document.querySelector(
        ".france-carousel-track"
    );

    const photos = document.querySelectorAll(
        ".france-photo"
    );

    if (!track || photos.length === 0) return;

    franceCarouselIndex += direction;

    if (franceCarouselIndex >= photos.length) {
        franceCarouselIndex = 0;
    }

    if (franceCarouselIndex < 0) {
        franceCarouselIndex = photos.length - 1;
    }

    track.style.transform =
        `translateX(-${franceCarouselIndex * 100}%)`;

    updateFranceCarouselDots();
}

function updateFranceCarouselDots() {
    const dots = document.querySelectorAll(
        ".carousel-dot"
    );

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === franceCarouselIndex
        );
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(
        ".france-photo"
    );

    const dotsContainer = document.querySelector(
        ".carousel-dots"
    );

    if (!dotsContainer || photos.length === 0) return;

    photos.forEach((photo, index) => {
        const dot = document.createElement("button");

        dot.className = "carousel-dot";
        dot.setAttribute(
            "aria-label",
            `Show photo ${index + 1}`
        );

        dot.addEventListener("click", function () {
            franceCarouselIndex = index;

            const track = document.querySelector(
                ".france-carousel-track"
            );

            track.style.transform =
                `translateX(-${franceCarouselIndex * 100}%)`;

            updateFranceCarouselDots();
        });

        dotsContainer.appendChild(dot);
    });

    updateFranceCarouselDots();
});




/* =========================================================
   🌷 END OF SCRIPT
========================================================= */