<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <router-link v-if="getAuth" tag="button" to="/admin" class="navbar-brand btn btn-danger" href="#">Admin mode</router-link>
            <form class="form-inline my-2 my-lg-0">
                <input @input="setSearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </form>
        </nav>
    <label for="type">Choose Type:</label>
<select id="type" class="custom-select" v-model="type">
    <option v-for="type in getTypes" :key="type">{{type}}</option>
    <option value="">All</option> 
</select>
    <label for="price">Choose Price Range:</label>
<select id="price" class="custom-select" v-model="price">
    <option v-for="price in getPrices" :key="price">{{price}}</option>
    <option value="">All</option> 
</select>
<div v-for="product in getProducts[type]" :key="product" class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" :id="product" :value="product" v-model="products">
  <label class="form-check-label" :for="product">{{product}}</label>
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
      return {
        type:'',
        price:'',
        products:[]
      }  
    },
    computed:{
...mapGetters(['getType',
                'getProducts',
                'getTypes',
                'getPrices',
                'getAuth'])
    },
    watch:{
        type(){
            this.products=[];
            this.$store.dispatch('setType',this.type)
        },
        price(){
            this.$store.dispatch('setPrice',this.price)
        },
        products(){
            this.$store.dispatch('setProducts',this.products)
        }
    },
    methods:{
        setSearch(event){
            this.$store.dispatch('setState',event.target.value);
        },
        setType(value){
           this.$store.dispatch('setType',value)
        }
    }

}
</script>