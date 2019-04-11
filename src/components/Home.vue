<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row></b-row>
      <b-row class="justify-content-md-center">
        <b-col lg="12">
  
        <b-img src="./static/mctf-postcard-2019.png" fluid-grow/>
        
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col md="12" lg="6" class="p-3">
          <!-- <b-col class="p-5">
          <b-button class="buttons" size="lg" variant="outline-success">
            VIEW SCHEDULE + REGISTER!
          </b-button>
          </b-col> -->
          <!-- <b-card rounded v-bind:src="'./static/mctf-2019.jpg'" left blank-color="#FFB5DA" alt="img" class="my-3" id="savedate">
            <p class="card-text"></p>
          </b-card> -->
          
          <b-card rounded center
          img-src="./static/motor-city-soles.png"
          img-alt="Motor City Soles 2019"
          img-top
          tag="article"
          border-variant="success"
          class="mx-auto"
          id="savedate">
          <!-- <h4 class="card-text"><strong>August 7-10, 2019</strong></h4> -->
          <!-- <p class="card-text" 
          text-align="justify"
          text-justify="inter-word">
          Detroit, Michigan<br/>
          </p> -->
          <div>
          
  <!-- Using value -->
  <b-btn class="buttons" variant="success" href="https://www.axs.com/events/371283/motor-city-soles-tickets">BUY TICKETS!</b-btn>

  <!-- the modal -->
  <!-- <b-modal id="myModal">
    Stay tuned for the 2019 MCTF schedule and registration!
  </b-modal> -->
          </div>
        </b-card>
        </b-col>
        <b-col md="12" lg="6" class="p-3 pr-5">
        <!-- <b-col> -->
          <b-embed type="iframe"
           aspect="16by9"
           class="mx-auto"
           src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz"
           allowfullscreen
  ></b-embed>
          <!-- <iframe fluid-grow src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz" frameborder="0" allowfullscreen></iframe> -->
        <!-- </b-col> -->
        <!-- <b-col class="hometext my-3"> -->
          <div class="pt-5">
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
          <b-btn class="buttons" variant="success" v-bind:to="'schedreg'">VIEW SCHEDULE<br/> & REGISTER!</b-btn>
          <!-- <div id='collection-component-2f36a03cad5'></div> -->
        <!-- </b-col> -->
        <!-- <b-col class="pb-1 pl-5 mx-auto justify-content-lg-center"> -->
          <!-- <div id='product-component-b49577ad243'></div> -->
          <!-- <div id='product-component-50f75dd9f31'></div> -->
          <!-- </b-col> -->
      </div> 
      </b-col> 
        
      </b-row>
      <b-row class="pb-1 pl-5 mx-auto justify-content-center">
        <b-col sm="4"></b-col>
        <b-col sm="4"><div id='product-component-b49577ad243'></div></b-col>
        <b-col sm="4"></b-col>
      </b-row>
      <b-row p-5></b-row>
        <h2 class="pt-5"><strong>thank you to our 2019 sponsors!</strong></h2>
      
<!-- </div> -->
<!-- <div id='product-component-1546634990047'></div> -->
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
<script type="javascript">
  export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'overtaps.myshopify.com',
          storefrontAccessToken: '244fc4d27a412190862e1ff0232cb6d0',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [2056816001135],
            node: document.getElementById('product-component-b49577ad243'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#f26c22",
        "font-family": "Roboto Condensed, sans-serif",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "description": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#f26c22",
        "font-family": "Roboto Condensed, sans-serif",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
        "font-weight": "bold"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#f26c22",
        "font-family": "Roboto Condensed, sans-serif",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "description": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed",
      "Roboto Condensed"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#f26c22",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto Condensed"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Roboto Condensed, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto Condensed",
      "Roboto Condensed"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();  
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
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
