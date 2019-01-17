<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">

  </head>
  <b-container class="pt-5">
  <div id="app" variant="transparent">
    <div class="fixed-top">
    <header>
    <b-container class="white-b">
    <b-navbar-brand v-bind:to="'/'" type="success" variant="primary" class="pt-3 px-auto" id="h1-name">MOTOR CITY TAP FEST</b-navbar-brand>  
    </b-container>
    <b-navbar toggleable="lg" type="success" variant="primary" class="nav-text">
  
  <!-- <b-navbar-toggle target="nav_collapse" class="nav-items" id="menu">MENU</b-navbar-toggle> -->
  <!-- <b-navbar-brand href="#" class="mb-5" id="h1-name">Motor City Tap Fest</b-navbar-brand> -->
  <b-navbar-toggle target="nav_collapse" class="nav-items mx-auto" variant="primary" id="menu">MENU</b-navbar-toggle>
  <b-collapse is-nav id="nav_collapse">

    <!-- Center aligned nav items -->
    <b-navbar-nav class="mx-auto m-0">
      <div class="skew">
      <b-nav-item class="nav-items highlight" v-bind:to="'schedreg'">SCHEDULE+<br/> REGISTER</b-nav-item>
      
      </div>
      <div class="skew">
      <b-nav-item class="nav-items highlight" v-bind:to="'give'">GIVE NOW</b-nav-item>
      </div>
      <b-nav-item class="nav-items" v-bind:to="'locaccom'">LOCATION +<br/> ACCOMMODATIONS</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'faculty'">FACULTY</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'mcsoles'">MOTOR CITY<br/>SOLES</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'chorchal'">MCTF CHOREOGRAPHER'S<br/>CHALLENGE</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'partshowcase'">PARTICIPANTS<br/>SHOWCASE</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'auditions'">AUDITIONS</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'scholarships'">SCHOLARSHIPS</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'store'">STORE</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'about'">ABOUT +<br/>CONTACT</b-nav-item>
      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</header>
<div class="row">
<div class="col-3">

   </div>
   <div class="col-3">
         
   </div>
   </div>
 </div>  
 <div class="row p-5"></div>
   
<!-- navbar-1.vue -->
    <router-view></router-view>
    
      <!-- <div class="row fixed-bottom"> -->
      
   
    <footer class="pb-2">
      <br/>
      <b-container class="pb-2">
      <b-navbar toggleable="lg" type="success" variant="primary" class="nav-text">

    <b-navbar-nav class="mx-auto">
      <b-nav-item class="nav-items" v-bind:to="'/'">Home</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'visit'">Visiting Detroit</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'press'">Press</b-nav-item>
    </b-navbar-nav>
  
</b-navbar>
      <a href="https://www.facebook.com/motorcity.tapfest" target="_blank"><b-img :src="'./static/facebook.png'"/></a>
      <a href="https://www.instagram.com/motorcitytapfest/" target="_blank"><b-img :src="'./static/instagram.png'"/></a>
      <a href="https://twitter.com/motorcitytap" target="_blank"><b-img :src="'./static/twitter.png'"/></a>
      <br/>
      </b-container>
       <span>&copy; 2018 Motor City Dance Productions, All Rights Reserved. Website by <a href="http://www.jaharonov.com" target="_blank">J Aharonov</a>.</span>
    </footer>
    <!-- </div> -->
    
    
  

  
</div>
</b-container>
  </html>
</template>


<script type="javascript">
export default {
  name: 'app',
  images: [
        { src: './static/twitter.png', alt: 'Twitter logo' },
        { src: './static/instagram.png', alt: 'Instagram logo' },
        { src: './static/facebook.png', alt: 'Facebook logo' }
  ],
  methods: {
    reload: function() {    
       console.log('what is it loading?')
    }
  }
}
</script>

<style lang="scss">

// @media only screen and (max-device-width: 1024px){
// .navbar-collapse {
//   background-color: white;
// }
// }

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#navname {
  font-size: 1.5rem;
}

#menu {
  color: peru;
  font-family: 'Viga', sans-serif;
}
footer {
  position: absolute; 
  left: 0;
  // bottom: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  font-family: 'Viga', sans-serif;
  color: #f26c22;
  font-size: 80%;

}
#h1-name {
  font-size: 200%;
  // font-family: 'Audiowide', cursive;
  font-family: 'Viga', sans-serif;
  color: #f26c22;
  


}
.skew {
  background-color: yellow;
  // height: 50%;
  // width: auto;
  transform: skew(20deg);
  padding-right: 1px;
  
  // border-radius: 50%;
}
.highlight {
 transform: skew(-20deg);
padding-right: 1px;

 
}
.nav-link {
font-family: 'Viga', sans-serif;
color: #f26c22;
font-size: 80%;
}

