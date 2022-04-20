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

   
  <!-- Projects Section -->
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info  animate__animated animate__fadeInLeft">
            <h1>PROJECT I</h1>
            <h2><a href="">My_Portfolio</a></h2>
            <p>my portfolio was made with vue js framework. animations with animate.css and of course html, css and javascript</p>
          </div>
          <div class="project-img animate__animated animate__fadeInRight">
            <img src="../assets/image/img-1.png" alt="img">
          </div>
        </div>
        <div class="project-item">
          <div class="project-info animate__animated animate__fadeInRight">
            <h1>PROJECT II</h1>
            <h2><a href="#">WhiteChilly</a></h2>
            <p>WhiteChily is the website of a restaurant I created at level I. The result is not what I would hope for but I think I will get better with time </p>
          </div>
          <div class="project-img animate__animated animate__fadeInLeft">
           <img src="../assets/image/img-1.png" alt="img">
          </div>
        </div>
     
      </div>  
      </div>
   
  </section>
  
  <!-- End Projects Section -->


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
    name: 'projet-app'
}
</script>