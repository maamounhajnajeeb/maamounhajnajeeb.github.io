let beforSpans = document.querySelectorAll(".before-span");
let afterSpans = document.querySelectorAll(".after-span");

let displayNone = function(i) {
    let problem = document.querySelector(`.schema-${i}`);
    problem.setAttribute("style", "display: none");
}

let displayOn = function(i) {
    let problem = document.querySelector(`.schema-${i}`);
    problem.setAttribute("style", "");
}

for (let i=0; i<beforSpans.length; i++){
    beforSpans[i].onclick = (e) => {
        displayNone(i+1);
    }
}

for (let i=0; i<afterSpans.length; i++) {
    afterSpans[i].onclick = (e) => {
        displayOn(i+1);
    }
}