var NAP = {
  locale: {
    country: 'GB',
    language: 'en',
    channel:'intl',
    currencySymbol: '£',
    currencyCode: 'GBP'
  },
  analytics: {
    tracknonInteraction: function(category, action, label, value){
      console.log('tracknonInteraction',category, action, label, value);
    }
  },
  monitoring: {
    registerPerfMark: function(key) {
      console.log('registerPerfMark', key)
    },
    measurePerfMark: function(category, key, opts){
      console.log('measurePerfMark', category, key, opts);
    },
    registerPerfMetricAndMonitoring: function(category, action, key, data, value) {
      console.log('registerPerfMetricAndMonitoring', category, action, key, data, value);
    }
  },
  myAccount: {
    registerUserDetailListener: function(f, thisArg){f.call(thisArg);}
  },
  apiTools: {
    addSkusToBasket: function(skus, callback) {
      setTimeout(function() {
        callback({
          response: 'OK ' + skus.join(', ')
        });
      }, 1000);
    },
    wishlist: {
      addItem: function(id, callback) {
        setTimeout(function(){
          callback({
            id: '55af6e00e4b03a617e4b3853',
            permissions: {delete: true},
            skuId: '614864-005'
          });
        }, 1000);
      },
      createList: function(callback) {
        callback({
          id: '55af6e00e4b03a617e4b3853',
          name: 'New List',
          shared: false
        });
      }
    }
  },
  device: {
    portrait: function(){return true;},
    landscape: function(){return false;},
  },
  webAnalytics: {
    api: {
      addPageVideo: function(videoObj){console.log('addPageVideo: ', videoObj);},
      addPageFeature: function(feature){console.log('addPageFeature: ', feature);},
      trackEvent: function(){}
    },
    getProducts: function(){},
    getProductsWithSkuData: function(){}
  }
};

var CookieUtil = {
  getCookie: function(){return 'cookieValue';}
};