// ================================
// CORTIS MEMBER DATA
// ================================

const members = {

    martin: {
        stageName: "MARTIN",
        fullName: "MARTIN JONATHAN EDWARDS",
        hobby: "Playing video games,Working on music production and Playing Brawl Stars",
        nationality: "South Korean/Canadian",
        famousFor: "Vocalist and Main Producer",
        age: "18",
        birthday: "March-20-2008",
        height: "190.5cm",
        memberNumber: "3rd",
        image: "images/martin-profile.jpg"
    },

    juhoon: {
        stageName: "JUHOON",
        fullName: "KIM JU-HOON",
        hobby: "Playing Piano,Reading Books,Watching Movies and Dramas",
        nationality: "South Korean",
        famousFor: "Vocalist Rapper and Songwriter",
        age: "18",
        birthday: "January-03-2008",
        height: "175-176cm",
        memberNumber: "2nd",
        image: "images/juhoon-profile.jpg"
    },

    james: {
        stageName: "JAMES",
        fullName: "ZHAO YUFAN",
        hobby: "Watching Animes,Collecting Hats and Skateboarding",
        nationality: "Thai/Taiwanese/Chinese",
        famousFor: "Singer,Songwriter and Choreographer",
        age: "21",
        birthday: "October-14-2005",
        height: "178cm",
        memberNumber: "1st",
        image: "images/james-profile.jpg"
    },

    keonho: {
        stageName: "KEONHO",
        fullName: "AHN GEON-HO",
        hobby: "Swimming,Reading Books and Playing video games",
        nationality: "South Korean",
        famousFor: "Maknae,Vocalist and Dancer",
        age: "17",
        birthday: "February-14-2009",
        height: "178cm",
        memberNumber: "5th",
        image: "images/keonho-profile.jpg"
    },

    seonghyeon: {
        stageName: "SEONGHYEON",
        fullName: "EOM SEONG-HYEON",
        hobby: "Watching Movies and Dramas,Playing Basketball and Skateboarding",
        nationality: "South Korean",
        famousFor: "Songwriter and Composer",
        age: "17",
        birthday: "January-13-2009",
        height: "180cm",
        memberNumber: "4th",
        image: "images/seonghyeon-profile.jpg"
    }

};

// ================================
// SAVE USER ANSWERS
// ================================

let userAnswers = {

    likesCortis: "",
    bias: "",
    biasWrecker: "",
    attractive: "",
    favouriteSong: ""

};

// ================================
// PAGE REFERENCES
// ================================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

const profileImage = document.getElementById("profileImage");
const profileInfo = document.getElementById("profileInfo");

// ================================
// SHOW ONLY ONE PAGE
// ================================

function showPage(page){

    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";

    page.style.display="flex";

}

// ================================
// SHOW MEMBER PROFILE
// ================================

function showProfile(member){

    const info = members[member];

    profileImage.src = info.image;

    profileInfo.innerHTML = `

    <h2>${info.stageName}</h2>

    <p><b>Full Name:</b> ${info.fullName}</p>

    <p><b>Nationality:</b> ${info.nationality}</p>

    <p><b>Age:</b> ${info.age}</p>

    <p><b>Birthday:</b> ${info.birthday}</p>

    <p><b>Height:</b> ${info.height}</p>

    <p><b>Hobby:</b> ${info.hobby}</p>

    <p><b>Famous For:</b> ${info.famousFor}</p>

    <p><b>Member Order:</b> ${info.memberNumber}</p>

    `;

}

// ================================
// RESTART WEBSITE
// ================================

function restartWebsite(){

    location.reload();

}
// =====================================
// STEP 6.2 - USER INTERACTION
// =====================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questions = document.getElementById("questions");

const biasGrid = document.getElementById("biasGrid");
const wreckerGrid = document.getElementById("wreckerGrid");
const attractiveGrid = document.getElementById("attractiveGrid");

const continueBtn = document.getElementById("continueBtn");

// --------------------------
// YES BUTTON
// --------------------------

yesBtn.addEventListener("click", () => {

    userAnswers.likesCortis = "Yes";

    questions.style.display = "block";

});

// --------------------------
// NO BUTTON
// --------------------------

noBtn.addEventListener("click", () => {

    userAnswers.likesCortis = "No";

    alert("We hope you'll become a CORTIS fan soon! ❤️");

    setTimeout(() => {

        restartWebsite();

    }, 3000);

});

// --------------------------
// COPY MEMBER CARDS
// --------------------------

wreckerGrid.innerHTML = biasGrid.innerHTML;
attractiveGrid.innerHTML = biasGrid.innerHTML;

// --------------------------
// BIAS SELECTION
// --------------------------

document.querySelectorAll("#biasGrid .member-card").forEach(card=>{

    card.addEventListener("click",()=>{

        document.querySelectorAll("#biasGrid .member-card").forEach(c=>{

            c.style.border="2px solid transparent";

        });

        card.style.border="3px solid red";

        userAnswers.bias=card.dataset.member;

    });

});

// --------------------------
// BIAS WRECKER
// --------------------------

