let api2 = "238119d0cebe4ad3b2e39d48bcba5d48";
api2 = "6c40b7d29c214c84ae6fc53135f9abb4 ";
api2 = "2485a3d3b1d0434e977a60d9baaf7432";
api2 = "9b592013921c4c3e849d78693c1010a0";

async function searchFood(qry){

    let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api2}&query=${qry}`);
    let data = await res.json();
    console.log(data);
}
// searchFood("pasta");

async function getFood(){

    let res = await fetch(`https://api.spoonacular.com/recipes/random?number=16&apiKey=${api2}`);
    let data = await res.json();
    console.log(data);
    displayFoods(data.recipes)
}

getFood();

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
    document.getElementById('foodAppend').append(card);   
    })

}

function debouncing(){

}