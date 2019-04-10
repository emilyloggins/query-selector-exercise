
const firstEl = document.querySelector(".article__header");
console.log("first El", firstEl);
firstEl.textContent = "Welcome to Emily's Blog";

const articleHeader = document.querySelectorAll(".article__header");
articleHeader[0].classList.add("important");
articleHeader[1].classList.add("important");

const dash = document.querySelector(".dashed");
console.log(dash);
dash.classList.remove("dashed");

const articleFooter = document.querySelector(".article__footer");
console.log(articleFooter);
articleFooter.classList.add("goldenrod");