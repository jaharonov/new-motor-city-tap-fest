<template>

  <!-- <div class="hello"> -->
    <!-- <div class="m-5"> -->
      <b-container class="p-2">
      <b-row class="pt-5">
          <h1><strong>Individual Donations and Sponsorship</strong></h1>
      </b-row>
      <b-row class="pt-3 text-justify">
           <p>The Motor City Tap Fest is entering its 12th year of bringing world-class tap dance to the heart of Detroit, and because of your donations, we’ve been able to extend 
            opportunities for young dancers to attend who could not otherwise afford the tuition. This year, we continue to provide an invaluable experience for dancers from across the US and abroad to come together and gain knowledge from world-renowned tap dancers. The faculty goes above and beyond to inspire both aspiring dancers and dance educators. In its inaugural year, there were 50 attendees at Motor City Tap Fest. In 2017, there were over 450 attendees in classes and an additional 650 in the audience at Motor City Soles. Motor City Tap Fest needs your help to keep bringing tap dance to the heart of Detroit each year! All donations are greatly appreciated, and in return we will list you on our website and promotional materials. 
            For all donations of $5 or over per month (or a one-time gift of over $30) you will receive 1 free ticket for Motor City Soles at Music Hall (more tickets for larger donations).</p>
      </b-row>
      <b-row class="pt-3 text-justify">
          <h2>Why support Motor City Tap Fest?</h2>
           <ul class="small">
              <li>•	Provide scholarships to aspiring young dancers in need of financial assistance</li><br/>
              <li>•	Enrich cultural events in Detroit and throughout Southeastern Michigan</li><br/>
              <li>•	Foster arts education and exposure to those in underserved communities who would not otherwise have this opportunity</li>
          </ul>
          <p class="large">In return for your support, Motor City Dance Productions, Inc. will dedicate a scholarship in the name of your business, plus:</p>
      </b-row>
        <div id='product-component-1543170251824'></div>
      <b-row class="pt-5">
        <div id="product"></div>
      </b-row>
      <b-row p-5></b-row>     
  </b-container>
</template>

<script type="javascript"> 
    
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
            console.log('loading?');
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
        })

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1978502414447],
            node: document.getElementById('product-component-1543170251824'),
            moneyFormat: '${{amount}}',
            options: {"product":{"variantId":"all","width":"240px","contents":{"img":false,"imgWithCarousel":false,"title":false,"variantTitle":false,"price":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"calc(25% - 20px)","margin-left":"20px","margin-bottom":"50px"}}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
          });
        });
      }
    })();
    </script>
    