<template>
    <!-- Header -->
<section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
            <h1 class="head"><span>S</span><span>B</span></h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger" @click="openMobileNav">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="/" >Home</a></li>
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

   <!-- Hero Section  -->
     <section id="hero">
    <div class="hero container">
    <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Nono Saurelle Benie <span></span></h1>
		<p>I'm a fullstack web development student at Seven Academic </p>
	
        <a href="/Projects" type="button" class="cta">Portfolio</a>
    </div>
    </div>

    
  </section>
  <!-- End Hero Section  -->
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
    name: 'header-app',
    data(){
      return{
        
      }
    },
    
    method:{
        openMobileNav(){
          const hamburger = document.querySelector('.hamburger');
          const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
  hamburger.classList.toggle('active')
	mobile_menu.classList.toggle('active')
        }
    },
}

</script>


