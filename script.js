console.log("hello");
let size = document.querySelector(".size");
let personality = document.querySelector(".personality");
let button = document.querySelector("button");
let answer = document.querySelector(".answer")
button.onclick = function() {
    console.log("button check");
    size = size.value
    console.log(size);
    personality = personality.value;
    console.log(personality);
if(size === "small" && personality === "aggressive"){
console.log("Ant");
answer.innerHTML = "You like players smaller players (Guards) that are aggressive and love to talk trash, like Anthony Edwards and Russell Westbrook ";
} else if (size === "small" && personality === "calm") {
    answer.innerHTML = "You like smaller players (Guards) calm and let their game talk for them like Curry, SGA, and Kyrie ";
} else if (size === "big" && personality === "calm") {
    answer.innerHTML = "You like the bigs (Centers, Fowards) calm and let their game talk for them like Jokic, Giannis, Tim Duncan";
}else if (size === "big" && personality === "aggressive") {
    answer.innerHTML = "You like the bigs (Centers, Fowards) that are aggressive and love to talk trash like Kevin Garnett, Larry Bird, KD";
} else {
    answer.innerHTML = "Either your size or personality was wrong. Remember choose between small or big for size. For Personality choose between calm or aggressive. (Make sure to leave no spaces)"
}
};

