<template>
  <div class="hello">
    <div class="m-5">
      <b-row p-5></b-row>
      <b-row>
        <b-col>
          <!-- <b-card rounded v-bind:src="'./static/mctf-2019.jpg'" left blank-color="#FFB5DA" alt="img" class="my-3" id="savedate">
            <p class="card-text"></p>
          </b-card> -->
          <b-card rounded center
          img-src="./static/mctf-2019.jpg"
          img-alt="Save the Date 2019"
          img-top
          tag="article"
          border-variant="warning"
          class="my-3"
          id="savedate">
          <h4 class="card-text">August 7-10, 2019</h4>
          <p class="card-text" 
          text-align="justify"
          text-justify="inter-word">
          Wayne State University<br />
          Detroit, Michigan</p>
          
        </b-card>
        </b-col>
        <b-col>
          <iframe class="my-3 embed-responsive-item" src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz" frameborder="0" allowfullscreen></iframe>
        </b-col>  
        <b-col>
        <b-card rounded
          img-src="./static/mctf-2019.jpg"
          img-alt="Save the Date 2019"
          img-top
          tag="article"
          border-variant="warning"
          class="my-3"
          id="savedate">
          <h4 class="card-text">August 7-10, 2019</h4>
          <p class="card-text" 
          text-align="justify"
          text-justify="inter-word">
          Wayne State University<br />
          Detroit, Michigan</p>
          
        </b-card>
        </b-col>           
      </b-row>
</div>
  
  </div> 
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: lawngreen;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#savedate {
  width: 90%;
  height: auto; 
}


</style>