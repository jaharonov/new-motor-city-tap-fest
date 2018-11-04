<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>press</strong></h1>
      </b-row>
      
      <b-row class="pt-5">
        <b-col lg="6">
            <b-embed type="iframe"
           aspect="16by9"
           class="mx-auto"
           src="https://www.youtube.com/embed/gU5T3Vs9zag"
           allowfullscreen
  ></b-embed>
        </b-col>  
        <b-col>
          <h3 class="text-lg-left">articles</h3>
            
            <ul class="text-lg-left">
                <li class="mt-3"><a href="https://www.theoaklandpress.com/entertainment/dancers-tap-into-fancy-footwork-with-motor-city-soles-and/article_ff922fc3-3cc7-58ed-b830-90e96cc12e07.html" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Oakland Press</a></li>
                <li class="mt-3"><a href="http://www.fox2detroit.com/good-day/motor-city-tap-festival-aug-10-13" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Fox 2 Detroit</a></li>
                <li class="mt-3"><a href="https://www.broadwayworld.com/detroit/article/Motor-City-Tap-Festival-to-be-Held-in-August-20160426" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Broadway World</a></li>
                <li class="mt-3"><a href="https://www.mlive.com/entertainment/detroit/index.ssf/2009/08/best_of_metro_times_calendar.html" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Detroit Metro Times</a></li>
            </ul>
        </b-col>
      </b-row>
      
      <b-row p-5></b-row>
        
  </b-container>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      images: [
        // { src: './static/Old-Main-WSU.jpg', alt: 'Old Main building Wayne State University' },
        { src: './static/musichall.jpg', alt: 'Music Hall' }
      ]
    }
  }
}
</script> 