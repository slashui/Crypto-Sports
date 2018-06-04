    <template>
          <header>

<div class="topnav">
        <div class="nav-l">
            <div class="logo"><img src="../img/logo.png"></div>
            
<router-link class="navbar-item"
                     :to="{ name: 'Home'}">
          {{$t('Cryptofootball')}}
        </router-link>
                <router-link 
                     class="navbar-item"
                     :to="{name: 'User', params:{address: me.address} }">
          {{$t('MyTeam')}}
        </router-link>
        <router-link class="navbar-item"
                     :to="{ name: 'schedule'}">
          {{$t('Schedule')}}
        </router-link>
        <router-link class="navbar-item"
                     :to="{ name: 'FAQ'}">
          {{$t('FAQs')}}
        </router-link>

            </ul>
            </div>
            <div class="nav-r">
              {{network.name}}
        </div>
</div>
<div class="clearfloat"></div> 
  </header>

</template>

<script>
import { getNetwork} from '../api.js';

export default {
  name: 'Header',
  data() {
    return {
      cardtesthoverIndex:null,
      navhoverIndex:null,
      network: {},
    };
  },
  async created() {
    
    const network = await getNetwork();
    if (!network) {
      alert('Unknown network!');
      return;
    }
    this.network = network;
    if (!network.contract) {
      alert(`Unsupported ${network.name}`);
    }

  },
  methods:{
    
    mouseEnter(index) {
        this.cardtesthoverIndex = index;

    },
    mouseLeave(){
        this.cardtesthoverIndex = null;

    },navEnter(index) {


        this.navhoverIndex = index;
    },
    navLeave(){

        this.navhoverIndex = null;
    }

},computed: {
    
    me() {
      return this.$store.state.me || {};
    }
  },
};
</script>

<style>
header {height: 131px;}
.hello {top: 0px; font-size:12px;}
.topnav {height: 100px; min-width: 1000px; background: -webkit-gradient(linear, 0 0, 0 bottom, from(#fd792f), to(#e8375e));}
.nav-l {float: left; margin: 20px 40px; display: block;}
.logo {float: left; margin-right: 30px;}
.navbar-item { font-size:18px;float: left;margin-top: 26px; color: #ffffff;  font-family: 'Helvetica';}
.nav li {width: 100px; font-size: 16px; color: #fff;list-style: none; float: left; padding-top: 10px; height: 45px; margin-left: 20px;}
.navhover { background-color: rgba(255, 255,255, 0.59); border-radius: 20px; color: #000;}
.nav-r {float: right; margin-right: 40px; margin-top: 52px; display: block;color: #ffffff; font-size: 18px;font-family: 'Helvetica';}
.clearfloat{clear:both;margin-bottom: -19px;} 
</style>
