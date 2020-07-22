<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Homepage from './components/Homepage'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHomepage:Homepage
  }
}
</script>
