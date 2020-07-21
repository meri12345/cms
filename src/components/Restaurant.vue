<template>
<div class="col-sm-4">
<div class="card" style="width: 18rem;">
  <img src="../assets/kfc.jpg" class="card-img-top" alt="#404">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Check menu</a>
  </div>
</div>
</div>
    
</template>

<script>
export default {
    props:['name']
}
</script>