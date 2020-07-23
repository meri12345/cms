<template>
   <form>
  <div class="form-group">
    <label >Name
    <input type="text" class="form-control" v-model="rest.name">
    </label>
  </div>
    <div class="form-group">
    <label>Type
    <select  name="type" v-model="rest.type">
        <option :value="type" v-for="type in getTypes" :key="type">{{type}}</option>
    </select>
    </label>
  </div>
  <div class="form-group" v-for="el in getProducts" :key="el">
    <label >{{el}}
    <input type="checkbox" :value="el" v-model="rest.food">
    </label>
  </div>
  <div class="form-group">
    <label>Price Range
    <select name="price" v-model="rest.priceRange">
        <option v-for="price in getPrices" :key="price">{{price}}</option>
    </select>
    </label>
  </div>
  <div class="form-group">
    <label>Description:
    <textarea name="desc" cols="30" rows="3" v-model="rest.desc"></textarea>
    </label>
  </div>
  <div class="form-group">
    <label >URL
    <input type="text" class="form-control" v-model="rest.pic">
    </label>
  </div>
  <button type="submit" @click.prevent="edit" class="btn btn-success">Submit</button>
</form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getTypes','getProducts','getPrices','getUnfiltered','getRestaurants']),
        rest(){
            return {...this.getUnfiltered[this.$route.params.index]}
        }
   },
    data(){
        return{
            name:'',
            type:'',
            food:[],
            priceRange:'Cheap',
            desc:'',
            pic:''
        }
    },
    methods:{
        edit(){
            const obj = {
                data:this.rest,
                index:this.$route.params.index
            }
            this.$store.dispatch('updateList',obj);
            this.$store.dispatch('reset')
            this.$router.push('/')
        },
        printaj(){
          console.log("event")
        }
    }
}
</script>