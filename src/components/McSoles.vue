<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>motor city soles</strong></h1>
      </b-row>
      <b-row class="pt-4 pl-3 text-justify">
        <b-col lg="6">
          <p>Motor City Soles will be at the historic <a href="https://www.royaloakmusictheatre.com/" target="_blank">Royal Oak Music Theatre</a> on August 10!</p>
         <p> Motor City Soles is a high energy evening of fun for the whole family, featuring leading tap dance arts and tap companies in the industry! More info on 2019's Motor City Soles coming soon!</p>
         <p>Click <a href="https://www.axs.com/events/371283/motor-city-soles-tickets" target="_blank">here</a> to buy tickets!</p>
         </b-col>
         <b-col lg="6"><b-img src="./static/motor-city-soles.png" fluid/></b-col>
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