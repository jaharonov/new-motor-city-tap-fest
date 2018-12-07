<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>Scholarships</strong></h1>
      </b-row>
      
      <b-row class="p-3 pt-5">
            <b-img class="p-2" center src="./static/scholarships1.jpg" fluid/>     
            <b-img class="p-2" center src="./static/scholarships2.jpg" fluid/> 
            <b-img class="p-2" center src="./static/scholarships3.jpg" fluid/> 
            </b-row>
            <b-row class="p-3 pt-5">
            <p class="text-lg-left">Motor City Tap Fest is proud to continue offering scholarships to aspiring dancers and dance educators that need financial help to continue growing and working toward new goals. Questions? <a v-bind:href="`mailto:${emailinfo}`">{{nameinfo}}</a> us or call 917-687-4811<br/>
            </p>
        </b-row>
      <b-row class="p-3 pt-3">
          <h2>PAST RECIPIENTS</h2>
      </b-row>
      <b-row class="p-3 pt-2">
          <b-col lg="4">
          <div class="past">
          <b-img class="p-2" src="./static/scholarship-recipient_kalysta.jpg" fluid/>
          </div>
          </b-col>
          <b-col lg="4">    
          <div class="past">   
            <b-img class="p-2" src="./static/scholarship-recipient_paige.jpg" fluid/>
          </div>
          </b-col>
          <b-col lg="4">
            <div class="past">
            <b-img class="p-2" src="./static/scholarship-recipient_taba.jpg" fluid/>
            </div>
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
      nameinfo: 'Email',
      emailinfo: 'info@motorcitytapfest.com',
      namescho: 'scholarships@motorcitytapfest.com',
      emailscho: 'scholarships@motorcitytapfest.com'
    }
  }
}
</script> 

<style>
    .past {
        height: 325px;
        width: auto;
        overflow: hidden;
    }
</style>