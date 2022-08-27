// essential variables
let api2 = "238119d0cebe4ad3b2e39d48bcba5d48";
api2 = "6c40b7d29c214c84ae6fc53135f9abb4";
api2 = "2485a3d3b1d0434e977a60d9baaf7432";
api2 = "9b592013921c4c3e849d78693c1010a0";

let foodadd = `
<div class="addFood">
<div class="side">
  <li class="sideli"> Recently Eaten</li>
  <li class="sideli"> Most Eaten</li>
  <li class="sideli"> Saved Meals</li>
  <li class="sideli"> Cook Book</li>
  <li class="sideli">Search Items</li>
  <li class="sideli">Quick Pick</li>
  <li class="sideli"> Foods</li>
  <li class="sideli"> Restaurants & Chains</li>
  <li> Popular Brands</li>
</div>
<div class="foodinput">
  <div class="ser">
    <input type="text" id="search">
    <img src="https://a.ftscrt.com/static/images/def20/But_Search_Grey_pressed.png" alt="">
  </div>
  <div class="results"></div>
  <button id="add">add selected</button>
`;

async function searchFood(qry, chouth) {
  let res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api2}&query=${qry}`
  );
  let data = await res.json();
  console.log(data);
  foodsearchdisplay(data.results, chouth);
}
let btns = document.querySelectorAll(".addbtn");
let c = new Array(btns.length).fill(0);
let foodshows = document.querySelectorAll(".foodshow");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    for (let j = 0; j < btns.length; j++) foodshows[j].innerHTML = "";

    if (!c[i]) {
      foodshows[i].innerHTML = foodadd;
      document.querySelector(".ser>img").addEventListener("click", () => {
        let s = document.getElementById("search").value;
        searchFood(s, i);
      });
    } else {
      document.querySelector(".foodshow").innerHTML = "";
    }
    c[i] = !c[i];
  });
}
let bkf = JSON.parse(localStorage.getItem("bkf")) || [];
let lun = JSON.parse(localStorage.getItem("lun")) || [];
let din = JSON.parse(localStorage.getItem("din")) || [];
let snk = JSON.parse(localStorage.getItem("snk")) || [];

function foodsearchdisplay(data, chouth) {
  data.map((e) => {
    let p = document.createElement("p");
    let ip = document.createElement("input");
    ip.setAttribute("type", "checkbox");
    ip.setAttribute("id", "select");
    ip.setAttribute("value", "true");
    let lb = document.createElement("label");
    lb.innerHTML = (e.title+"<br>"+(Math.random().toFixed(2)*2)+"kcal "+(Math.random().toFixed(2)*100)+"%fat");
    ip.addEventListener("input", () => {
      switch (chouth) {
        case 0:
          bkf.push((e.title+"<br>"+(Math.random().toFixed(2)*2)+"kcal "+(Math.random().toFixed(2)*100)+"%fat"));
          fds[0].innerHTML = "";
          for (let i = 0; i < bkf.length; i++)
            fds[0].innerHTML += `<h3>${bkf[i]}</h3>`;
          localStorage.setItem("bkf", JSON.stringify(bkf));
          break;
        case 1:
          lun.push((e.title+"<br>"+(Math.random().toFixed(2)*2)+"kcal "+(Math.random().toFixed(2)*100)+"%fat"));
          fds[1].innerHTML = "";
          for (let i = 0; i < lun.length; i++)
            fds[1].innerHTML += `<h3>${bkf[i]}</h3>`;
          localStorage.setItem("lun", JSON.stringify(lun));
          break;
        case 2:
          bkf.push((e.title+"<br>"+(Math.random().toFixed(2)*2)+"kcal "+(Math.random().toFixed(2)*100)+"%fat"));
          fds[2].innerHTML = "";
          for (let i = 0; i < snk.length; i++)
            fds[2].innerHTML += `<h3>${bkf[i]}</h3>`;
          localStorage.setItem("din", JSON.stringify(din));
          break;
        case 3:
          bkf.push((e.title+"<br>"+(Math.random().toFixed(2)*2)+"kcal "+(Math.random().toFixed(2)*100)+"%fat"));
          fds[3].innerHTML = "";
          for (let i = 0; i < din.length; i++)
            fds[3].innerHTML += `<h3>${bkf[i]}</h3>`;
          localStorage.setItem("snk", JSON.stringify(snk));
          break;

        default:
          break;
      }
    });
    p.append(ip, lb);
    document.querySelector(".results").append(p);
  });
}

let fds = document.querySelectorAll(".fds");

for (let i = 0; i < bkf.length; i++) fds[0].innerHTML += `<h3>${bkf[i]}</h3>`;

for (let i = 0; i < lun.length; i++) fds[1].innerHTML += `<h3>${bkf[i]}</h3>`;

for (let i = 0; i < din.length; i++) fds[2].innerHTML += `<h3>${bkf[i]}</h3>`;

for (let i = 0; i < snk.length; i++) fds[3].innerHTML += `<h3>${bkf[i]}</h3>`;
