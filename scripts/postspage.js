let data = [
  {
    postimg:
      "https://m.ftscrt.com/food/ff63c211-9739-4945-a08d-585f8a26bed1_fs2.jpg",
    profile_pic: "https://m.ftscrt.com/static/member/_kiwi_green_shared_sq.jpg",
    username: "Usz22",
  },
  {
    postimg:
      "https://m.ftscrt.com/food/42e90a7d-276e-4c5b-807b-3a4e493db33a_fs2.jpg",
    profile_pic: "https://m.ftscrt.com/static/member/_orange_shared_sq.jpg",
    username: "ANKAJ007",
  },
  {
    postimg:
      "https://m.ftscrt.com/food/eb48acdf-c589-437d-9bf5-294ef9b086fa_fs2.jpg",
    profile_pic:
      "https://m.ftscrt.com/static/member/fe7f76ce-8d4b-4a24-a20b-fee9d39dc416_sq.jpg",
    username: "Prava14",
  },
  {
    postimg:
      "https://m.ftscrt.com/food/82539fd5-e411-46aa-ae4f-d11f4c77d8ff_fs2.jpg",
    profile_pic:
      "https://m.ftscrt.com/static/member/ea9551f6-6e71-4a74-ad67-6fb3457bd384_sq.jpg",
    username: "Preeti004",
  },
  {
    postimg:
      "https://m.ftscrt.com/food/ff63c211-9739-4945-a08d-585f8a26bed1_fs2.jpg",
    profile_pic: "https://m.ftscrt.com/static/member/_kiwi_green_shared_sq.jpg",
    username: "Anuj122",
  },
];
let p_c = document.querySelector(".post_container");
data.forEach((elem, ind) => {
  //!for div with class = dp
  let dp = document.createElement("div");
  dp.setAttribute("class", "dp");

  let dp_img = document.createElement("img");
  dp_img.setAttribute("src", elem.profile_pic);
  dp.append(dp_img);

  //!for div with class = post_img
  let post_img = document.createElement("div");
  post_img.setAttribute("class", "post_img");

  let username = document.createElement("span");
  username.innerText = elem.username;
  username.setAttribute("class", "username");
  let post_des = document.createElement("p");
  post_des.innerText = "Lost 10kg in 3 Months";
  post_des.setAttribute("class", "post_desc");
  let post_image = document.createElement("img");
  post_image.setAttribute("src", elem.postimg);
  let post_time = document.createElement("p");
  post_time.innerText = "1 day ago";
  post_time.setAttribute("class", "post_time");

  post_img.append(username, post_des, post_image, post_time);

  //!Appending div dp and div post_img to post_box
  let post_box = document.createElement("div");
  post_box.setAttribute("class", "post_box");
  post_box.append(dp, post_img);

  //!for div with class = comment_box
  let comment_box = document.createElement("div");
  comment_box.setAttribute("class", "comment_box");

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://m.ftscrt.com/static/member/_taco_shared_sq.jpg"
  );
  let inputbox = document.createElement("input");
  inputbox.setAttribute("placeholder", "Write a comment");
  let cmnt_submit = document.createElement("button");
  cmnt_submit.setAttribute("id", "cmnt_submit");
  cmnt_submit.innerText = "POST";
  let cmnt_cancel = document.createElement("button");
  cmnt_cancel.innerText = "Cancel";
  cmnt_cancel.setAttribute("id", "cmnt_cancel");

  comment_box.append(img, inputbox, cmnt_submit, cmnt_cancel);

  //!Appending post box and comment box to the post div
  let post_div = document.createElement("div");
  post_div.setAttribute("class", "post");
  post_div.append(post_box, comment_box);

  //!Appending post div to the post container
  p_c.append(post_div);
});

// 1) img url - https://m.ftscrt.com/food/ff63c211-9739-4945-a08d-585f8a26bed1_fs2.jpg
// 2) profile img url - https://m.ftscrt.com/static/member/_kiwi_green_shared_sq.jpg
// 3) username - Usz22

// 1 https://m.ftscrt.com/food/42e90a7d-276e-4c5b-807b-3a4e493db33a_fs2.jpg
// 2 https://m.ftscrt.com/static/member/_orange_shared_sq.jpg
// 3 username - ANKAJ007

// 1https://m.ftscrt.com/food/eb48acdf-c589-437d-9bf5-294ef9b086fa_fs2.jpg
// 2https://m.ftscrt.com/static/member/fe7f76ce-8d4b-4a24-a20b-fee9d39dc416_sq.jpg
// 3Prava14

// 1https://m.ftscrt.com/food/82539fd5-e411-46aa-ae4f-d11f4c77d8ff_fs2.jpg
// 2https://m.ftscrt.com/static/member/ea9551f6-6e71-4a74-ad67-6fb3457bd384_sq.jpg
// 3Preeti004

// 1https://m.ftscrt.com/food/e23e9633-66ce-4590-8ddf-36323c79ca03_fs2.jpg
// 2https://m.ftscrt.com/static/member/_fastfood_shared_sq.jpg
// 3Mr RTCRtpTransceiver

