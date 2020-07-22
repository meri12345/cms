<template>
<div class="col-sm-4">
<div class="card" style="width: 18rem;">
  <img src="../assets/kfc.jpg" class="card-img-top" alt="#404">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">{{desc}}</p>
    <router-link tag="a" :to="'/details/'+name" href="#" class="btn btn-primary">Check menu</router-link>
  </div>
</div>
</div>
    
</template>

<script>
import VueSimpleImageEditor from 'vue-simple-image-editor'
export default {
    props:['name','desc']
}
</script>