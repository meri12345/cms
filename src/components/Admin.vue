<template>
    <div class=container>
<router-link tag="button" id="back" to="/" class="btn btn-secondary">Homepage</router-link>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="place in getRestaurants" :key="place.name">
      <td>{{place.name}}</td>
      <td>{{place.type}}</td>
      <td><button class="btn btn-primary">Edit</button> <button @click="deleteRest(place.name)" class="btn btn-danger">Delete</button></td>
      
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getRestaurants'])
    },
    methods:{
        deleteRest(name){
            this.$store.dispatch('deleteRest',name)
        }
    }
}
</script>

<style scoped>
 .container{
     padding-top:50px;
 }
 tr:hover{
     background-color: #eee;
 }
 .btn{
     float: none;
 }
#back{
    background-color: #eee;
    border-radius: 10%;
    color: black;
    font-size: 20px;
}

</style>