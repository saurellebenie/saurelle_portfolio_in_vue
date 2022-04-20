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

  <!-- About Section -->
  <section id="about">
    <div class="about container">
      <div class="col-left animate__animated animate__fadeInLeft">
        <div class="about-img">
           <img src="../assets/image/photo_2021-12-27_19-59-58.jpg" alt="img">
        </div>
      </div>
      
      <div class="col-right animate__animated animate__fadeInRight">
        <h1 class="section-title ">About <span>me</span></h1>
        <h2>Learning Front End Developer</h2>
        <p>I’m Nono saurelle benie , a student in fullstack web development with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences.
            I develop websites with HTML, CSS and JavaScript<span id="dots" v-bind:style={display:dots}></span> {{read}} <button @click="myfunction"  id="myBtn">{{myBtn}}</button></p>
            
        <a href="#" class="cta animate__animated animate__fadeInUp">Download Resume</a>
      </div>
       <div id="background-wrap">
            <div class="bubble x1"></div>
            <div class="bubble x2"></div>
            <div class="bubble x3"></div>
            <div class="bubble x4"></div>
            <div class="bubble x5"></div>
            <div class="bubble x6"></div>
            <div class="bubble x7"></div>
            <div class="bubble x8"></div>
            <div class="bubble x9"></div>
            <div class="bubble x10"></div>
        </div>
    </div>
  </section>
  <!-- End About Section -->


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
    name:"about-app",
    data(){
		return{
			dots: "none",
			read: "none",
			myBtn: "...",
			slidefade: true,
		}
	},
	methods:{
		myfunction(){
			if(this.dots==="none"){
				this.dots="inline"
				this.myBtn="less";
				this.read="Currently I am learning the use of libraries like tailwing css,and Vuejs framework . Being a diligent, hardworking and result oriented woman, I always strive to get the best result for every project I get my hands on."
			}
			else{
				this.dots = "none";
				this.myBtn="...";
				this.read="inline";
			}
			
		}
		}
}
</script>