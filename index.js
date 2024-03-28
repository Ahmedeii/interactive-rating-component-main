let value = document.querySelectorAll(".number span");
let old = document.querySelector(".page1")
let New = document.querySelector(".page2")
let button = document.querySelector("button")
let massage = document.querySelector(" .selected h4")
value.forEach((params) => {
  params.onclick = function() {
    value.forEach((ele) => {
      ele.classList.remove("Add");

    })
    this.classList.add("Add");
    let number = this.innerHTML
    massage.innerHTML =`you selected  ${number} out of  5 `
    button.onclick = (e) => {
      e.target.style.backgroundColor="blue"
      New.style.display = "block"
      old.style.display = "none"
    }
  };
});
console.log(massage);

