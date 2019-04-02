<template>

  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>Individual Donations and Sponsorship</strong></h1>
      </b-row>
      
      <b-row class="pt-5 text-justify">
          <b-col lg="5">
    <h4>Sponsorship Level</h4>
     <b-table  hover :items="items" :striped="striped" :bordered="bordered"></b-table>
      </b-col>
        <b-col lg="7">
           <p>The Motor City Tap Fest is entering its 12th year of bringing world-class tap dance to the heart of Detroit, and because of your donations, we’ve been able to extend 
            opportunities for young dancers to attend who could not otherwise afford the tuition. This year, we continue to provide an invaluable experience for dancers from across the US and abroad to come together and gain knowledge from world-renowned tap dancers. The faculty goes above and beyond to inspire both aspiring dancers and dance educators. In its inaugural year, there were 50 attendees at Motor City Tap Fest. In 2017, there were over 450 attendees in classes and an additional 650 in the audience at Motor City Soles. Motor City Tap Fest needs your help to keep bringing tap dance to the heart of Detroit each year! All donations are greatly appreciated, and in return we will list you on our website and promotional materials. 
            For all donations of $5 or over per month (or a one-time gift of over $30) you will receive 1 free ticket for Motor City Soles at Music Hall (more tickets for larger donations).</p>
            <p><strong>Motor City Tap Fest is a 501c3 non-profit organization and your gift will be tax deductible to the extent fully permitted by law.</strong></p>

      </b-col>
      </b-row>
      
      <b-row class="pt-3 text-justify">
          <h2>Why support Motor City Tap Fest?</h2>
           <ul class="small">
              <li>•Provide scholarships to aspiring young dancers in need of financial assistance</li><br/>
              <li>•Enrich cultural events in Detroit and throughout Southeastern Michigan</li><br/>
              <li>•Foster arts education and exposure to those in underserved communities who would not otherwise have this opportunity</li>
          </ul>
          <p class="large">In return for your support, Motor City Dance Productions, Inc. will dedicate a scholarship in the name of your business, plus:</p>
      </b-row>
      <b-row class="pt-1 text-justify">
           <ul class="small">
              <li>•Overall naming rights and exclusivity (platinum sponsorship)</li><br/>
              <li>•Naming rights to an event(s) within the festival (gold sponsorship)</li><br/>
              <li>•Naming rights to an event-based award (silver sponsorship)</li><br/>
              <li>•Naming rights to a promotion or contest on the event website and social media (bronze sponsorship)</li><br/>
              <li>•Event tickets and apparel (ALL sponsors)</li><br/>
              <li>•Blocks of tickets to Motor City Soles (platinum, gold, silver and bronze sponsors)</li><br/>
              <li>•Access to discounts, inclusion in media releases and advertising in event programs is contingent upon the sponsorship level</li>

          </ul>
      
  <div class="post">
    <div class="loading" v-if="loading">
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>

      </b-row>
        <!-- <div id='product-component-1543170251824'></div> -->
      <b-row class="p-1 pt-5">
        <div id='collection-component-2f36a03cad5'></div>
        <!-- <div id="product"></div> -->
      </b-row>
      <b-row p-5></b-row>     
  </b-container>
</template>
<script type="javascript">
const items = [
  { level: 'Bronze', amount: '$1000' },
  { level: 'Silver', amount: '$3000' },
  { level: 'Gold', amount: '$5000' },
  { level: 'Platinum', amount: '$10000' }
]
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
          domain: 'overtaps.myshopify.com',
          storefrontAccessToken: '244fc4d27a412190862e1ff0232cb6d0',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: 91279523951,
            node: document.getElementById('collection-component-2f36a03cad5'),
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
          "margin-right": "10",
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
    
    