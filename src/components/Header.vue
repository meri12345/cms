<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">APP </a>
    <form class="form-inline my-2 my-lg-0">
      <input @input="setSearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
    </form>
  
</nav>
</template>

<script>
export default {
    data(){
        return{
            search:""
        }
    },
    computed:{
        types(){
            return this.$store.getters.getTypes
        }
    },
    methods:{
        setSearch(event){
            this.$store.dispatch('setState',event.target.value);
        }
    }
}
</script>