<!--Show all football nation teams list-->

<template>

    
     <div>
      <div v-if="loading" class="loading">
      <img src="https://www.cryptosports.top/img/loading.gif">
    </div>
    <banner/>
     
     <div class="container main-container">
        <aTeam :teamIds='teamIds' />
        <div id="sp" >
          <a href="#/item/1"><div id="1"></div></a>
          <a href="#/item/2"><div id="2"></div></a>
          <a href="#/item/3"><div id="3"></div></a>
          <a href="#/item/4"><div id="4"></div></a>
          <a href="#/item/5"><div id="5"></div></a>
          <a href="#/item/6"><div id="6"></div></a>
          <a href="#/item/7"><div id="7"></div></a>
          <a href="#/item/8"><div id="8"></div></a>
          <a href="#/item/9"><div id="9"></div></a>
          <a href="#/item/10"><div id="10"></div></a>
          <a href="#/item/11"><div id="11"></div></a>
          <a href="#/item/12"><div id="12"></div></a>
          <a href="#/item/13"><div id="13"></div></a>
          <a href="#/item/14"><div id="14"></div></a>
          <a href="#/item/15"><div id="15"></div></a>
          <a href="#/item/16"><div id="16"></div></a>
          <a href="#/item/17"><div id="17"></div></a>
         

        </div>
    </div>
    <div class="clearfloat"></div>
    <div class="howplay" 
       v-html="$t('howplay')">
        
  </div>


    <div class="clearfloat"></div>


  </div>
   
</template>

<script>

var request = new XMLHttpRequest();
var slo = new Array();
request.open('GET', 'https://leancloud.cn/1.1/classes/Slogan');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('X-LC-Id', 'QTbJX3zkR4Ng539HWTFeanbn-gzGzoHsz');
request.setRequestHeader('X-LC-Key', 'FSlli4Jc2xrUo01afY04hq8K');

request.onreadystatechange = function () {
 if (this.readyState === 4) {
    
    for (var i = 17; i >= 1; i--) {
      var allText = JSON.parse(this.responseText);
    
     document.getElementById(i).innerHTML = allText.results[i].slogan.slice(0,40);

    };
   
    
    
  }
};

request.send();

import aTeam from '../components/ateam.vue';
import Banner from '../components/banner.vue';
import { getTotal ,getItemIds } from '../api';

export default {
  name: 'teamlist',
  components:{
    aTeam,
    Banner,
    
  },
  data () {
    return {
      teamIds: [],
      total: null,
      loading:true,
      slogans: [
       
      ]
    }
  },
computed: {
    
    me() {
      return this.$store.state.me || {};
    }
  },
  async created(){
    this.total = await getTotal();
    const teamIds = await getItemIds(0, this.total);
    this.teamIds = teamIds;
    this.$store.dispatch('FETCH_ME');
    this.loading = false;
  },

  methods:{
   
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello { max-width: 1000px; }
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
.clearfloat{clear:both} 
.banner{ height: 200px; background-color: #429b47;box-shadow: inset 0px 13px 20px #13131366; margin-bottom: 20px; 
}
.loading{position: absolute; text-align: center;margin: 0 auto; width: 100%; padding-top: 450px;}
.container {width: 1000px;}
.howplay { width: 1000px; margin:0 auto; }
#sp {position: absolute;}
#sp a {top: 200px;width: 230px; margin-right: 10px; height: 326px; margin-top: 50px; text-align: left; float: left; padding-left:70px; padding-right: 5px; padding-top: 265px;}
</style>
