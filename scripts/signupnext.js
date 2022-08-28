// !for men BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age) */
// !for women BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age) */
// TODO: Sedentary (little or no exercise): calories = BMR × 1.2; */
// TODO: Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375; */
// TODO: Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55; */
// TODO: Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and */
// TODO: If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9. */

let userdata = JSON.parse(localStorage.getItem("fatsecret_data"));
console.log("fine");
let user = userdata[userdata.length - 1];
let dob = user.dob;
let yearofbirth = +dob.slice(0, 4);
let age = 2022 - yearofbirth;
let BMR;
let calories;
let recom_calories;
if (user.gender == "male") {
  BMR = 66.5 + 13.75 * user.current_weight + 5.003 * user.height - 6.75 * age;
} else {
  BMR = 655.1 + 9.563 * user.current_weight + 1.85 * user.height - 4.676 * age;
}

if (user.activity_level == "sedentary") calories = BMR * 1.2;
else if (user.activity_level == "low_active") calories = BMR * 1.375;
else if (user.activity_level == "active") calories = BMR * 1.155;
else if (user.activity_level == "very active") calories = BMR * 1.725;

if (user.deit_goal == "weight gain" || user.deit_goal == "slow weight gain")
  recom_calories = calories + 200;
else if (user.deit_goal == "current weight") recom_calories = calories;
else recom_calories = calories - 200;

recom_calories = Math.ceil(recom_calories);
let cal_box = document.getElementById("recmnd_cals");
cal_box.value = recom_calories;

let recmnd_cal_p = document.getElementById("recmnd_cals_1");
recmnd_cal_p.innerText = recom_calories;
