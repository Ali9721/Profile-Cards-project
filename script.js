"use strict";
const heading = "Please meet our best fotball soccers- design by ali najafi ";
let i = 0;
console.log(heading.length);

const typing = () => {
    if (i < heading.length) {
        document.querySelector(".heading").innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
};

typing();