console.log("hello");
let size = document.querySelector(".size");
let personality = document.querySelector(".personality");
let button = document.querySelector("button");
let answer = document.querySelector(".answer")
let logo = document.querySelector(".logo")
let Ant = document.querySelector(".Ant")
logo.style.display  = "block";
Ant.style.display  = "none";
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
} else if (size === "big" && personality === "calm") {
    answer.innerHTML = "You like the bigs (Centers, Fowards) calm and let their game talk for them like Jokic, Giannis, Tim Duncan";
    logo.style.display  = "none";
}else if (size === "big" && personality === "aggressive") {
    answer.innerHTML = "You like the bigs (Centers, Fowards) that are aggressive and love to talk trash like Kevin Garnett, Larry Bird, KD";
    logo.style.display  = "none";
} else {
    answer.innerHTML = "Either your size or personality was wrong. Remember choose between small or big for size. For Personality choose between calm or aggressive. (Make sure to leave no spaces)"
}
};

