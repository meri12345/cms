<template>
    <div class=container>

<button @click="navigate" id="back" to="/" class="btn btn-success">HOMEPAGE</button>
<router-link tag="button"  to="/admin/create" class="btn btn-success">CREATE NEW</router-link>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Actions</th>
    </tr>

  </thead>
  <tbody>
    <tr v-for="place in getUnfiltered" :key="place.name">
      <td>{{place.name}}</td>
      <td>{{place.type}}</td>
      <td><router-link :to="'/admin/edit/'+place.name" tag="button" class="btn btn-primary">Edit</router-link> <button @click="deleteRest(place.name)" class="btn btn-danger">Delete</button></td>
      
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getUnfiltered'])
    },
    methods:{
        deleteRest(name){
            this.$store.dispatch('deleteRest',name)
        },
        navigate(){
            this.$store.dispatch('reset')
            this.$router.push('/')
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

</style>