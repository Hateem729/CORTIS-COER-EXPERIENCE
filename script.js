// ================================
// CORTIS MEMBER DATA
// ================================

const members = {

    martin: {
        stageName: "Martin",
        fullName: "Martin",
        hobby: "Add Hobby",
        nationality: "Add Nationality",
        famousFor: "Add Famous For",
        age: "Add Age",
        birthday: "Add Birthday",
        height: "Add Height",
        memberNumber: "1st / 2nd / etc",
        image: "images/martin-profile.jpg"
    },

    juhoon: {
        stageName: "Juhoon",
        fullName: "Juhoon",
        hobby: "Add Hobby",
        nationality: "Add Nationality",
        famousFor: "Add Famous For",
        age: "Add Age",
        birthday: "Add Birthday",
        height: "Add Height",
        memberNumber: "1st / 2nd / etc",
        image: "images/juhoon-profile.jpg"
    },

    james: {
        stageName: "James",
        fullName: "James",
        hobby: "Add Hobby",
        nationality: "Add Nationality",
        famousFor: "Add Famous For",
        age: "Add Age",
        birthday: "Add Birthday",
        height: "Add Height",
        memberNumber: "1st / 2nd / etc",
        image: "images/james-profile.jpg"
    },

    keonho: {
        stageName: "Keonho",
        fullName: "Keonho",
        hobby: "Add Hobby",
        nationality: "Add Nationality",
        famousFor: "Add Famous For",
        age: "Add Age",
        birthday: "Add Birthday",
        height: "Add Height",
        memberNumber: "1st / 2nd / etc",
        image: "images/keonho-profile.jpg"
    },

    seonghyeon: {
        stageName: "Seonghyeon",
        fullName: "Seonghyeon",
        hobby: "Add Hobby",
        nationality: "Add Nationality",
        famousFor: "Add Famous For",
        age: "Add Age",
        birthday: "Add Birthday",
        height: "Add Height",
        memberNumber: "1st / 2nd / etc",
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

