let api2 = "238119d0cebe4ad3b2e39d48bcba5d48";
api2 = "6c40b7d29c214c84ae6fc53135f9abb4 ";
api2 = "2485a3d3b1d0434e977a60d9baaf7432";
api2 = "9b592013921c4c3e849d78693c1010a0";
let store;
async function getFood(){
    if(!store){
            let res = await fetch(`https://api.spoonacular.com/recipes/random?number=16&apiKey=${api2}`);
    let data = await res.json();
    console.log(data);
    displayFoods(data.recipes)
    }else
        document.getElementById('fhead').innerHTML=store;


}

getFood();
async function searchFood(qry){

    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api2}&query=${qry}`);
    let data = await res.json();
    console.log(data);
    foodsearchdisplay(data.results)
}


document.getElementById('Search').addEventListener("click",(e)=>{
    searchFood(document.getElementById('Searchi').value);    
});

function foodsearchdisplay(data){
    console.log(data);
    document.getElementById('recAppend').innerHTML="";
    data.map((e)=>{
        let card = document.createElement("div");
   card.classList.add("card");
   card.innerHTML=`
   <img src="${e.image}" alt="">
   <div>
   <h4><a href="foodDetail.html">${e.title}</a></h4>
   <p>Per 1 slice - Calories: 23kcal | Fat: 0.60g | Carbs: 0.55g | Protein: 3.63g
   Other sizes: 1 cup of pieces - 162kcal , 1 cubic inch - 21kcal , 1 serving - 23kcal , more...    Nutrition Facts - Similar
   </p>
   </div>
   `;
   console.log(card,document.getElementById('recAppend'))
   document.getElementById('recAppend').append(card);   
   document.getElementById('recAppend').classList.add("up")
   store = document.getElementById('fhead').innerHTML;
   document.querySelector('.down').innerHTML="";
   document.querySelector('.down').style.border="none";
   })
    
}

function displayFoods(data){
    data.map((e)=>{
         let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
    <img src="${e.image}" alt="">
    <div>
    <h4><a href="foodDetail.html">${e.title.slice(0,30)}</a></h4>
    <p>${e.summary.slice(30,150)}</p>
    </div>
    `;
    document.getElementById('recAppend').append(card);   
    })

}