    <template>
          <Banner >
<div class="banner">
	<div class="bt"><img src="../img/title-test.png"></div>
  
</div>
  </Banner>

</template>

<script>


export default {
  name: 'Header',
  data() {
    return {
     
    };
  },
  methods:{
    

},computed: {
    
    me() {
      return this.$store.state.me || {};
    }
  },
};
</script>

<style>
.banner {width: 100%; background-color: #ff0000;height: 260px; position: 0px; background: url('../img/top-bg.jpg') center; margin-top: -131px;}
.bt {font-size: 58px; font-family: 'Helvetica BoldOblique';color:#fff;padding-top: 120px;}
.likebut {width: 240px; height: 45px; border: 1px #fff solid;display: block; margin: 0 auto; font-size: 24px; padding-top: 3px; border-radius: 10px; color:#fff;}
</style>
