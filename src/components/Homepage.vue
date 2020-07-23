<template>
<div>
<app-header></app-header>
   <div class="row"> 
   <app-restaurant v-for="rest in list" :url="rest.pic" :key="rest.name" :name="rest.name" :desc="rest.desc"></app-restaurant>
   </div>
</div>   
</template>

<script>
import {mapGetters} from 'vuex';
import Restaurant from './Restaurant'
import Header from './Header'
export default {
  computed:{
    list(){
      return this.$store.getters.getRestaurants
    },
    filters(){
      return this.$store.getters.getFilters
    }
  },
  components:{
    appHeader: Header,
    appRestaurant: Restaurant
  }
}
</script>