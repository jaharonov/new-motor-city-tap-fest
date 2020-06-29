<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
          <div id="faculty">
      <b-row class="pt-5">
          <h1><strong>2020 Confirmed Faculty</strong></h1>
          
      </b-row>
      <b-row>
          <p>Click on a faculty member to view their bio.</p>
      </b-row>
      <b-row>
      <b-col lg="3" class="p-3" v-for="image in images" :key="image.id">
       
  <!-- Using modifiers -->
  <b-img class="fac" v-b-modal="image.name" :src="image.src" :alt="image.alt" fluid/>
  <!-- Using value -->

  <!-- the modal -->
  <b-modal :id="image.name">
    <b-img :src="image.src" fluid class="p-3 "/>
    <span class="text-justify mx-auto" v-html="image.bio"></span>
    <!-- <span v-html="image.bio2"></span>
    <span v-html="image.bio3"></span>
    <span v-html="image.bio4"></span> -->
    <!-- <p class="text-justify">{{image.bio1}}</p>
    <p class="text-justify">{{image.bio2}}</p>
    <p class="text-justify">{{image.bio3}}</p>
    <p class="text-justify">{{image.bio4}}</p> -->
  </b-modal>
    <strong>{{image.name}}</strong>
    </b-col>    
    </b-row>
      <b-row p-5></b-row>
        </div>
  </b-container>
