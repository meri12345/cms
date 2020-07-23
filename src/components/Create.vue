<template>
    <form class="float">
  <div class="form-group" >
    <div :class="{invalid:$v.name.$error}">
    <label >Name:
     <input type="text" @input="$v.name.$touch()" class="form-control" v-model="name" required>
    </label>  
      <p class="err" v-if=$v.name.$error>This field is required</p>
    </div>
   
  </div>
    <div class="form-group">
    <label>Type:
    <select class="form-control" name="type" v-model="type">
        <option v-for="type in getTypes" :key="type">{{type}}</option>
    </select>
    </label>
    <p class="info" v-if="food.length==0">**Have to select at least 1 product**</p>
  </div>
  <div  class="form group" v-for="el in getProducts" :key="el">
    <label >{{el}}
    <input type="checkbox" :value="el" v-model="food">
    </label>
  </div>
  <hr>
  <div class="form-group">
    <label>Price Range
    <select class="form-control" name="type" v-model="priceRange">
        <option v-for="price in getPrices" :key="price">{{price}}</option>
    </select>
    </label>
  </div>
  <div class="form-group">
    <label>Description:
    <textarea name="desc" cols="30" rows="3" @input="$v.desc.$touch()" class="form-control" v-model="desc"></textarea>
     <p class="err" v-if=$v.desc.$error>This field is required</p>
    </label>
  </div>
  <div class="form-group">
    <div :class="{invalid: $v.url.$error}">
      <label >URL:
    <input type="text" @input="$v.url.$touch()" class="form-control" v-model="url">
     <p class="err" v-if=$v.url.$error>This field is required</p>
    </label></div>  
  </div>
  <button type="submit" :disabled="$v.$invalid || food.length==0" @click.prevent="addPlace" class="btn btn-success">Submit</button>
</form>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
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
            url:''
        }
    },
    validations:{
        name:{
          required
        },
        desc:{
          required
        },
        url:{
          required
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
                pic:this.url
            }
            this.$store.dispatch('addPlace',obj)
            this.$store.dispatch('reset')
            this.$router.push({path:'/'})
        }
    }
}
</script>

<style scoped>
.err{
  color:red
}

.invalid input{
  background-color: salmon;
}

.info{
  color:green;
  font-weight: 600;
}

.float{
  border: 2px solid #eee;
  box-shadow: 2px 3px 4px grey;
  width:50%;
  margin:auto;
  padding:50px;
}
</style>