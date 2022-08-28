let submit_btn = document.querySelector("form");
submit_btn.addEventListener("submit", formsubmit);
let userdata = JSON.parse(localStorage.getItem("fatsecret_data")) || [];
function formsubmit() {
  event.preventDefault();
  let gender;
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }
  let current_weight = document.getElementById("cur_wt").value;
  let height = document.getElementById("cur_ht").value;
  let dob = document.getElementById("dob").value;
  let actvitylevel;
  if (document.getElementById("act_lvl_1").checked) {
    actvitylevel = document.getElementById("act_lvl_1").value;
  } else if (document.getElementById("act_lvl_2").checked) {
    actvitylevel = document.getElementById("act_lvl_2").value;
  } else if (document.getElementById("act_lvl_3").checked) {
    actvitylevel = document.getElementById("act_lvl_3").value;
  } else if (document.getElementById("act_lvl_4").checked) {
    actvitylevel = document.getElementById("act_lvl_4").value;
  }
  let deit_goal = document.getElementById("deit_goal").value;
  let goal_weight = document.getElementById("goal_weight").value;
  console.log(
    gender,
    current_weight,
    height,
    dob,
    actvitylevel,
    deit_goal,
    goal_weight
  );
  let member_name = document.getElementById("name").value;
  let member_pass = document.getElementById("password").value;
  let email = document.getElementById("password").value;
  let obj = {
    name: member_name,
    password: member_pass,
    email: email,
    gender: gender,
    current_weight: current_weight,
    height: height,
    activity_level: actvitylevel,
    deit_goal: deit_goal,
    dob: dob,
    deit_goal: deit_goal,
    weight_goal: goal_weight,
  };
  console.log(obj);
  userdata.push(obj);
  localStorage.setItem("fatsecret_data", JSON.stringify(userdata));
  window.open("signupnext.html", "_blank");
}
