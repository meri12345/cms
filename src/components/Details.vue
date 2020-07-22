<template>
    <div class="jumbotron">
  <h1 class="display-4">{{getOne[0].name}}</h1>
  <p class="lead">{{getOne[0].desc}}</p>
  <hr class="my-4">
  <h3>MENU</h3>
  <ul class="list-group">
      <li class="list-group-item list-group-item-action list-group-item-dark" v-for="food in getOne[0].food" :key="food">
          {{food.toUpperCase()}}
          </li>
  </ul>
 <hr class="my-4">
  <p class="lead">
    <router-link tag="a" to="/" class="btn btn-primary btn-lg" href="#" role="button">Homepage</router-link>
  </p>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getRestaurants']),
        getOne(){
            return this.getRestaurants.filter(el=>{
                return el.name==this.$route.params.name
            })
        }
    }
}
</script>