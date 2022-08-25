export default function navbar() {
  return (
    <nav>
      <div class="nav_top">
        <div class="nav_top_box">
          <a href="">Register</a>
          <hr />
          <a href="">Sign In</a>
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
            <a href="">MY FATSECRET</a>
          </div>
          <div>
            <a href="">FOODS</a>
          </div>
          <div>
            <a href="">RECIPIES</a>
          </div>
          <div>
            <a href="">FITNESS</a>
          </div>
          <div>
            <a href="">COMMUNITY</a>
          </div>
          <div>
            <a href=""></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
