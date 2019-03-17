<template>
  <div class="app">
    <div>
      <b-row class="mx-auto">
        <h1><strong>Auditions will be held on 3/24/2019</strong></h1>
      </b-row>
      <b-row class="mx-auto pt-3">
        <h4>The auditions schedule is:</h4>
        <p class="text-justify">

        <b-list-group>
<b-list-group-item><strong>11am-12:15pm</strong> - Master class with Denise Caston or Jenefer Miller (12 and under will be with Jenefer), where dancers learn the combinations for the audition. This class is <strong>NOT</strong> required for auditions. This class has a $30 fee. Please register
for this class by clicking the "Add to Cart" button located below!<br/>
</b-list-group-item> 
<b-list-group-item><strong>12:30pm-2pm</strong> - Auditions for all ages.</b-list-group-item>
<b-list-group-item><strong>2pm-4pm</strong> - Auditions for Conservatory only, which will include presenting a solo, improvising, and an interview. These dancers must bring a headshot and resume.</b-list-group-item>
        </b-list-group>
        </p>
        <p class="text-left">
          Auditions will be held at: <br/>
          <strong>The Annex 
          320 N Main St. 
          Plymouth, MI 48170</strong>
        </p>
      </b-row>
      <b-row class="mx-auto">
      <b-col cols="lg-4"></b-col>
      <b-col cols="lg-4">
  <b-btn class="buttons" variant="success" v-b-modal="'myModal'">HOW TO<br/> PREPARE!</b-btn>
</b-col>
      <b-col cols="lg-4"></b-col>

  <!-- the modal -->
  <b-modal id="myModal">
<h2> PREPARE FOR YOUR AUDITION</h2> 
<p class="text-justify"><strong>Written Statement</strong> - In 500 words or less, tell us where you are studying, your career/dance goals, and how MCTF Conservatory or Future Tap Stars will benefit you.<br/>
<strong>Resumé</strong> (Conservatory applicants only) - If you need guidance on this, let me know.<br/>
<strong>Headshot and dance shot</strong> - The dance shot is optional.<br/>
<strong>Letter of recommendation for applicants 17 and under</strong> - This should be a letter from one current teacher, describing technique and performance artistry, work ethic, stamina for demanding schedules, and class etiquette.<br/>
<strong>Prepare a one-minute solo</strong> - This can be your own choreography, someone else's choreography, or a classic piece of choreography, anything that shows your style, technique, and performance quality.<br/>
<strong>You will be asked to improvise</strong> - Be prepared to demonstrate your improv skills.</p>
  </b-modal>
</b-row>
      <b-row class="mx-auto pt-3 pb-3">
        <p class="text-justify">
          Fill out the registration form below for all auditions! Indicate if you are <strong>only</strong> 
          auditioning for a scholarship. If you are applying for a scholarship <strong>and</strong> a conservatory, be sure to 
          indicate which conservatory you are applying for. If you are applying for a conservatory AND/OR a scholarship, be sure to indicate which conservatory you are applying for.
        </p>
      </b-row>
      <b-row class="mx-auto pb-2 justify-content-lg-center">
        <p class="text-center">If you can't see the registration form below, please click &nbsp;<a href="https://docs.google.com/forms/d/e/1FAIpQLSf_uPZe0N-Gz5axRNgbatwubZLp1EWA4IyQ0ELBzFXGHQ1gBg/viewform?usp=sf_link" target="_blank">here</a>!</p>
      </b-row>
      <b-row class="mx-auto">
        <b-col cols="lg-8">
        <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_uPZe0N-Gz5axRNgbatwubZLp1EWA4IyQ0ELBzFXGHQ1gBg/viewform?embedded=true" class="embed-responsive-item" height="auto">Loading...</iframe>
                    </div>
        </b-col>
        <b-col cols="lg-4" class="pt-5 text-justify">
        <!-- <div><p>Master class with Denise Caston or Jenefer Miller (12 and under will be with Jenefer), where dancers learn the combinations for the audition. This class is <strong>NOT</strong> required for auditions.</p></div> -->
        <div id='product-component-d4167fe645e' class="pt-2"></div>
        </b-col>
      </b-row>
</div>
  
  </div> 
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
            id: [2088415723631],
            node: document.getElementById('product-component-d4167fe645e'),
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
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#f26c22",
        "font-family": "Roboto, sans-serif",
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
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#da611f"
        },
        ":focus": {
          "background-color": "#da611f"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "description": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto",
      "Roboto"
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
      "Roboto"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Roboto",
      "Roboto"
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

</style>


