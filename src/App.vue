<template>
  <div class="container">
   <app-header></app-header>
   <div class="row"> 
   <app-restaurant v-for="rest in getRestaurants" :key="rest.name" :name="rest.name"></app-restaurant>
   </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Restaurant from './components/Restaurant'
import Header from './components/Header'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters(['getRestaurants'])
  },
  components:{
    appHeader: Header,
    appRestaurant: Restaurant
  }
}
</script>
