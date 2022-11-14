<template>
    
    <div class="slider">
      
      <div class="slides">
        <!--radio buttons start-->
        <input type="radio" name="radio-btn" id="radio1">
        <input type="radio" name="radio-btn" id="radio2">
        <input type="radio" name="radio-btn" id="radio3">
        <input type="radio" name="radio-btn" id="radio4">
        <input type="radio" name="radio-btn" id="radio5">
        <!--radio buttons end-->

        <!--slide images start-->
        <div class="slide first">
          <img src="../assets/img/car-full1.jpg" alt="">
          <p class="slide-p1 slide1-style">Cooming soon...</p>
          <p class="slide-p2 slide1-style">Fresh products!</p>
        </div>

        <div class="slide">
          <img src="../assets/img/car-full2.jpg" alt="">
          <p class="slide2-p1 slide2-style">All fashion wear<br>now with a</p>
          <p class="slide2-p2 slide2-style">Refund period</p>
          <p class="slide2-p1 slide2-style">3 days</p>
          <div class="slide2-style">
            <button class="btn-readmore">Read More</button>
          </div>
        </div>

        <div class="slide">
          <img src="../assets/img/car-full3.jpg" alt="">
          <p class="slide3-style">New</p>
          <p class="slide3-style slide3-p2">Children's<br>Books</p>
          <p class="slide3-style">Arrivals!</p>
        </div>

        <div class="slide">
          <img src="../assets/img/car-full4.jpg" alt="">
          <p class="slide4-style slide4-p1">Monthly<br>Promos</p>
          <p class="slide4-style">Now easier to access<br>on our dashboard</p>
        </div>

        <div class="slide">
          <img src="../assets/img/car-full5.jpg" alt="">
          <p class="slide5-style slide5-p1">This week in a</p>
          <p class="slide5-style slide5-p2">Nutshell</p>
          <p class="slide5-style slide5-p3">For frequent updates</p>
          <button class="slide5-style btn-followus">Follow us</button>
        </div>
        <!--slide images end-->
        
        <!--automatic navigation start-->
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
          <div class="auto-btn5"></div>
        </div>
        <!--automatic navigation end-->
      </div>

      <!--manual navigation start-->
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        <label for="radio5" class="manual-btn"></label>
      </div>
      <!--manual navigation end-->

    </div>

</template>
