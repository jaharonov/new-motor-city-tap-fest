<template>

  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="mx-auto pt-3">
          <h1><strong>Store</strong></h1>
      </b-row>
      <b-row class="mx-auto">
          <h3>COMING SOON!</h3>
      </b-row>
      <!-- <b-row class="text-justify">
          <h2>T-Shirt Preorder</h2><br/>
      </b-row>
      <b-row class="text-justify">
           <p>Preorders have ended for t-shirts. Please purchase at Motor City Tap Fest!</p>
      </b-row>
      <b-row class="p-3 pt-5">
        <b-col lg="4">
            <b-img src="./static/mctf2019_t-shirt-design.png" fluid-grow/>
        </b-col>  
        <b-col lg="4">
           <b-img src="./static/mctf-2019-preorder.jpg" fluid-grow/>
        </b-col>
        <b-col lg="4">
           <b-img src="./static/mctf2019-kids-t-shirt.png" fluid-grow/>
        </b-col>
      </b-row> -->
        <!-- <div id='product-component-1543170251824'></div> -->
      <b-row class="pt-1">
        <!-- <div id='collection-component-54848e827a9'></div> -->
        <!-- <div id="product"></div> -->
      </b-row>
      <b-row p-5></b-row>     
  </b-container>
</template>
<script type="javascript">

  export default {
  data () {
    return {
      items: items,
      striped: true,
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    (function () {
      // var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'motor-city-tap-fest.myshopify.com',
          storefrontAccessToken: '117fccd80a775a170fd38575ce898f1c', 
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: 91803877411,
            node: document.getElementById('collection-component-54848e827a9'),
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
      "quantity": false,
      "img": false,
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-right": "10",
          "margin-bottom": "50px",
          "padding": "50px 25px 25px 25px"
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
      },
      "variantTitle": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "title": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "description": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "price": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Roboto Condensed, sans-serif"
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
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Roboto Condensed"
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
      },
      "variantTitle": {
        "font-family": "Roboto Condensed, sans-serif",
      },
      "title": {
        "font-family": "Roboto Condensed, sans-serif"
      },
      "description": {
        "font-family": "Roboto Condensed, sans-serif",
      },
      "price": {
        "font-family": "Roboto Condensed, sans-serif",
      },
      "compareAt": {
        "font-family": "Roboto Condensed, sans-serif",
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
        "font-family": "Roboto Condensed, sans-serif",
        "background-color": "#f26c22",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
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
      },
      "select": {
        "font-family": "Roboto Condensed, sans-serif",
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