</template>
<style>
.fac {
  height: 275px;
  width: auto;
}
</style>
<script>
export default {
  name: '',
  data () {
    return {
      images: [
        // { src: './static/Old-Main-WSU.jpg', alt: 'Old Main building Wayne State University' },
        { name: 'Dormeshia',
          id: 'dormeshia',
          src: './static/faculty_dormeshia.jpg',
          alt: 'Photo of Dormeshia',
          bio: `<p>Dormeshia’s career includes acclaimed runs on Broadway and off-Broadway in shows such as <i>Black and Blue</i>, the Tony Award Winning <i>Bring In
Da’Noise, Bring In Da’Funk</i>, International Tour of <i>Bring in Da’Noise, Bring in Da’Funk</i> (dance captain/principal dancer/understudy to the lead role), and
<i>Imagine Tap!</i> (featured
soloist). Other
performances include the national tour of <i>Wild
Woman Blues</i> and Debbie Allen’s <i>SAMMY</i> (the
life and times of Sammy Davis Jr.). Film credits
include <i>TAP</i> with Gregory Hines, Spike Lee's
<i>Bamboozled</i> (Assistant Choreographer), and
<i>The Rodgers and Hart Story: Thou Swell, Thou
Witty</i>. Choreography credits include Michael
Jackson's music video <i>Rock My World</i>, <i>Apollo
Club Harlem</i> (tap choreography) and the
<i>Sophisticated Ladies</i> which is featured weekly 
at the world famous Cotton
Club in NYC.</p><p> She was spotlighted in a commercial for Tops and featured on MTV’s hit television series <i>MADE</i>. Most recently Dormeshia debuted her new
project And <i>Still You Must
Swing</i> at Jacobs Pillow for a
successful 1-week sold out
run along with co-creators
Jason Samuels Smith, Derick
K. Grant, Camille A. Brown
and Musical Director Allison Miller. Excerpts from the project has also
been performed in LA and Vancouver with other dates coming up. She
was also featured at the Freedom Sounds Festival launching the first
Smithsonian African-American Museum in the US this year. Dormeshia
has been and continues to be revered as one of the most dynamic
performers in the industry today.</p>`
        },
        { name: 'Gregg Russell',
          id: 'gregg_russell',
          src: './static/faculty_gregg-russell.jpg',
          alt: 'Photo of Gregg Russell',
          bio: `<p>Gregg is an Emmy nominated choreographer and has worked with such stars as: Bette Midler, Gene Kelly, The Nicholas Brothers, Michael Jackson, 
          Gregory Hines, and Kenny Ortega. He directed a commercial for Carvel Ice Cream, and has also performed with numerous music artists: Reba McEntire, Sugar 
          Ray, The B-52‘s, Jason Mraz.</p>
          <p>Gregg recently danced in a Volkswagon national commercial portraying Donald O’conner, and performed on ABC’s “Dancing with the Stars”. He also performed 
          and choreographed on the TV shows “Mobbed”, “America’s Got Talent”, and “Live to Dance” hosted by Paula Abdul. He most recently performed at Madison Square 
          Garden’s home opener for the New York Knicks, choreographed for the Industry Dance Awards in Los Angeles and danced on the 2014 Latin Grammy Awards. He currently 
          is hosting/producing “Tap Into the Network” intensives, channeling 7 different cities throughout the U.S. 
          (<a href="http://www.tapintothenetwork.com" target="_blank">www.tapintothenetwork.com</a>), directing his tap company Tap Sounds Underground into their 16th season, 
          and choreographing for the Industry Dance Awards in Los Angeles.</p>`
        },
        { name: 'Sam Weber',
          id: 'sam_weber',
          src: './static/faculty_sam-weber.jpg',
          alt: 'Photo of Sam Weber',
          bio: `<p>Sam Weber is an award winning artist who has gained a global reputation in the world of tap dance and is in demand internationally 
          as a performer, master teacher and choreographer. A protege of tap master Stan Kahn in San Francisco, he was a principal dancer and choreographer 
          with the Jazz Tap Ensemble from 1986 to 2009 and received acclaim at home and abroad touring with the company. He was the first tap dancer to receive 
          New York’s “Bessie” award, presented in recognition of outstanding artistic achievement. He has appeared at international tap festivals since the 
          first Colorado Tap Festival in 1986 and has taught and performed with such legendary tap masters as Charles “Honi” Coles, Jimmy Slyde, Steve Condos, 
          Buster Brown, Gregory Hines and the Nicholas Brothers. Sam is one of the few tap dancers in the world who performs Morton Gould’s “Tap Dance Concerto.” 
          He is also the recipient of numerous tap dance awards, including the Legacy Award from the Third Coast Rhythm Project, the Giant Steps Award from the 
          San Francisco Tap Festival and the Juba Award from the Chicago Human Rhythm Project. He has taught at UCLA, Cal State U. Fullerton, Cal State U., L.A. 
          and San Francisco State University. He teaches regular classes at ODC School and City Dance School in San Francisco and at Stagebridge in Oakland.</p>`
        },
        { name: 'Ray Hesselink',
          id: 'ray_hesselink',
          src: './static/faculty_ray-hesselink.jpg',
          alt: 'Photo of Ray Hesselink',
          bio: `<p>Ray Hesselink is a Director/Choreographer living and working in New York City. 
          Ray has presented choreography at various festivals and venues around NYC. 
          Ray specializes in creating character driven choreography and excels at comedic storytelling through dance. 
          Ray loves to make people laugh! As a dance instructor, Ray has had the privilege to help train the children who performed in Broadway's Billy Elliot: The Musical. 
          Ray is on Faculty at Juilliard, Broadway Dance Center and STEPS on Broadway in NYC. He also coaches actors privately. 
          Ray holds a B.A. from the School of Theater at UCLA.</p>`
        },
        { name: 'Dewitt Fleming',
          id: 'dewitt_fleming',
          src: './static/faculty_dewitt-fleming.jpg',
          alt: 'Photo of Dewitt Fleming',
          bio: `<p>
          DeWitt Fleming Jr from Emmy Award winning HBO Tv Series BOARDWALK EMPIRE, World Renown Cirque Du Soliel, and Grammy Award
          winning show Riverdance is excited to be teaching at the Motor City Tap Festival!!! DeWitt Fleming Jr. is an acclaimed tap
          dancer, and has performed and taught throughout the world. He has danced as a soloist with Grammy award winning artist such
          as Wynton Marsalis, Bobby Mcferrin, Marvin Hamlisch, and Christian McBride to name a few. New York Times says he is, “a non
          stop source of rhythmic variety and surprise….sparks seem to fly from those shoes!” DeWitt has taught at NYU, Queens College,
          Limerick College in Ireland, Duke Ellington School of the Arts, Harlem School of the Arts, and various Festivals and Studios
          around the world including Broadway Dance Center in NYC where he teaches regularly. Choreography: Boardwalk Empire season
          4 (HBO), the off Bway Musical An Evening with Phyllis Hyman, Dorothy the Musical, Signature Theater’s Jelly’s Last Jam(Assistant
          Choreographer), The Aspen Jazz festival, The Alpine Theater Project, Lincoln Center JALC, NYU's Grad School Theater Program,
          and The New Jersey Tap Dance Ensemble. Tours: Riverdance(Lead Tapper), Cirque Du Soliel’s Banana Shpeel(Ensemble, featured
          tapper). Off- Bwy stage credits include: Cotton Club Parade(Lead/Nicholas Brother), Dance Bojangles Dance(Bojangles), Pearl
          (Bill Bailey), Tribute to Tap Legends(himself). Regional: Signature Theater’s Jelly’s Last Jam( Featured ensemble U/S Jelly)
          and Scottsboro Boys(Ozie/Ruby), Alliance Theater’s Sophisticated Ladies(Lead), Finnegan's Farewell (Tyrone). TV/Film: Boardwalk
          Empire, Smash, Limitless, How to be Single. DeWitt is proud to be a Capezio athlete. For more
          info visit:
          <a href="http://www.dewittflemingjr.com" target="_blank">www.dewittflemingjr.com</a>
          </p>
          <iframe src="https://www.youtube.com/embed/gzYR667hQ2Q" frameborder="0" allow="autoplay; encrypted-media"
          allowfullscreen></iframe>`
        },
        { name: 'Jenefer Miller',
          id: 'jenefer_miller',
          src: './static/faculty_jenefer-miller.jpg',
          alt: 'Photo of Jenefer Miller',
          bio: `<p>Jenefer is a native of Detroit and has been performing, teaching, directing, and choreographing professionally for over 25 years. 
          She holds a BA in the Performing Arts from Oakland University and a MAEd from the University of Phoenix. She is the co-founder of Tap 24.7, 
          and appeared on stage with Scuff’d Up, Especially Tap Chicago, Dance Chicago, Detroit Tap Festival, Sesame Street Live, and was featured 
          on TV by Your Life A to Z and Phoenix 3TV. Jen has worked with legends such as Savion Glover, Ben Vereen, Debbie Allen, Jimmy Slyde, 
          Dianne Walker, Barbara Duffy, Professor Robert Reed, and Heather Cornell, and the Nicholas Brothers. Directing and choreographic credits 
          include: American College Dance Festival, Tap 24.7, 13 the Musical, Hairspray, Seven Brides for Seven Brothers, My Fair Lady, Fiddler on the Roof, 
          How to Succeed, Seussical the Musical, and many more. Faculty credits include the Motor City Tap Fest, The St. Louis Tap Festival, Circle City 
          Tap Fest, The Las Vegas Tap Festival, Nexus Dance Conventions, Tap Into the Network, and more.</p>
          <p>Recently, Jenefer was awarded prestigious Oakland University MaTilDa Award for Alumni Lifetime Achievement in Dance, was a finalist for the 
          Ahwatukee Chamber’s Educational Mentor of the Year and Phoenix Best Teachers, and has won numerous inspirational awards including one from former 
          Governor John Engler of Michigan. </p>
          <p>Founder of JMill Productions, Jenefer produces Just West of Broadway and The Phoenix Tap Festival.  For more information visit 
          <a href="http//:www.justwestofbroadway.com" target="_blank">www.justwestofbroadway.com! Follow Jenefer on Instagram @jenk360, Twitter @JMillP, 
          and like my Facebook @JMillProductions and @jwobaz.</p>`
        },
        { name: 'Kelsey Rose Young',
          id: 'kelsey_rose_young',
          src: './static/faculty_kelsey-rose-young.jpg',
          alt: 'Photo of Kelsey Rose Young',
          bio: `<p>Kelsey Rose Young is a performer, teacher, and choreographer based in Detroit, Michigan. Kelsey is on faculty with Showstopper Dance Convention, 
          Fuzion Dance Camp, and Motor City Tap Fest. She has recently taught at the Big Apple Tap Festival and the Phoenix Tap Festival.</p>
          <p>In 2017 she started the Wing It Tap Intensive which travels throughout the country with numerous top instructors. She is the current 
          director and lead choreographer for the pre-professional tap company – Detroit Tap Repertory, as well as a member of Shelby Kaufman’s tap company, 
          G.L.Y.D.E. and Suzy Guarino- Hall’s company, TAP 24.7.</p>
          <p>Kelsey has performed with the Detroit Symphony Orchestra as part of the DSO Educational Series and was a guest speaker at the Moving With Detroit seminar for dance educators.
          In 2015, she was a contestant on the FOX Network's So You Think You Can Dance - Season 12, and season 14.
          In 2018, Kelsey traveled to Germany to compete in the IDO World Tap Championships. It’s there that her 3 pieces placed 4th and 5th places in the World. She also came in 2nd for the World’s Battle 
          of the Feet.</p>
          <p>She has had the privilege of studying under and performing alongside many of today’s most respected tap dancers and legends including Arthur Duncan, 
          Ardie Bryant, Denise Caston, Gregg Russell, Chloe Arnold, Sarah Reich, Chris Broughton, Jenefer Miller, Suzy Guarino-Hall, and Dianne Walker.</p>
          <p>As a choreographer, Kelsey draws from her training and range of experiences as a singer and dancer to create a style that is intricate, gritty, passionate, and entertaining. 
          Her pieces have received many awards and accolades across the country and she is quickly becoming one of the Midwest’s premier tap choreographers.</p>
          <p>Kelsey is a member of Cecchetti Council of America and has also studied and competed in ballroom dancing. She works independently as a choreographer for students throughout the Nation. 
          Over the years, Kelsey has worked with Jay Sean, the Jonas Brothers, Debbie Gibson, and Radio Disney. She has performed in the Detroit, Macy’s and Chicago Thanksgiving Day Parades, at the Detroit Jazz Festival, and at TedX Detroit. 
          She most recently has performed and choreographed a half time show for the NBA’s Detroit Pistons.</p>
          <a href="http://www.kelseyroserocks.com" target="_blank">www.kelseyroserocks.com</a>
          <iframe src="https://www.youtube.com/embed/zR-sy4960WQ" frameborder="0" allowfullscreen></iframe>`
        },
        { name: 'Suzy Guarino-Hall',
          id: 'suzy_guarino',
          src: './static/faculty_suzy-guarino.jpg',
          alt: 'Photo of Suzy Guarino',
          bio: `<p>Suzy Guarino-Hall has been busy in the dance and entertainment business for more than 20 years. 
          Originally from Chicago, she now resides in Phoenix AZ. She has appeared in print work, industrial films, 
          and numerous commercials for companies such as Mc Donald’s, Osco Drugs, Six Flags, Cox Communications, 
          American Express and Westcor Shopping Centers.  Suzy was also a spokesperson for several companies 
          such as Sedona Patio and Leather, and Trucks Only.</p>
          <p>Currently, she is doing spots for Home TV and Appliance, Utah Honda, Carson Dodge, and Tonkin Gresham 
          Honda. She has also done extensive work for television both as talent and as a choreographer. 
          Her choreography can be seen in commercials for the WB for such TV shows as “Friends” and “The Simpson’s.” 
          Suzy choreographed the opening “dance-off” for the finale of KTVK’s “Gimme the Mike.”  On camera, she was 
          part of the WB Six Pak where she was a spokesperson for the television station and has done TV commercials 
          and live television remotes, which included co-hosting several episodes of “Uncovered.”</p>
          <p>In the dance field, Suzy is a master tap teacher and choreographer. Suzy started her dance training in 
          Chicago and studied at Gus Giordano and Lou Conte.  She has trained with some of the best master tap 
          teachers in the country including Jason Samuels Smith, Mark Goodman, Gregg Russell, Dianne Walker, 
          Mark Mendonca and many others.  Suzy has taught tap on the convention circuit for Dance Educator’s of 
          America, Focus Dance Conventions, Star Systems, Mark Goodman’s Totally Tap, Dance RAW and N-House 
          Productions.</p>
          <p>This fall, Suzy will be touring with The In10sive workshops with Tap Unplugged. She is also a regional 
          and national dance competition adjudicator for Spotlight Dance Cup, In10sity Dance and Star Systems. 
          She has done choreography for several benefit shows for theJuvenile Diabetes, Caitlin Robb Foundation 
          and Mercedes Benz. She’s the owner of a tap production company calledRhythm Essence Productions.  
          Her tap group, Tap 24.7, has done numerous guest performances for different events and concerts, 
          as well as several tap festivals.</p>
          <p>She enjoys teaching around the country as a master tap teacher to many studios, and inspiring tap 
          students of all ages. Her choreography is rhythmic, energetic and cutting edge while mixing in modern music. 
          She excels as a teacher, understanding many levels and breaking down steps and technique that is easy to 
          understand.  Suzy teaches in Phoenix at Bender Performing Arts and does tap choreography for their company, 
          Dance Motion. </p>`
        },
        { name: 'Maud Arnold',
          id: 'maud_arnold',
          src: './static/faculty_maud-arnold.jpg',
          alt: 'Photo of Maud Arnold',
          bio: `<p>Known as one of “Tap’s Leading Ladies” and cover girl for Dance Spirit magazine’s Tap issue, Maud Arnold is a member of Syncopated Ladies and performed in their sold-out full-length concerts in NYC, Los Angeles, DC, Vancouver, and Dubai. 
                 Maud most recently was seen performing with Pharrell Williams and N.E.R.D on The Ellen Show and appeared on ABC's Good Morning America and at Essence Fest in New Orleans after Syncopated Ladies' video covering Beyoncé’s Formation, went viral. 
                 Beyoncé shared the video on all of her social media and then hired the Syncopated Ladies to perform at her Ivy Park active wear clothing line launch at TopShop, London.</p>
                 <p>Maud has quickly become a sought after teacher, judge and performer worldwide. Mentored and trained by Debbie Allen, Maud has taught at Debbie Allen Dance Academy 
                 in Los Angeles and Allen’s Dance Institute in Texas. 
                 Further to teaching in the USA, Maud has taught tap dancing and Afro-Funk in Dubai, Brazil, Japan, Spain, United Kingdom, Croatia, Ukraine and Russia.</p>
                 <p>Maud’s other Television Credits Include: <i>BET Experience: 106 and Park</i>, <i>The Late Late Show With James Corden</i>, HBO’s <i>Boardwalk Empire</i>, <i>Switched at Birth</i>, 
                 <i>Secret Talents of the Stars</i> as a featured dancer with Mya, <i>The Today Show</i> and Syncopated Ladies winning Season 11 of FOX’s <i>So You Think You Can Dance: Dance 
                 Crew Battle</i>. Maud can be seen in national commercials and print ads for Toyota, GAP and CANTU and has worked with Beyoncé on several commercials and music videos.</p>
                 <p>Maud is the co-director and producer of the critically acclaimed DC Tap Festival, pioneering new experiences for dancers and artists worldwide and with her sister Chloé 
                 Arnold they were recognized by the US House of Representatives as arts preservers and ambassadors.</p>
                 <p>Maud is also a female entrepreneur that holds a degree from Columbia University. Further to teaching, she oversees Chloe and Maud Productions and their many entities including their clothing lines: 
                 I LOVE TAP and UniLove as well as their tap dance workshops and after school programs.</p>
                 <p>Maud exudes her passion for tap dancing with her high energy, fun and action-packed dancing.</p>
                 <p>For more information: <a href="https://www.maudarnold.com/" target="_blank">www.maudarnold.net</a>.</p>
                    <iframe src="https://www.youtube.com/embed/defiAaVw8Jw" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
             </div>`
        },
        { name: 'Shelby Kaufman',
          id: 'shelby_kaufman',
          src: './static/faculty_shelby-kaufman.jpg',
          alt: 'Photo of Shelby Kaufman',
          bio: `<p><i>"Shelby's choreography is fabulous and she's a triple threat in the theatre.
          She is a thinker and she can write. She can write her own plays, her own musicals, her own 
          everything... She's a wonderful storyteller and I'm sure she's gonna write a whole bunch of 
          stuff that's gonna merit as well as her dancing."<br>
          Dr. Harold 'Stumpy' Cromer</i></p>
          <p>Shelby Kaufman, originally from Michigan, has been trained in a variety of dance styles since the age of 5. After moving to New York, she began dancing as a member of the legendary Brenda Bufalino's 'New' 
          American Tap Dance Orchestra, and world-renowned tap teacher Germaine Salsberg's company 'Les Femmes'. She has assisted and frequently guest taught for Salsberg at Broadway Dance Center, The American Tap 
          Dance Foundation, LIU Brooklyn, and CAP 21, and has been on faculty of Steps on Broadway, Motor City Tap Fest, and Peridance Capezio Center as well. Shelby founded and currently runs two companies of her own; 
          'Mazel Toes,' comprised of professional Jewish hoofers in New York, and the Great Lakes Youth Dance Ensemble (GLYDE), based in Michigan. She acts as the Artistic Director and Choreographer for both companies.</p>
          <p>Off Broadway, Shelby assisted Gail Pennington Crutchfield on the choreography of 'Freckleface the Musical', and acted as the SDC observer for three-time Emmy nominated choreographer Mandy Moore on 
          'Nobody Loves You' at Second Stage Theatre. She also frequently assisted the late tap legend Dr. Harold 'Stumpy' Cromer both in choreography and master classes, has become Chloe Arnold's dance captain for 
          a number of projects on the East Coast, and was the assistant to NBC SMASH's Emmy Award winning choreographer, Joshua Bergasse, for his musical theatre choreography showcase at City Center Studios. Additionally, 
          Shelby's choreography has been featured multiple times in 
          the annual Tap City 'Main Event,' New York City 'Tap Extravaganza,' and Motor City 'Motor City Soles,' as well as 'Tappy Holidays,' 'Band of Gypsies' and the first 'Young Choreographer's Festival.' </p>
          <p>Shelby has made television appearances tapping on both Sesame Street and The Steve Harvey Show. Other notable venues include the Apollo Theatre, Lincoln Center, Jacob's Pillow, Symphony Space, The George 
          Street Playhouse, The Duke Ellington Theatre, and Detroit Orchestra Hall.</p>`
        },
        { name: 'Denise Caston',
          id: 'denise_caston',
          src: './static/faculty_denise-caston.jpg',
          alt: 'Photo of Denise Caston',
          bio: `<p>Denise Caston was a Radio City Rockette for 10 years and toured nationally with the Tony Award winning musical, Crazy For
          You. Denise has also had the honor of performing the choreography of Savion Glover at a showcase in New York City. She performed
          on tour in Australia, dancing all over the continent in Elvis to the Max. Her choreography has been seen in many productions
          in which she performed, including shows at Caesars Windsor in Ontario, Canada. Credits also include film, television, commercials,
          and industrials.</p>
          <p>She was on the faculty at Broadway Dance Center and Steps on Broadway in NYC, and is thrilled to be launching Tap Dance Detroit. Other teaching credits include Debbie Allen Dance Academy Summer Intensive, Gregg Russell's Tap Into the Network, Big Apple Tap Festival, and The Rockette Experience© at Radio City Music Hall.</p>
          <p>In 2011, Denise was invited to speak at the TEDx Detroit Conference about her contributions to the cultural landscape in
          Detroit, including founding and producing Motor City Tap Fest and founding the Detroit Tap Repertory.</p>
          <p>In 2014, she was awarded a prestigious MaTilDa Award from her alma mater, Oakland University, for Alumni Achievement in Dance.</p>`
        }]
    }
  }
}
</script> 