.buttons {
  font-family: 'Roboto Condensed', sans-serif;
  align-content: center;
}

.close {
  float: left;
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

</style>

<style>
h1,h2,h3,h4,p {
  font-family: 'Roboto Condensed', sans-serif;


}

strong {
  color: peru;
  text-transform: uppercase;
}

h1, h2, h3, h4 {
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

.white-b {
  background-color: white;
}
</style>

<script type="javascript">
    /*<![CDATA[*/
//     (function () {
//       // var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//       if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//           ShopifyBuyInit();
//         } else {
//           loadScript();

//         }
//       } else {
//         loadScript();
//       }

//       function loadScript() {
//         var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//         var script = document.createElement('script');
//         script.async = true;
//         script.src = scriptURL;
//         (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//         script.onload = ShopifyBuyInit;
//       }

//       function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//           domain: 'overtaps.myshopify.com',
//           storefrontAccessToken: '244fc4d27a412190862e1ff0232cb6d0',
//         });

//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//           ui.createComponent('collection', {
//             id: 91279523951,
//             node: document.getElementById('collection-component-2f36a03cad5'),
//             moneyFormat: '%24%7B%7Bamount%7D%7D',
//             options: {
//   "product": {
//     "variantId": "all",
//     "contents": {
//       "imgWithCarousel": false,
//       "variantTitle": false,
//       "description": false,
//       "buttonWithQuantity": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "calc(33.33333% - 30px)",
//           "margin-left": "30px",
//           "margin-bottom": "50px"
//         }
//       },
//       "button": {
//         "background-color": "#f26c22",
//         "font-family": "Montserrat, sans-serif",
//         ":hover": {
//           "background-color": "#da611f"
//         },
//         ":focus": {
//           "background-color": "#da611f"
//         },
//         "font-weight": "bold"
//       },
//       "variantTitle": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "title": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "description": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "price": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "compareAt": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       }
//     },
//     "googleFonts": [
//       "Montserrat",
//       "Montserrat",
//       "Montserrat",
//       "Montserrat",
//       "Montserrat",
//       "Montserrat"
//     ]
//   },
//   "cart": {
//     "contents": {
//       "button": true
//     },
//     "styles": {
//       "button": {
//         "background-color": "#f26c22",
//         "font-family": "Montserrat, sans-serif",
//         ":hover": {
//           "background-color": "#da611f"
//         },
//         ":focus": {
//           "background-color": "#da611f"
//         },
//         "font-weight": "bold"
//       },
//       "footer": {
//         "background-color": "#ffffff"
//       }
//     },
//     "googleFonts": [
//       "Montserrat"
//     ]
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true,
//       "variantTitle": false,
//       "buttonWithQuantity": true,
//       "button": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       },
//       "button": {
//         "background-color": "#f26c22",
//         "font-family": "Montserrat, sans-serif",
//         ":hover": {
//           "background-color": "#da611f"
//         },
//         ":focus": {
//           "background-color": "#da611f"
//         },
//         "font-weight": "bold"
//       },
//       "variantTitle": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "title": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "description": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "price": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       },
//       "compareAt": {
//         "font-family": "Montserrat, sans-serif",
//         "font-weight": "normal"
//       }
//     },
//     "googleFonts": [
//       "Montserrat",
//       "Montserrat",
//       "Montserrat",
//       "Montserrat",
//       "Montserrat",
//       "Montserrat"
//     ]
//   },
//   "toggle": {
//     "styles": {
//       "toggle": {
//         "font-family": "Montserrat, sans-serif",
//         "background-color": "#f26c22",
//         ":hover": {
//           "background-color": "#da611f"
//         },
//         ":focus": {
//           "background-color": "#da611f"
//         },
//         "font-weight": "bold"
//       }
//     },
//     "googleFonts": [
//       "Montserrat"
//     ]
//   },
//   "option": {
//     "styles": {
//       "label": {
//         "font-family": "Montserrat, sans-serif"
//       },
//       "select": {
//         "font-family": "Montserrat, sans-serif"
//       }
//     },
//     "googleFonts": [
//       "Montserrat",
//       "Montserrat"
//     ]
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-30px"
//         }
//       }
//     }
//   }
// }
//           });
//         });
//       }
//     })();
    
    /*]]>*/
    </script>