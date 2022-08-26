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
  <div class="results">
  <button>add selected</button>

`

async function searchFood(qry){

    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api2}&query=${qry}`);
    let data = await res.json();
    console.log(data);
    foodsearchdisplay(data.results)
}
let btns = document.querySelectorAll('.addbtn')
let c = new Array(btns.length).fill(0);
let foodshows = document.querySelectorAll('.foodshow')
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click",()=>{
      for(let j=0; j<btns.length; j++)
      foodshows[j].innerHTML="";

      if(!c[i]){
        foodshows[i].innerHTML=foodadd;
        document.querySelector('.ser>img').addEventListener("click",()=>{
            let s = document.getElementById('search').value;
            searchFood(s);
          })
      }else{
        document.querySelector('.foodshow').innerHTML="";
      }
        c[i]=!c[i];
    })
}

function foodsearchdisplay(data){
  data.map((e)=>{
        document.querySelector('.results').innerHTML+=`
    <p>
  <input type="checkbox" id="select" value="true">
  <label for="select"> ${e.title}</label>
</p>
    `;
  })

}
