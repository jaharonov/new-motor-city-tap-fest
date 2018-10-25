<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet">


  </head>
  <div id="app" variant="transparent">
    <div class="fixed-top">
    <header>
        <b-navbar-brand v-bind:to="'/'" class="mt-3 px-auto" id="h1-name">MOTOR CITY TAP FEST</b-navbar-brand>

    <b-navbar toggleable="md" type="success" variant="primary" class="nav-text">
  
  <!-- <b-navbar-toggle target="nav_collapse" class="nav-items" id="menu">MENU</b-navbar-toggle> -->
  <!-- <b-navbar-brand href="#" class="mb-5" id="h1-name">Motor City Tap Fest</b-navbar-brand> -->
  <b-navbar-toggle target="nav_collapse" class="nav-items" id="menu">MENU</b-navbar-toggle>
  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="mx-auto">
 
      <b-nav-item class="nav-items" v-bind:to="'schedreg'">SCHEDULE +<br/> REGISTER</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'locaccom'">LOCATION +<br/> ACCOMMODATIONS</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'faculty'">FACULTY</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'mcsoles'">MOTOR CITY<br/>SOLES</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'chorchal'">MCTF CHOREOGRAPHER'S<br/>CHALLENGE</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'auditions'">PARTICIPANTS<br/>SHOWCASE</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'scholarships'">SCHOLARSHIPS</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'store'">STORE</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'give'">GIVE NOW</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'about'">ABOUT +<br/>CONTACT</b-nav-item>
      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</header>
<div class="row">
<div class="col-3">

   </div>
   <div class="col-3">
         
   </div>
   </div>
 </div>  
 <div class="row p-5"></div>
   
<!-- navbar-1.vue -->
    <router-view></router-view>
    
      <!-- <div class="row fixed-bottom"> -->
      
   
    <footer class="fixed-bottom">
      <br/>
       <span class="m-5">&copy; 2018 Motor City Dance Productions, All Rights Reserved. Website by <a href="http://www.jaharonov.com" target="_blank">J Aharonov</a>.</span>
    </footer>
    <!-- </div> -->
    
    
  

  
</div>
  </html>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#navname {
  font-size: 1.5rem;
}

#menu {
  color: #f8f66b;
}
footer {
  position: absolute; 
  left: 0;
  // bottom: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  font-family: 'Viga', sans-serif;
  color: #f26c22;
  font-size: 80%;

}
#h1-name {
  font-size: 3em;
  // font-family: 'Audiowide', cursive;
  font-family: 'Viga', sans-serif;
  color: #f26c22;


}

.nav-link {
font-family: 'Viga', sans-serif;
color: #f26c22;
font-size: 80%;
}


@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

</style>

<style>
h1 {
  font-family: 'Viga', sans-serif;
}
</style>
