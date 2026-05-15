// let pText = document.getElementById("pTextId");
// console.log(pText);

// let ipRadio = document.getElementsByName("radioOpt");
// console.log(ipRadio);

// let h1s = document.getElementsByTagName("h1");
// console.log(h1s);

// let h1sCN = document.getElementsByClassName("h1sClassName");
// console.log(h1sCN);

// let h1sDiv = document.getElementById("h1sDiv2");
// let h1sDivIn = h1sDiv.getElementsByClassName("h1sClassName");
// console.log(h1sDivIn);

// let h1sQs = document.querySelector(".h1sClassName");
// console.log(h1sQs);
// let h1sQsAll = document.querySelectorAll(".h1sClassName");
// console.log(h1sQsAll);
// let h1sDiv = document.querySelector("#h1sDiv2");
// let h1sQsDiv = h1sDiv.querySelectorAll(".h1sClassName");
// console.log(h1sQsDiv);

// let child = document.querySelector(".child1");
// console.log(child.parentNode);
// console.log(child.parentElement);

// let parent = document.querySelector(".parentEl");
// console.log(parent);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.childNodes);

// let childSec = document.querySelector(".child2");
// console.log(childSec.previousElementSibling);
// console.log(childSec.nextElementSibling);

// let newDiv = document.createElement("div");
// newDiv.innerHTML = "<p>this is from the newDiv</p>";
// document.body.append(newDiv);

// let newh1 = document.createElement("h1")
// newh1.innerHTML = "this is from newh1"
// document.body.append(newh1);

// let menu = document.getElementById("menuList");
// let newMenuItem = document.createElement("li");
// newMenuItem.innerHTML = "<b>Contact</b>";
// menu.appendChild(newMenuItem);

// console.log(menu.innerText)
// console.log(menu.textContent)

// let menu = document.getElementById("menuList");
// let noden = document.createElement("li")
// noden.innerHTML = "abc"
// menu.append(noden)
// menu.prepend(noden)

// let ipBox = document.querySelector(".input1");
// console.log(ipBox.attributes)
// console.log(ipBox.getAttribute("type"))
// ipBox.setAttribute("id", "input01")
// console.log(ipBox.attributes)
// console.log(ipBox.hasAttribute("class"))
// ipBox.removeAttribute("placeholder")
// ipBox.style.backgroundColor = "skyblue"
// ipBox.style.cssText += "padding: 10rem; color: green;"

// let h1Text = document.getElementById("h1ID");
// console.log(h1Text.classList);
// h1Text.classList.add("added1", "added2");
// console.log(h1Text.classList);
// h1Text.classList.remove("added2");
// console.log(h1Text.classList);
// h1Text.classList.replace("added1", "newadded1")
// console.log(h1Text.classList);
// console.log(h1Text.classList.contains("added2"));
// h1Text.classList.toggle("newadded2");
// console.log(h1Text.classList);

// function btnClick() {
//     console.log("clickedThroughFnc")
// }
// function btn2Click() {
//     console.log("btn2")
// }

let btn = document.getElementById("btn");
btn.addEventListener('click', function(event){
    console.log("clicked");
    console.log(event.type);
})

let btn2 = document.getElementById("btn2");
function btn2Click(){
    console.log("button 2 clicked");
    btn2.style.backgroundColor = "skyblue";
};
btn2.addEventListener('mouseover', btn2Click);