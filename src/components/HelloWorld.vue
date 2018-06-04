<template>
  <div class="hello">
    
    <p>{{total}}</p>

  </div>
</template>

<script>
import { getTotal ,getItemIds } from '../api';

export default {
  name: 'HelloWorld',
  data () {
    return {
      itemIds: [],
      total: null,
    }
  },

  async created(){
    this.total = await getTotal();
    const itemIds = await getItemIds(0, this.total);
    this.itemIds = itemIds;
  },

  methods:{
   
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
