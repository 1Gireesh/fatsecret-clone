function topbar(){

    let date = new Date();

var n = date.toDateString();
let d = n.slice(8,10);


    return `
        
  <div id="topbar">
  <img class="hov" src="https://cdn-icons-png.flaticon.com/128/6176/6176427.png" alt="">
  <div id="calend">
    <div id="cal">
      <img class="hov" src="https://cdn-icons-png.flaticon.com/128/2693/2693710.png" alt="">
      <span id="dayate">
        <span id="day">${n.slice(0,4)}</span>
        <span id="date">
        ${n.slice(4,11)}
        </span>
    </div>


    </span>
    <div id="calender">
      <ul class="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul class="days">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </ul>
    </div>
  </div>
  <div style="display: flex;">
  <a href="foodadd.html">
    <img class="hov" src="https://static.fatsecret.com/static/images/def20/TL_foods.png" alt="">
      </a>  
     <span style="display: flex;
     flex-direction: column;
     ">
      <span style="color: red;">0 kcal</span>
      <span>RDI 0%</span>
    </span>
  </div>
  <div>
 

  <img class="hov" src="https://cdn-icons-png.flaticon.com/128/744/744456.png" alt="">

    <span style="color: green;
    font-size: smaller;
    ">0 kcal</span>
  </div>
  <div>
    <img class="hov" src="https://cdn-icons-png.flaticon.com/128/893/893214.png" alt="">
    <span>48kg</span>
  </div>
  <img class="hov" src="https://cdn-icons-png.flaticon.com/128/6176/6176427.png" alt="">

</div>
<div>


</div>
<style>
.hov {
    opacity: 0.5;
    height: 50px;
  }
  .hov:hover {
    opacity: 1;
  }
  #topbar {
    border: 2px solid black;
    display: flex;
    width: 650px;
    margin: auto;
    gap: 30px;
    margin-top: 3%;
    margin-bottom: 2%;
  }
  
  * {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  body {
    font-family: Verdana, sans-serif;
  }
  
  #calender{
    border: 2px solid black;
    background-color: white;
    position: absolute;
    display: flex;
    width: 250px;
    height: 100px;
    padding: 0;
    flex-direction: column;
  }
  #calender>div{
    border: 2px solid black;
  }
  .weekdays{
    display: flex;
    gap: 10px;
  }
  .days{
    width: 250px;
    display: grid;
    grid-template-columns: repeat(7,1fr);
  }
  li{
    // font-size: smaller;
    color: blue;
  }
  .today{
    background-color: blue;
  }
  #dayate{
    display: flex;
    flex-direction: column;
  }
  #cal{
    display: flex;
    gap: 10px;
  }
  #calender{
    display: none;
    margin-top: 10px;
  }
  #calend:hover #calender{
    display: flex;
  }
  #calender:hover{
    display: flex;
  }
  #topbar>div{
    border: 2px solid black;
    border-bottom: 0;
    border-top: 0;
  }
  #topbar>div:nth-child(3){
    border: 0;
  }
  #topbar>div:nth-child(5){
    border-left: 0;
  }
</style>

    `;
}

document.querySelector("#tp").innerHTML = topbar();