// 1https://m.ftscrt.com/food/5e526f2a-1f48-421b-991a-fe04caacff39_fs2.jpg
// 2https://m.ftscrt.com/static/member/02f5782a-999b-4415-ab44-1d871ab7d514_sq.jpg
// 3Shrupat

// 1https://m.ftscrt.com/food/742d2fd9-7925-4ef8-bd9d-a3c4af440809_fs2.jpg
// 2https://m.ftscrt.com/static/member/9ae27ab9-9688-4cc3-aa91-1674e1d3b416_sq.jpg
// 3Sheshuu

// 1https://m.ftscrt.com/food/5e13d258-2483-4bb9-9ab7-93e84ac51ee5_fs2.jpg
// 2https://m.ftscrt.com/static/member/d07421c0-fb44-49db-8517-daa3a5572501_sq.jpg
// 3Adit.in

// 1https://m.ftscrt.com/food/35adf966-f4e8-429a-b96d-9e7ae3bfc756_fs2.jpg
// 2https://m.ftscrt.com/static/member/829ab7ce-39cc-42d3-9720-180d3416bd07_sq.jpg
// 3Sachin kedyan

// 1https://m.ftscrt.com/food/91d3972f-5eca-41dd-a2b6-b2d0df1ba1da_fs2.jpg
// 2https://m.ftscrt.com/static/member/085846a1-1617-4d45-b816-132554a4fb42_sq.jpg
// 3Afzal mac

// 1https://m.ftscrt.com/food/03149958-0ee8-41e6-a9f2-e8a46b255db8_fs2.jpg
// 2https://m.ftscrt.com/static/member/9934f8dd-1efb-4d73-8b11-123bede91f28_sq.jpg
// // 3Paloju Harish

// 1https://m.ftscrt.com/food/d4b40c7c-a00e-44ac-adcf-fa8ae54458de_fs2.jpg
// 2https://m.ftscrt.com/static/member/_watermelon_shared_sq.jpg
// 3nidhikraina

// 1https://m.ftscrt.com/food/845b00b9-bee8-4f92-9d46-a22170fbaf33_fs2.jpg
// 2https://m.ftscrt.com/static/member/8e2cc3c1-b88f-4a00-8da2-509c7fd4dd4f_sq.jpg
// 3chefcutyahwa

// https://m.ftscrt.com/food/ca253cbf-3d3b-474e-b898-1f52c4944ab2_fs2.jpg
// https://m.ftscrt.com/static/member/_pears_shared_sq.jpg
// lynnds18

// https://m.ftscrt.com/food/fc20db6a-ca82-4981-ba35-3340cc1dbb36_fs2.jpg
// https://m.ftscrt.com/static/member/_grapes_shared_sq.jpg
// ravindra J

// https://m.ftscrt.com/food/79c7ecdf-526e-4ee0-9359-8360972ef276_fs2.jpg
// https://m.ftscrt.com/static/member/d57fcd31-5c7e-4571-b7be-e6151b03b636_sq.jpg
// digbijaya

// https://m.ftscrt.com/food/1980336f-60bf-4e8d-95b3-b4a4559f30da_fs2.jpg
// https://m.ftscrt.com/static/member/2bd8e359-ff9e-498c-afce-e49290fbed77_sq.jpg
// atowar rahman

// https://m.ftscrt.com/food/da5ca69c-2c79-48ce-9681-bf2a608ac3c8_fs2.jpg
// https://m.ftscrt.com/static/member/a2324f82-4d11-4f93-9569-61f3d27ce376_sq.jpg
// rahul saini-90001

// https://m.ftscrt.com/food/403d43b7-90cd-4387-a5b1-76c008e9c01e_fs2.jpg
// https://m.ftscrt.com/static/member/_lemon_shared_sq.jpg
// nandinishi

// https://m.ftscrt.com/food/60d24818-0734-414f-b6b1-c788e850e4f1_fs2.jpg
// https://m.ftscrt.com/static/member/_banana_shared_sq.jpg
// parvindersinghsingh

// https://m.ftscrt.com/food/03a419bc-ba19-4d44-b7ce-a7a3f77da268_fs2.jpg
// https://m.ftscrt.com/static/member/a1f3d296-3b0b-407e-81e8-2bf4c161d78e_sq.jpg
// rajendra rajpoot

// https://m.ftscrt.com/food/eb4fcfe9-932c-4626-993c-f2f67a0dc386_fs2.jpg
// https://m.ftscrt.com/static/member/66f7eaa9-0c11-44cd-bc75-1945aad98411_sq.jpg
// trupti Soman

// https://m.ftscrt.com/food/72df7bd2-9ec1-427e-9cc9-4acc6b8863d5_fs2.jpg
// https://m.ftscrt.com/static/member/_pumpkin_shared_sq.jpg
// namara 1

// https://m.ftscrt.com/food/c9ea4660-6e7f-4b48-8fc4-da8ffa1047e9_fs2.jpg
// https://m.ftscrt.com/static/member/3da1e76c-c71e-48eb-b880-8e9feced8e08_sq.jpg
// Radhikaradhuz004

import navbar from "./components/navbar.js";
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();
