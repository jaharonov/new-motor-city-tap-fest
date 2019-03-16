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
          <p><strong>Classes to be held at Tap Dance Detroit in Ferndale! Big announcement coming soon!</strong></p>
        <!-- <b-col lg="6">
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
        </b-col> -->
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
      <b-row class="p-3" v-for="lodging in lodgings" :key="lodging.id">
          <b-col md="12" lg="6">
<b-img center v-img:name :src="lodging.src" :alt="lodging.alt" fluid-grow blank-color="#FFB5DA"/>
        </b-col>  
        <b-col md="12" lg="6">
            <p class="text-lg-left">The brand new <a href="https://www.hyatt.com/en-US/hotel/michigan/hyatt-place-detroit-royal-oak/dtwzr?corp_id=G-MCDA" target="_blank">Hyatt Place Detroit/Royal Oak</a> welcomes Motor City Tap Fest! We are excited to offer Motor City Tap Fest attendees a great group discount. The hotel is located at 422 N. Main St., Royal Oak, MI 48067.</p>
            <p class="text-lg-left">Limited rooms available so book today! Follow the hotel link above to automatically add the discount code (G-MCDA).</p>
            
        </b-col>
        <!-- <b-col lg="6">
            <b-img left src="./static/greektown-hotel.jpg" fluid />
        </b-col>   -->
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
      ],
      lodgings: [
        { src: './static/hyattplace.png', alt: 'Hyatt Place Hotel' }
        // { url: 'https://www.hyatt.com/en-US/hotel/michigan/hyatt-place-detroit-royal-oak/dtwzr?corp_id=G-MCDA' }
      ]
    }
  }
}

</script> 