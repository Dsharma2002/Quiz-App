const navSlide = () => {
    const short = document.querySelector(".short")
    const navElement = document.querySelector(".links")
    const navLinks = document.querySelectorAll(".links li")

    short.addEventListener("click", () => {
        navElement.classList.toggle("nav-active")

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`
            }
        })
         short.classList.toggle("toggle")
    })
}

const app = () => {
    navSlide()
}

app()

// alert("Click Show Next to see the first question")

const container = document.querySelector("#container");
// check that the container is righfully selected
// console.log(container);

// declare an array that will host all the questions and related answers
// can add more questions here 
let array = [
    {
        question: "What is the preferred way for adding a background color in HTML?",
        ansA: `<body background="yellow">`,
        ansB: `<background>yellow</background>`,
        ansC: `<body style="background-color:yellow">`,
        ansD: `<background color="yellow">text<background>`
    }, 
    {
        question: "What is the correct HTML for creating a hyperlink?",
        ansA: `<a name="">A</a>`,
        ansB: `<a>B</a>`,
        ansC: `<a href="http://www.example.com">example</a>`,
        ansD: `<a url="http://www.example.com">example</a>`
    }
];

// counter helps with the rendering of suitable question accessed from array
let counter = 0;
const peak = document.querySelector(".peak")
const button = document.querySelector(".show-next");
button.addEventListener("click", (e) => {
    // check that the button is rightfully connected with the action
    // console.log("Button was hit");
    
    peak.classList.add("hide");
    addQuestions();
})

function addQuestions() {
    if (counter < array.length) {
        // if condition to check that we never access array elements outside of array range 
        if (container.hasChildNodes()) {
            // if we already have a question displayed, remove this question
            container.removeChild(container.lastChild)
        }
        // dynamically create a new div and add question in it
        const newElement = document.createElement("div");
        newElement.classList.add("supplied-question");
        const newHeader = document.createElement("div")
        newHeader.innerText = array[counter].question;
        newElement.append(newHeader);
        container.append(newElement);
        // dynamically create a radio button for answer option A
        const ansAA = document.createElement("label");
        ansAA.innerText = array[counter].ansA;
        const ansAR = document.createElement("input");
        ansAR.type = "radio";
        newElement.append(ansAR);
        newElement.append(ansAA);
        // dynamically create a radio button for answer option B
        const ansBB = document.createElement("label");
        ansBB.innerText = array[counter].ansB;
        const ansBR = document.createElement("input");
        ansBR.type = "radio";
        newElement.append(ansBR);
        newElement.append(ansBB);
        // dynamically create a radio button for answer option B
        const ansCC = document.createElement("label");
        ansCC.innerText = array[counter].ansC;
        const ansCR = document.createElement("input");
        ansCR.type = "radio";
        newElement.append(ansCR);
        newElement.append(ansCC);
        // dynamically create a radio button for answer option B
        const ansDD = document.createElement("label");
        ansDD.innerText = array[counter].ansD;
        const ansDR = document.createElement("input");
        ansDR.type = "radio";
        newElement.append(ansDR);
        newElement.append(ansDD);
        // increment counter 
        counter++;
    }
}

const prevButton = document.querySelector(".show-prev");
prevButton.addEventListener("click", (e) => {
    // check that the button is rightfully connected with the action
    // console.log("Button was hit");
    prevQuestions();
})

function prevQuestions() {
    if (counter > 0) {
        // if condition to check that we never access array elements outside of array range 
        if (container.hasChildNodes()) {
            // if we already have a question displayed, remove this question
            container.removeChild(container.lastChild)
        }
        // decrement counter to show prev question
        --counter;
        // dynamically create a new div and add question in it
        const newElement = document.createElement("div");
        newElement.classList.add("supplied-question");
        const newHeader = document.createElement("div")
        newHeader.innerText = array[counter].question;
        newElement.append(newHeader);
        container.append(newElement);
        // dynamically create a radio button for answer option A
        const ansAA = document.createElement("label");
        ansAA.innerText = array[counter].ansA;
        const ansAR = document.createElement("input");
        ansAR.type = "radio";
        newElement.append(ansAR);
        newElement.append(ansAA);
        // dynamically create a radio button for answer option B
        const ansBB = document.createElement("label");
        ansBB.innerText = array[counter].ansB;
        const ansBR = document.createElement("input");
        ansBR.type = "radio";
        newElement.append(ansBR);
        newElement.append(ansBB);
        // dynamically create a radio button for answer option B
        const ansCC = document.createElement("label");
        ansCC.innerText = array[counter].ansC;
        const ansCR = document.createElement("input");
        ansCR.type = "radio";
        newElement.append(ansCR);
        newElement.append(ansCC);
        // dynamically create a radio button for answer option B
        const ansDD = document.createElement("label");
        ansDD.innerText = array[counter].ansD;
        const ansDR = document.createElement("input");
        ansDR.type = "radio";
        newElement.append(ansDR);
        newElement.append(ansDD);
    }
}