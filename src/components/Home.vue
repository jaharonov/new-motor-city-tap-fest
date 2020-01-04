<template>
  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2 hello">
      <b-row></b-row>
      <b-row class="justify-content-md-center">
        <!-- <b-col lg="12">
  
        <b-img src="./static/mctf-postcard-2019.png" fluid-grow/>
        
        </b-col> -->
      </b-row>
      <b-row class="justify-content-center">
        
        <b-col md="12" lg="6" class="p-3 pr-5">
          <b-img src="./static/mctf2020-save-the-date.png" fluid-grow/>
       
          <div class="pt-5">
          
      </div>
      </b-col> 
      <b-col md="12" lg="6" class="p-3 pl-5 justify-content-center">
      
        <b-embed type="iframe"
           aspect="16by9"
           class="mx-auto"
           src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz"
           allowfullscreen
  ></b-embed>
  <div id='product-component-b49577ad243' class="pt-5 mx-auto"></div>
        </b-col>
        
      </b-row>
      <b-row class="pb-1 pl-5 pr-5 mx-auto justify-content-center">
         <!-- <b-col sm="4"></b-col>
        <b-col sm="4" class="pb-5"><div id='product-component-b49577ad243'></div></b-col>
        <b-col sm="4"></b-col> -->
        <!-- <b-embed type="iframe"
           aspect="16by9"
           class="mx-auto"
           src="https://assets.scrippsdigital.com/cms/videoIframe.html?&host=www.wxyz.com&title=Motor%20City%20Tap%20Fest&uid=52f3c12a645341cb80bee3321b04e8e8&purl=/about-us/as-seen-on/wayne-state-university-to-host-motor-city-tap-fest-august-8-11&story=1&ex=1&s=wxyz"
           allowfullscreen
  ></b-embed> -->
      </b-row>
      
      <b-row p-5></b-row>
        <h2 class="pt-5"><strong>thank you to our 2019 sponsors!</strong></h2>

  <b-row>
<b-col lg="3"></b-col>        
<b-col class="mx-auto pt-5" v-for="image in images" :key="image.id">
<b-img center v-img:name :src="image.src" :alt="image.alt" fluid-grow blank-color="#FFB5DA"/>
</b-col>     
<b-col lg="3"></b-col>        
  
        </b-row>
        <b-container class="pt-3 pb-5">
        <p><strong>MCTF is a 501c3 non-profit organization and all donations are tax deductible.</strong></p>
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
        { id: '', src: './static/logo_energynatldance.png', alt: 'Energy National Dance Logo' },
        { id: 'omara', src: './static/sponsor_omara.png', alt: 'Omara Flooring Logo' }
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
