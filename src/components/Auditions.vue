<template>
  <div class="app">
    <div>
      <b-row class="mx-auto pt-5">
        <h1><strong>Auditions for MCTF Conservatory, Future Tap Stars, and Scholarships will be held 2/29/2020, 3/1/2020, and 3/15/2020</strong></h1>
      </b-row>
      <b-row class="mx-auto pt-5">
        <b-col cols="lg-6">
        <h4>February 29, 2020</h4>
        <p class="text-justify">

        <b-list-group>
<b-list-group-item><strong>5:00pm-6:00pm</strong> - This class is <strong>NOT</strong> required for auditions, but is highly recommended. This class has a $25 fee.<br/>
</b-list-group-item> 
<b-list-group-item><strong>5:00pm-7:00pm</strong> - Auditions for all ages.</b-list-group-item>
        </b-list-group>
        </p>
        <h4>March 1, 2020</h4>
        <p class="text-justify">

        <b-list-group>
<b-list-group-item><strong>12:00pm-1:00pm</strong> - Master class where dancers learn the combinations for the audition. This class is <strong>NOT</strong> required for auditions, but is highly recommended. This class has a $25 fee. <br/>
</b-list-group-item> 
<b-list-group-item><strong>12:00pm-3:00pm</strong> - Auditions for all ages.</b-list-group-item>
        </b-list-group>
        </p>
        <h4>March 15, 2020</h4>
        <p class="text-justify">

        <b-list-group>
<b-list-group-item><strong>12:00pm-1:00pm</strong> - Master class where dancers learn the combinations for the audition. This class is <strong>NOT</strong> required for auditions, but is highly recommended. This class has a $25 fee.<br/>
</b-list-group-item> 
<b-list-group-item><strong>12:00pm-3:00pm</strong> - Auditions for all ages.</b-list-group-item>
        </b-list-group>
        </p>
        <p class="text-left">
          Auditions will be held at: <br/>
          <strong><a href="http://www.tapdancedetroit.org">Tap Dance Detroit</a><br/>
          310 Livernois St.<br/> 
          Ferndale, MI 48220</strong>
        </p>
        
        </b-col>
        <!-- <b-col cols="lg-6"></b-col> -->
  
  <!-- the modal -->
  
 
      <b-col cols="lg-6" class="pr-5 pl-5">
        <div id='collection-component-1581350837130' class="auditionDiv"></div></b-col>
</b-row>
  <b-row class="mx-auto p-5 justify-content-lg-center">
    <b-btn class="buttons" variant="success" v-b-modal="'prepareModal'">WHAT TO PREPARE FOR YOUR AUDITION</b-btn>
      <b-modal id="prepareModal" mx-auto p-5 justify-content-left>
        <h2 justify-content-center><strong>WHAT TO PREPARE FOR YOUR AUDITION</strong></h2>
<ul class="text-left">
    <li><b>•Written statement, 1000 words or less, detailing:</b>
    <ul>
      <li>○Who influences you as a performer and your artistic goals</li>
      <li>○Career aspirations and what you are doing to reach them</li>
      <li>○How you see MCTF Conservatory impacting you</li>
    </ul>
  </li>
    <li><b>•Resumé</b></li><br/>
    <li><b>•Headshot</b></li>
    <li><b>•17 and under dancers need a recommendation letter. This should include</b>
      <ul>
        <li>○Technical and artistic ability</li>
        <li>○Ability to participate in a rigorous schedule</li>
        <li>○Responsibility to arrive on time and prepared to rehearsals and performances</li>
      </ul>
</li>
    <li><b>•Scholarship applicants will submit a written statement (500 words or less) describing why financial aid is needed.</b></li>
  </ul>
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
        
        <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSct0-bMPvaGv-KbZVz1GHZDtWNGLBplzXFWv-aqsFE-_qTDHw/viewform?embedded=true" class="embed-responsive-item" height="auto">Loading…</iframe>
                    </div>
        
        <!-- <div><p>Master class with Denise Caston or Jenefer Miller (12 and under will be with Jenefer), where dancers learn the combinations for the audition. This class is <strong>NOT</strong> required for auditions.</p></div> -->
        
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
          domain: 'motor-city-tap-fest.myshopify.com',
      storefrontAccessToken: '117fccd80a775a170fd38575ce898f1c',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
        id: '167239614508',
        node: document.getElementById('collection-component-1581350837130'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false,
      "img": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px",
          "max-height": "200px"
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
.sub {
  background-color: peru;
}


</style>


