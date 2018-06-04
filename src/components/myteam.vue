<template>
	<div>
	<router-link v-for="item in items"
                 v-if="item"
                 :to="{ name: 'Item', params:{id: item.id}}"
                 :key="item.id.toString()"
                 class="flag">
                 <div class="country">
                 <template v-if="1 <= item.id && item.id <= 114">
                <img width="230px" height="150px" v-lazy="'https://www.cryptosports.top/img/flag'+item.id+'.jpg'">
              </template>
              
            <div class="cardtext" >
              
                    <h1>{{$t(item.nickname)}}</h1>
                    <p>{{$t('Owner')}} : {{String(item.owner).slice(2,7).toUpperCase()}}<br />{{$t('Price')}} : <span style="color:#ff0000;">{{toDisplayedPrice(item.price).slice(0,7)}} ETH<br/>
                	

                    </span><br />
                   
  					
                    </p>


                </div>
</div>

     </router-link>

</div>
</template>

<script>


import { buyItem, toReadablePrice, } from '../api.js';
export default {
	name: 'ateam',
	props: ['teamIds'],

  data: () => ({}),

  computed: {
    items() {

      return this.teamIds.map((id) => {
        const item = this.$store.state.items[id];
        return item || { id };
      });
    },

  },

  methods: {
    
    

    toDisplayedPrice(priceInWei) {
      const readable = toReadablePrice(priceInWei);
      return `${readable.price} ${readable.unit}`;
    },

    toDisplayedAd(id) {
      const ad = this.$store.state.ads[id];
      if (ad && ad.length >= 45) {
        return `${ad.slice(0, 44)} ...`;
      }
      return ad;
    },


    


},

  created() {},

  watch: {
    teamIds(newItemIds) {
      newItemIds.forEach((itemId) => {
        this.$store.dispatch('FETCH_ITEM', itemId);
        this.$store.dispatch('FETCH_AD', itemId);
      });
    },
  },
};
</script>



<style scoped>
.country {background-color: #fff; margin-right: 10px; width: 230px; float: left; margin-top: 50px; border: 1px solid #e5e5e5 !important; box-shadow: 0 3px 10px 4px rgba(0,0,0,0.04);}
.card {width: 200px; height: 300px; margin-left: 30px; float: left; text-align: left; margin-bottom: 40px;}
.cardtext {color: #fff; -webkit-text-stroke: 0.5px #d9d9d9; width: 200px; height: 200px;padding:0px 10px; text-align:left;}

.country h1 {height: 90px; vertical-align: middle; font-size: 28px;padding-top: 20px; color: #000; }
.country p {bottom: 10px;color: #000; }
.flag {float: left;}


</style>