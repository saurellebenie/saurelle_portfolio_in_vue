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

<!-- Contact Section -->
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
        <p>I am available to work on your projects and bring your ideas to life. 
          <br> I am just a click away</p>

      </div>
      <div class="contact-items">
        <div class="contact-item animate__animated animate__fadeInLeft">
          <div class="icon"><img src='../assets/image/contact.png'/></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+237 234 123 1234</h2>
            <h2>+237 000 123 1234</h2>
          </div>
        </div>
        <div class="contact-item animate__animated animate__fadeInUp">
          <div class="icon"><img src='../assets/image/email.png'/></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>nonobenie@gmail.com</h2>
            <h2>nonobenie@yahoo.com</h2>
          </div>
        </div>
        <div class="contact-item animate__animated animate__fadeInRight">
          <div class="icon"><img src='../assets/image/adress.png' /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>bonamoussadi,<br> Douala, Cameroun</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
  
    <!-- Footer -->
  
  
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>S</span><span>b</span></h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      
      <div class="social-icon">
        <div class="social-item ">
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
    name:'contact-app'
}
</script>

