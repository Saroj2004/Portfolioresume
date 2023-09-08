let popup = document.getElementById("popup");
let btn = document.querySelector(".btn")
let obBtn =document.querySelector(".okBtn")
let container = document.querySelector(".popup_container")
btn.addEventListener("click",()=>{
    container.classList.toggle("hidden")
})


obBtn.addEventListener("click",()=>{
  container.classList.toggle("hidden")
})

var seeMoreButton = document.getElementById("seemore");

seeMoreButton.addEventListener("mouseover", function() {
  seeMoreButton.style.backgroundColor = "green";
});

seeMoreButton.addEventListener("mouseout", function() {
  seeMoreButton.style.backgroundColor = "white";
});


const progress = document.querySelectorAll('.progress_bar');
function callback(entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove('active');
  }
}

const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.01,
});

progress.forEach(ele => {
  observer.observe(ele);
});







