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

