<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>locations + accomodations</strong></h1>
      </b-row>
      <b-row class="pt-4 pl-3">
          <h2>classes</h2>
      </b-row>
      <b-row class="p-3">
        <b-col lg="6">
            <b-img left src="./static/Old-Main-WSU.jpg" fluid />
        </b-col>  
        <b-col>
            <p class="text-lg-left">Festival classes will be held at the Old Main Building on 
                the campus of <a href="https://www.facebook.com/motorcity.tapfest" target="_blank">Wayne State University</a>, located
                at 4841 Cass Avenue, Detroit MI 48201.
            </p>
            <ul class="text-lg-left">
                <li class="mt-3"><a href="http://maps.wayne.edu/" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Download a campus map</a></li>
                <li class="mt-3"><a href="http://maps.wayne.edu/view/?q=old+main" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Searchable online map</a></li>
                <li class="mt-3"><a href="http://theatreanddance.wayne.edu/" target="_blank"><b-img left src="./static/icons8-link-64.png" height="25%"/>Theatre and Dance at Wayne State</a></li>
            </ul>
        </b-col>
      </b-row>
      <b-row class="pt-4 pl-3">
          <h2>concert</h2>
      </b-row>
      <b-row class="p-3">
        <b-col lg="6" v-for="image in images">
<b-img center v-img:name :src="image.src" :alt="image.alt" fluid-grow blank-color="#FFB5DA"/>
        </b-col>  
        <b-col>
            <p class="text-lg-left">Motor City Soles will be at the historic <a href="https://www.royaloakmusictheatre.com/" target="_blank">Royal Oak Music Theatre</a> on August 10!</p>
            
        </b-col>
      </b-row>
      <b-row class="pt-4 pl-3">
          <h2>lodging</h2>
      </b-row>
      <b-row class="p-3">
        <!-- <b-col lg="6">
            <b-img left src="./static/greektown-hotel.jpg" fluid />
        </b-col>   -->
        <b-col>
            <!-- <p class="text-lg-left">Stay at <a href="https://book.passkey.com/event/13839965/owner/437/landing/closed">Greektown Hotel</a>! Book with this discount code and save 30-40%. Rooms are limited so book soon! Each individual guest must make their own reservations by calling 877-424-5554.
            </p> -->
            <p class="text-lg-left">Lodging options TBA!</p>
            
        </b-col>
      </b-row>
      <b-row p-5></b-row>
        
      
<!-- </div> -->
  <!-- </div>  -->
  <!-- <b-row>
<b-col lg="3"></b-col>        
<b-col class="mx-auto pt-5" v-for="image in images">
<b-img center v-img:name :src="image.src" :alt="image.alt" fluid-grow blank-color="#FFB5DA"/>
</b-col>     
<b-col lg="3"></b-col>        
  
        </b-row>
        <b-container class="pt-3 pb-5">
        <p><strong><small>The Mary Rakolta Tap Dancing Scholarship
donated by Linda Rakolta in memory of Mary Rakolta</small></strong></p>
        </b-container> -->
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
        { src: './static/royaloaktheater.jpg', alt: 'Royal Oak Theater' }
      ]
    }
  }
}
</script> 