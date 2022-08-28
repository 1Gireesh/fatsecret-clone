export default function navbar() {
  let userdata = JSON.parse(localStorage.getItem("cred")) || {};
  let src,
    status1 = "SignIn",
    user = "Register";
  if (userdata.signinkey) {
    src = "./name_click.html";
    user = userdata.name;
    status1 = "Sign Out";
  } else {
    src = "./signupform.html";
  }
  return `<nav>
      <div class="nav_top">
        <div class="nav_top_box">
          <a href="${src}">${user}</a>
          <hr />
          <a href="">${status1}</a>
        </div>
      </div>
      <div class="nav_mid">
        <div class="nav_mid_box1">
          <img
            src="https://a.ftscrt.com/static/images/def20/Fatsecret_logo.png"
            alt=""
          />
          <div>
            <i class="fa-solid fa-utensils">
              <i class="fa-solid fa-caret-down"></i>
            </i>
            <input type="text" placeholder="Enter Search" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div class="nav_bottom">
        <div class="nav_bottom_box">
          <div>
            <a href="postpage.html">MY FATSECRET</a>
          </div>
          <div>
            <a href="food.html">FOODS</a>
          </div>
          <div>
            <a href="recipes.html">RECIPIES</a>
          </div>
          <div>
      <a href="challenge.html">CHALLENGES</a>
    </div>
          <div>
            <a href="fitnees.html">FITNESS</a>
          </div>
          <div>
            <a href="community.html">COMMUNITY</a>
          </div>
        </div>
      </div>
    </nav>`;
}
// attach this script so that you get icons
//  <script
//    src="https://kit.fontawesome.com/dc62d44e03.js"
//    crossorigin="anonymous"
//  ></script>;
