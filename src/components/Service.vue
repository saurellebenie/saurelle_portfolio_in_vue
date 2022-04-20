<template>
      <!-- Header -->
  <section id="header" >
    <div class="header container" @scroll="scrollHeader" >
      <div class="nav-bar">
        <div class="brand">
          <a href="/">
            <h1 class="head"><span>S</span><span>B</span></h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger" @:click="hamburger">
            <div class="bar"></div>
          </div>
          <ul >
            <li ><a href="/" >Home</a></li>
            <li><a href="/Service" >Services</a></li>
            <li><a href="/Projets" >Projets</a></li>
            <li><a href="/About" >About</a></li>
            <li><a href="/Contact" >Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End Header -->

  <!-- Service Section -->
  <section id="services">
    <div class="services container">
   
      <div class="service-top">
        <h1 class="section-title">Serv<span>i</span>ces</h1>
        <p>I'm learning to be a professional <br> fullstack developper,  for now <br> i have skills in frontend developpement html, css, js and vue3</p>
      </div>
      <div class="service-bottom">
        <div class="service-item  animate__animated animate__fadeInLeft">
          <div class="icon"><img src="../assets/image/html.png" /></div>
          <h2>HTML and CSS</h2>
          <p>I use HTML to read and display the different contents of a web page and CSS to style an HTML document</p>
        </div>
        <div class="service-item animate__animated animate__fadeInUp">
          <div class="icon"><img src="../assets/image/javascript.png"></div>
          <h2>JAVASCRIPT</h2>
          <p>I use javascript to create dynamically updated content, control multimedia content, animate images.</p>
        </div>
        <div class="service-item animate__animated animate__fadeInRight">
          <div class="icon"><img src="../assets/image/vuejs.png" /></div>
          <h2>VUE JS</h2>
          <p>is an open-source JavaScript framework used to build user interfaces and single-page web applications.</p>
        </div>
        
      </div>
    </div>
  </section>
  <!-- End Service Section -->
   

    <!-- Footer -->
  
  
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>S</span><span>b</span></h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="../assets/image/facebook-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="../assets/image/instagram-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="../assets/image/twitter.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="../assets/image/linked.png" /></a>
        </div>
      </div>
      <p>Copyright © 2021 Saurelle. All rights reserved</p>
    </div>
  </section>
  <!-- End Footer -->
</template>


<script>
export default {
    name: 'service-app'
}
</script>