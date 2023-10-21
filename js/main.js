// api
async function get(){
  const reponse = await fetch("https://api.weatherapi.com/v1/current.json?key=d2fb835a98794ce0814203429230910&q=sfax&aqi=yes")
  const data = await reponse.json()
  console.log(data)
 
  //card
let card = document.querySelector('.card').innerHTML = `
<div class="card-body">
  <h3>Sfax </h3>
  <div><img src="${data.current.condition.icon}" alt="icon" <span>${data.current.condition.text}</span></div>
  <h5 class="card-title"> last updated : ${data.current.last_updated} </h5>
  <p class="card-text">Temperature in °C : ${data.current.temp_c}  </p>
  <p class="card-text">Temperature in °F : ${data.current.temp_f}  </p>
  <p class="card-text">Humidity : ${data.current.humidity}  </p>
  <p class="card-text">Gust kph : ${data.current.gust_kph}  </p>
  <p class="card-text">Gust mph : ${data.current.gust_mph}  </p>

  
</div>
`;

}
get()





// filter posts
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
