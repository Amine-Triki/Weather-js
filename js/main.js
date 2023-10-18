// filter
let switchLis = document.querySelectorAll(".switcher li");
let posts = Array.from(document.querySelectorAll(" .post"));


switchLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", managePosts);
});

//remove active calss from all posts and add to current
function removeActive() {
  switchLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
//manage posts
function managePosts() {
    posts.forEach((post) => {
        post.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "flex";
    })
}





// year
let year = new Date().getFullYear();
document.getElementById(
  "Rights"
).innerHTML = `${year} &copy Amine Triki || All Rights Reserved`;
