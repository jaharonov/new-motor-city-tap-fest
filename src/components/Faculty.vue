<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
          <div id="faculty">
      <b-row class="pt-5">
          <h1><strong>2018 Faculty</strong></h1>
          
      </b-row>
      <b-row>
          <p>Click on a faculty member to view their bio.</p>
      </b-row>
      <b-row>
      <b-col lg="3" v-for="image in images" :key="image.id">
      
    
  <!-- Using modifiers -->
  <b-img v-b-modal="image.name" :src="image.src" :alt="image.alt" fluid-grow />

  <!-- Using value -->

  <!-- the modal -->
  <b-modal :id="image.name">
    <b-img :src="image.src" fluid />
    
    <p class="text-justify">{{image.bio1}}</p>
    <p class="text-justify">{{image.bio2}}</p>
    <p class="text-justify">{{image.bio3}}</p>
    <p class="text-justify">{{image.bio4}}</p>
  </b-modal>

    </b-col>    
    </b-row>
      <b-row p-5></b-row>
        </div>
  </b-container>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      images: [
        // { src: './static/Old-Main-WSU.jpg', alt: 'Old Main building Wayne State University' },
        { name: 'modal1',
          id: 'denise_castion',
          src: './static/faculty_denise-caston.jpg',
          alt: 'Music Hall',
          bio1: 'Denise Caston was a Radio City Rockette for 10 years and toured nationally with the Tony Award winning musical, Crazy For You. Denise has also had the honor of performing the choreography of Savion Glover at a showcase in New York City. She performed on tour in Australia, dancing all over the continent in Elvis to the Max. Her choreography has been seen in many productions in which she performed, including shows at Caesars Windsor in Ontario, Canada. Credits also include film, television, commercials, and industrials.',
          bio2: 'She currently teaches at Broadway Dance Center and Steps on Broadway. Other teaching credits include Beyond The Stars Dance Convention, Phoenix Tap Fest, OKC Tap Fest, Gregg Russell\'s Tap Into the Network, Tradition In Tap, and The Rockette Experience© at Radio City Music Hall.',
          bio3: 'In 2011, Denise was invited to speak at the TEDx Detroit Conference about her contributions to the cultural landscape in Detroit, including founding and producing Motor City Tap Fest and founding the Detroit Tap Repertory.',
          bio4: 'In 2014, she was awarded a prestigious MaTilDa Award from her alma mater, Oakland University, for Alumni Achievement in Dance.'
        },
        { name: 'modal2',
          id: 'claudia',
          src: './static/faculty_claudia-rahardjanoto.jpg',
          alt: 'Music Hall',
          bio1: 'Denise Caston was a Radio City Rockette for 10 years and toured nationally with the Tony Award winning musical, Crazy For You. Denise has also had the honor of performing the choreography of Savion Glover at a showcase in New York City. She performed on tour in Australia, dancing all over the continent in Elvis to the Max. Her choreography has been seen in many productions in which she performed, including shows at Caesars Windsor in Ontario, Canada. Credits also include film, television, commercials, and industrials.',
          bio2: 'She currently teaches at Broadway Dance Center and Steps on Broadway. Other teaching credits include Beyond The Stars Dance Convention, Phoenix Tap Fest, OKC Tap Fest, Gregg Russell\'s Tap Into the Network, Tradition In Tap, and The Rockette Experience© at Radio City Music Hall.',
          bio3: 'In 2011, Denise was invited to speak at the TEDx Detroit Conference about her contributions to the cultural landscape in Detroit, including founding and producing Motor City Tap Fest and founding the Detroit Tap Repertory.',
          bio4: 'In 2014, she was awarded a prestigious MaTilDa Award from her alma mater, Oakland University, for Alumni Achievement in Dance.'
        }]
    }
  }
}
</script> 