document.querySelectorAll("#wreckerGrid .member-card").forEach(card=>{

    card.addEventListener("click",()=>{

        document.querySelectorAll("#wreckerGrid .member-card").forEach(c=>{

            c.style.border="2px solid transparent";

        });

        card.style.border="3px solid red";

        userAnswers.biasWrecker=card.dataset.member;

    });

});

// --------------------------
// MOST ATTRACTIVE
// --------------------------

document.querySelectorAll("#attractiveGrid .member-card").forEach(card=>{

    card.addEventListener("click",()=>{

        document.querySelectorAll("#attractiveGrid .member-card").forEach(c=>{

            c.style.border="2px solid transparent";

        });

        card.style.border="3px solid red";

        userAnswers.attractive=card.dataset.member;

    });

});

// --------------------------
// SONG SELECTION
// --------------------------

document.querySelectorAll(".songBtn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        document.querySelectorAll(".songBtn").forEach(b=>{

            b.style.background="#c30000";

        });

        btn.style.background="red";

        userAnswers.favouriteSong=btn.dataset.song;

    });

});

// --------------------------
// CONTINUE
// --------------------------

continueBtn.addEventListener("click",()=>{

    if(
        userAnswers.bias==="" ||
        userAnswers.biasWrecker==="" ||
        userAnswers.attractive==="" ||
        userAnswers.favouriteSong===""

    ){

        alert("Please answer all questions first.");

        return;

    }

    showProfile(userAnswers.bias);

    showPage(page2);

});
// =====================================
// STEP 6.3 - PAGE NAVIGATION
// =====================================

// Buttons
const page2Next = document.querySelector("#page2 button");
const page3Next = document.querySelector("#page3 button");
const page4Submit = document.querySelector("#page4 button");
const visitAgainBtn = document.querySelector("#page5 button");

// Opinion Box
const opinionBox = document.querySelector("#page4 textarea");

// ---------------------------
// PAGE 2 → PAGE 3
// ---------------------------

page2Next.addEventListener("click", () => {

    showPage(page3);

});

// ---------------------------
// PAGE 3 → PAGE 4
// ---------------------------

page3Next.addEventListener("click", () => {

    showPage(page4);

});

// ---------------------------
// PAGE 4 → PAGE 5
// ---------------------------

page4Submit.addEventListener("click", () => {

    if(opinionBox.value.trim() === ""){

        alert("Please tell us what you like about CORTIS.");

        return;

    }

    showPage(page5);

});

// ---------------------------
// PAGE 5 → PAGE 1
// ---------------------------

visitAgainBtn.addEventListener("click", () => {

    restartWebsite();

});
// =====================================
// STEP 6.4 - GALLERY
// =====================================

const gallery = document.querySelector(".gallery");

// Gallery Images

const galleryImages = [

    "images/group1.jpg",
    "images/group2.jpg",
    "images/group3.jpg",

    "images/member1.jpg",
    "images/member2.jpg",
    "images/member3.jpg",
    "images/member4.jpg",
    "images/member5.jpg"

];

// Create Gallery

galleryImages.forEach(image => {

    const img = document.createElement("img");

    img.src = image;

    img.alt = "CORTIS";

    img.addEventListener("click", () => {

        openImage(image);

    });

    gallery.appendChild(img);

});

// ==========================
// OPEN IMAGE
// ==========================

function openImage(image){

    const popup = document.createElement("div");

    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,0.9)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "9999";

    const bigImage = document.createElement("img");

    bigImage.src = image;

    bigImage.style.maxWidth = "90%";
    bigImage.style.maxHeight = "90%";
    bigImage.style.borderRadius = "20px";
    bigImage.style.boxShadow = "0 0 35px red";

    popup.appendChild(bigImage);

    popup.addEventListener("click", () => {

        popup.remove();

    });

    document.body.appendChild(popup);

}
// =====================================
// STEP 6.5 - FINAL EFFECTS
// =====================================

// --------------------------
// Floating Hearts
// --------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.color = "#ff1a1a";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

// Create a heart every second
setInterval(createHeart, 1000);

// --------------------------
// Mouse Glow
// --------------------------

document.addEventListener("mousemove", (e) => {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "12px";
    glow.style.height = "12px";
    glow.style.borderRadius = "50%";
    glow.style.background = "red";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.style.pointerEvents = "none";
    glow.style.boxShadow = "0 0 20px red";
    glow.style.opacity = "0.8";
    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 300);

});

// --------------------------
// Music Control
// --------------------------

const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.createElement("button");

musicBtn.innerHTML = "🎵 Music";

musicBtn.style.position = "fixed";
musicBtn.style.bottom = "20px";
musicBtn.style.right = "20px";
musicBtn.style.zIndex = "9999";

document.body.appendChild(musicBtn);

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.innerHTML = "🎵 Music On";

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = "🔇 Music Off";

    }

});

// --------------------------
// Welcome Animation
// --------------------------

window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = "1";

    }, 200);

};
// ===========================
// LOADING SCREEN
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },3000);

});
