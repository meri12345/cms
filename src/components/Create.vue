<template>
    <form>
  <div class="form-group">
    <label >Name
    <input type="text" class="form-control" v-model="name">
    </label>
  </div>
    <div class="form-group">
    <label>Type
    <select class="form-control" name="type" v-model="type">
        <option v-for="type in getTypes" :key="type">{{type}}</option>
    </select>
    </label>
  </div>
  <div  v-for="el in getProducts" :key="el">
    <label >{{el}}
    <input type="checkbox" :value="el" v-model="food">
    </label>
  </div>
  <div class="form-group">
    <label>Price Range
    <select class="form-control" name="type" v-model="priceRange">
        <option v-for="price in getPrices" :key="price">{{price}}</option>
    </select>
    </label>
  </div>
  <div class="form-group">
    <label>Description:
    <textarea name="desc" cols="30" rows="3" class="form-control" v-model="desc"></textarea>
    </label>
  </div>
  <div class="form-group">
    <label >URL:
    <input type="text" class="form-control" v-model="pic">
    </label>
  </div>
  <button type="submit" @click.prevent="addPlace" class="btn btn-success">Submit</button>
</form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getTypes','getProducts','getPrices'])
    },
    data(){
        return{
            name:'',
            type:'Fast Food',
            food:[],
            priceRange:'Cheap',
            desc:'',
            pic:''
        }
    },
    methods:{
        addPlace(){
            const obj={
                name:this.name,
                type:this.type,
                food:this.food,
                priceRange:this.priceRange,
                desc:this.desc,
                pic:this.pic
            }
            this.$store.dispatch('addPlace',obj)
            this.$router.push({path:'/'})
        }
    }
}
</script>