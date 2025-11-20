//your JS code here. If required.
// Is code ko ek alag JS file (jaise script.js) mein rakhein

// Pehle element ko select karein
const element = document.getElementById("level");

// DOM level calculate karne ke liye function
function getDomLevel(el) {
    let level = 1;
    let current = el;

    // Jab tak parent element milta rahe, loop chalao
    while (current.parentElement) {
        current = current.parentElement;
        level++;
    }
    return level;
}

// Element ka DOM level calculate karein
const domLevel = getDomLevel(element);

// alert() function ka use karke result display karein
alert("The DOM level of the element is: " + domLevel);
