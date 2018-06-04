<template>
  <div style="margin-top:30px;">
     <div class="clearfloat"></div>
    <section class="hero " >
      <div class="hero-body">
        
          <h1 class="title">
          </h1>
          <h2 class="subtitle" style="font-size:28px; color:#e8375e;">
            {{$t('User')}}: {{address}}
          </h2>
       
      </div>
    </section>

    <div class="tabs">
     
        <h3 class="is-active" style="font-size:24px; color:#fd792f;">
          {{$t('My Country Team')}}<br>
        </h3>
   
        <div class="notification is-warning">
                
                <strong>Edit your Team Slogan by clicking your team card!</strong>
              </div>
    </div>
    <div class="tabs container main-container">
<aTeam :teamIds='teamIds' />
    </div>
   

  </div>
</template>

<script>






import aTeam from '../components/myteam.vue';
import { getItemsOf } from '../api.js';

export default {
  name: 'User',
  components: {
    aTeam,
  },
  data: () => ({
    teamIds: [],
  }),

  computed: {
    address() {
      return this.$route.params.address.toUpperCase();
    },
    me() {
      return this.$store.state.me;
    },
  },
  async created() {
    this.teamIds = await getItemsOf(this.$route.params.address);

  },

  watch: {},

  methods: {
    

  },
};
</script>
<style scoped>
.clearfloat{clear:both} ;
.title{ width: 700px; }
.user-info-wrapper {
  border-radius: 5px;
}
.tabs { width: 1000px; margin: 0 auto; }
.tabs a {float: left;}
.flag{float: left;}
</style>

