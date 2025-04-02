console.log("hello");
let size = document.querySelector(".size");
let personality = document.querySelector(".personality");
let button = document.querySelector("button");
let answer = document.querySelector(".answer")
let logo = document.querySelector(".logo")
let Ant = document.querySelector(".Ant")
let Shai = document.querySelector(".Shai")
let Jokic = document.querySelector(".Jokic")
let Kevin = document.querySelector(".Kevin")
logo.style.display  = "block";
Ant.style.display  = "none";
Shai.style.display  = "none";
Jokic.style.display = "none";
Kevin.style.display = "none";
button.onclick = function() {
    console.log("button check");
    size = size.value
    console.log(size);
    personality = personality.value;
    console.log(personality);
if(size === "small" && personality === "aggressive"){
console.log("Ant");
answer.innerHTML = "You like players smaller players (Guards) that are aggressive and love to talk trash, like Anthony Edwards and Russell Westbrook ";
logo.style.display  = "none";
Ant.style.display  = "block";
} else if (size === "small" && personality === "calm") {
    answer.innerHTML = "You like smaller players (Guards) calm and let their game talk for them like Curry, SGA, and Kyrie ";
    logo.style.display  = "none";
    Shai.style.display = "block";
} else if (size === "big" && personality === "calm") {
    answer.innerHTML = "You like the bigs (Centers, Fowards) calm and let their game talk for them like Jokic, Giannis, Tim Duncan";
    logo.style.display  = "none";
    Jokic.style.display = "block";
}else if (size === "big" && personality === "aggressive") {
    answer.innerHTML = "You like the bigs (Centers, Fowards) that are aggressive and love to talk trash like Kevin Garnett, Larry Bird, KD";
    logo.style.display  = "none";
    Kevin.style.display = "block";
} else {
    answer.innerHTML = "Either your size or personality was wrong. Remember choose between small or big for size. For Personality choose between calm or aggressive. (Make sure to leave no spaces) or RESET THE PAGE!"
}
if(size === "Small" && personality === "Aggressive"){
    console.log("Ant");
    answer.innerHTML = "You like players smaller players (Guards) that are aggressive and love to talk trash, like Anthony Edwards and Russell Westbrook ";
    logo.style.display  = "none";
    Ant.style.display  = "block";
    } else if (size === "Small" && personality === "Calm") {
        answer.innerHTML = "You like smaller players (Guards) calm and let their game talk for them like Curry, SGA, and Kyrie ";
        logo.style.display  = "none";
        Shai.style.display = "block";
    } else if (size === "Big" && personality === "Calm") {
        answer.innerHTML = "You like the bigs (Centers, Fowards) calm and let their game talk for them like Jokic, Giannis, Tim Duncan";
        logo.style.display  = "none";
        Jokic.style.display = "block";
    }else if (size === "Big" && personality === "Aggressive") {
        answer.innerHTML = "You like the bigs (Centers, Fowards) that are aggressive and love to talk trash like Kevin Garnett, Larry Bird, KD";
        logo.style.display  = "none";
        Kevin.style.display = "block";
    } else {
        answer.innerHTML = "Either your size or personality was wrong. Remember choose between small or big for size. For Personality choose between calm or aggressive. (Make sure to leave no spaces) or RESET THE PAGE!"
    }
};


