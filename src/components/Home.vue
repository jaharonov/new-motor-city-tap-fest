<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row p-5></b-row>
      
      <b-row>
        <b-col class="p-3">
          <!-- <b-col class="p-5">
          <b-button class="buttons" size="lg" variant="outline-success">
            VIEW SCHEDULE + REGISTER!
          </b-button>
          </b-col> -->
          <!-- <b-card rounded v-bind:src="'./static/mctf-2019.jpg'" left blank-color="#FFB5DA" alt="img" class="my-3" id="savedate">
            <p class="card-text"></p>
          </b-card> -->
          
          <b-card rounded center
          img-src="./static/mctf-2019.jpg"
          img-alt="Save the Date 2019"
          img-top
          tag="article"
          border-variant="success"
          class="mx-auto"
          id="savedate">
          <h4 class="card-text"><strong>August 7-10, 2019</strong></h4>
          <p class="card-text" 
          text-align="justify"
          text-justify="inter-word">
          Wayne State University<br />
          Detroit, Michigan<br/>
          </p>
          <div>
          
  <!-- Using value -->
  <b-button class="buttons" variant="outline-success" v-b-modal="'myModal'">VIEW SCHEDULE<BR/> & REGISTER!</b-button>

  <!-- the modal -->
  <b-modal id="myModal">
    Stay tuned for the 2019 MCTF schedule and registration!
  </b-modal>
          </div>
        </b-card>
        </b-col>
        <b-col class="p-3">
        <b-col>
          <b-embed type="iframe"
           aspect="16by9"
           class="mx-auto"
           src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz"
           allowfullscreen
  ></b-embed>
          <!-- <iframe fluid-grow src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz" frameborder="0" allowfullscreen></iframe> -->
        </b-col>
        <b-col class="hometext my-5">
          <p><strong>4 DAYS OF MASTER CLASSES</strong><br/>
          <small>with leading tap artists in the industry</small>
          </p>
          <p><strong>motor city soles</strong><br/>
          <small>featuring the all-star faculty & special guest performers!</small>
          </p>
          <p><strong>participants showcase</strong><br/>
          </p>
          <p><strong>tap jam</strong><br/>
          </p>
          <p><strong>young choreographers competition</strong><br/>
          </p>
          <p><strong>meet the faculty</strong><br/>
          <small>meet the esteemed master teachers</small>
          </p>
          <br/>
          
        </b-col>
        <b-col class="pb-3 mx-auto">
          <b-button class="buttons" size="lg" variant="outline-success">
            DONATE NOW!
          </b-button>
          </b-col>
        </b-col>  
      </b-row>
      <b-row p-5></b-row>
        <h2 class="pt-5"><strong>thank you to our 2018 sponsors!</strong></h2>
      
<!-- </div> -->
  <!-- </div>  -->
  <b-row>
<b-col lg="3"></b-col>        
<b-col class="mx-auto pt-5" v-for="image in images">
<b-img center v-img:name :src="image.src" :alt="image.alt" fluid-grow blank-color="#FFB5DA"/>
</b-col>     
<b-col lg="3"></b-col>        
  
        </b-row>
        <b-container class="pt-3 pb-5">
        <p><strong><small>The Mary Rakolta Tap Dancing Scholarship
donated by Linda Rakolta in memory of Mary Rakolta</small></strong></p>
        </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      images: [
        { src: './static/logo_energynatldance.png', alt: 'Energy National Dance Logo' },
        { src: './static/sponsor_omara.png', alt: 'Omara Flooring Logo' }
      ]
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

strong {
  color: peru;
  text-transform: uppercase;
}

h1,h2, h3, h4 {
  text-transform: uppercase;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


#savedate {
  width: 90%;
  height: auto; 
}

.hometext {
  text-align: justify;
  text-transform: uppercase;
}
.upperh4 {
  text-transform: uppercase;
}

</style>