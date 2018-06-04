<!--Show all football nation teams list-->

<template>

  <div class="cer columns"><div class="clearfloat"></div> <div class="column is-8 ">
<div class="bor" 
       v-html="$t('Country_'+item.id+'')">
  </div>
           
        </div>
        <div class="mright column">
            <h1>{{$t(item.nickname)}}</h1>
            <p>
   {{$t('Owner')}} : {{String(item.owner).slice(2,7).toUpperCase()}}<br/>
  {{$t('Price')}} : <span>{{toDisplayedPrice(item.price).slice(0,7)}} </span>ETH
  </p>
  <button class="button is-danger is-rounded"
                      @click="onBuy()">{{$t('Buyit')}}！！</button>  
  <!--第一个显示出说有solgan，第二个取得MetaMask的地址-->
  {{$t('Slogan')}} : <br>
  {{solganshow(item.id)}}
  {{address}}  
    <div id="demo1"></div>
    <div v-if="item.owner == addre">
   <button id="editbu" class="button is-small" style="width:150px; margin-top:10px;" @click="editslogan()">Edit Slogan</button>
</div>
<div v-else>

</div>
    <div id="editing" style="display:none;"><textarea class="textarea" id="newslogan" placeholder="You can type new slogan in 100 character!"></textarea>
<button id="updatebu" class="button is-danger " style="width:150px; margin-top:10px;" @click="updateslogan(item.id)">Save Slogan</button>&nbsp; &nbsp;<button id="updatebu" class="button is-outlined" style="width:100px; margin-top:10px;" @click="cancel()">Cancel</button>
    </div>


  

           
        <!--<p>{{$t('nextPrice')}} : {{toDisplayedPrice(item.nextPrice).slice(0,7)}} ETH<br></p>-->
        </div>

<div class="clearfloat"></div>
      </div>


</template>

<script>


import { buyItem, toReadablePrice, } from '../api.js';

export default {
  name: 'Team-Detail',

  data () {
    return {
      addre: 'a',
      objectId: [
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
      { id: 'Cryptosports.top' },
    ],
    }
  },

  computed: {

    address() {

      // Check if Web3 has been injected by the browser (MetaMask).
      // (since 'web3' is global, we need to use 'window')
      if (window.web3 && window.web3.currentProvider.isMetaMask) {
        window.web3.eth.getAccounts((error, accounts) => {
          this.addre = accounts[0]
         
          // Do whatever you need to.
          
        });
      } else {
        console.log('MetaMask account not detected :(');
      }
    },
    itemId() {
      return this.$route.params.id;
    },
    me() {
      return this.$store.state.me || {};
    },
    item() {
      return this.$store.state.items[this.itemId];
    },
    ad() {
      return this.$store.state.ads[this.itemId];
    },
  },
  async created() {
    this.$store.dispatch('FETCH_ITEM', this.itemId);
  },

  watch: {},

  methods: {
    onBuy() {
      
      const buyPrice = this.item.price
      buyItem(this.itemId, buyPrice)
        .then(() => {
          alert(this.$t('BUY_SUCCESS_MSG'));
          setNextPrice(this.itemId, buyPrice);
        })
        .catch((e) => {
          
          console.log(e);
        });
    },
    editslogan() {
      document.getElementById("demo1").style.display="none";
      document.getElementById("editing").style.display="";
      document.getElementById("editbu").style.display="none";
    },
    toDisplayedPrice(priceInWei) {
      const readable = toReadablePrice(priceInWei);
      return `${readable.price} ${readable.unit}`;
    },

    solganshow(itemid){
         var request = new XMLHttpRequest();
         request.open('GET', 'https://leancloud.cn/1.1/classes/Slogan');
         request.setRequestHeader('Content-Type', 'application/json');
         request.setRequestHeader('X-LC-Id', 'QTbJX3zkR4Ng539HWTFeanbn-gzGzoHsz');
         request.setRequestHeader('X-LC-Key', 'FSlli4Jc2xrUo01afY04hq8K');

            request.onreadystatechange = function () { 
               
              if (this.readyState === 4) {
                   

                   var allText = JSON.parse(this.responseText);
                   document.getElementById("demo1").innerHTML = allText.results[itemid].slogan.slice(0,100);
                   //console.log(allText.results[itemid].slogan);
                 
              }
            };
            request.send();
    },
    updateslogan(itemid){
      
         var request = new XMLHttpRequest();
         request.open('PUT', `https://leancloud.cn/1.1/classes/Slogan/${this.objectId[itemid].id}`);
         request.setRequestHeader('Content-Type', 'application/json');
         request.setRequestHeader('X-LC-Id', 'QTbJX3zkR4Ng539HWTFeanbn-gzGzoHsz');
         request.setRequestHeader('X-LC-Key', 'FSlli4Jc2xrUo01afY04hq8K');

            request.onreadystatechange = function () { 
               
              if (this.readyState === 4) {
                   

                  console.log('Status:', this.status);
                  console.log('Headers:', this.getAllResponseHeaders());
                  console.log('Body:', this.responseText);

                   //var allText = JSON.parse(this.responseText);
                   //document.getElementById("demo1").innerHTML =allText.slogan;
                   //console.log(allText.slogan);
                 
              }
            };
var body = {
  'slogan': document.getElementById('newslogan').value,
};
            request.send(JSON.stringify(body));  
            alert("Success to updated slogan!");

            location.reload();

    },
    cancel(){
      document.getElementById("demo1").style.display="";
            document.getElementById("editing").style.display="none";
            document.getElementById("editbu").style.display="";
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cer{ width: 100%; min-width: 1000px; }
.bor {padding:10px;border: 1px solid #e5e5e5 !important; box-shadow: 0 3px 10px 4px rgba(0,0,0,0.04); margin: 0 20px;}
.mright{padding: 20px; text-align: left; color: #2c3e50; margin-top: -19px;}
.mright h1 {font-size: 64px; margin: 40px 0; margin-top: 10px;}
.mright p {font-size: 18px;}
.mright p span {font-size: 48px; color: #e8375e;}
.button {width: 100%; margin: 40px 0 ;height: 50px; font-size: 18px;}
.edits { width: 100px; float: left; height: 30px;}
#demo1{font-size: 18px; color: #e8375e;}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.clearfloat{clear:both;} 
</style>
