<template>
<div class="col-sm-4">
<div class="card" style="width: 18rem;">
  <v-img  height="200"
       :src="url" alt="#404"></v-img>
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">{{desc}}</p>
    <router-link tag="a" :to="'/details/'+name" href="#" class="btn btn-primary">Check menu</router-link>
  </div>
</div>
</div>
    
</template>

<script>

export default {
    props:['name','desc','url']
}
</script>