<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>About + Contact</strong></h1>
      </b-row>
      <b-row class="p-3 pt-5">
        <b-col lg="6">
            <b-img left src="./static/denise-caston.jpg" fluid-grow/>
        </b-col>  
        <b-col>
            <p class="text-justify">Motor City Tap Fest was founded by Denise Caston to create a thriving tap dance community in Michigan. Now in its 13th year, Detroit is a top destination for tap dancers every summer.
            </p>
            <p class="text-lg-left">Caston-Clark Tap Dance Foundation<br/>
            310 Livernois<br/>
            Ferndale, MI 48220
            </p>
            <p class="text-lg-left">phone: 917-687-4811<br/>
            fax: 248-605-8563<br/>
            <a v-bind:href="`mailto:${email}`">{{name}}</a>
            </p>
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
      name: 'Email',
      email: 'info@motorcitytapfest.com'
    }
  }
}
</script> 