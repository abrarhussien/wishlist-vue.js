<template>
    <div >
      <nav class="navbar navbar-light bg-light justify-content-between">
        <div class="container">
          <router-link to="/" class="navbar-brand">online shoping</router-link> 
           <router-link class="btn btn-outline-success my-2 my-sm-0" to="/wichlist">wich list</router-link>


        </div>
      </nav>
    </div>
</template>

<script>
import {books} from "../books.js"
import Wichlist from './Wichlist.vue';

export default {
  name: 'navbar',
  components: {
    Wichlist, 
  },
  data: () => ({
        }),
        methods: {
          switchRoute(newRoute) {
            this.$emit('changeRoute',newRoute)
            
          },
        },
}
</script>

<style>
ul{
    list-style: none;
}
.less{
    color: rgb(0, 84, 103);
}
.more{
    color: rgb(78, 42, 0);
}
.navbar-brand{
    cursor: pointer;
}
.image-height{
    height: 50px;
}
.line-height{
    line-height: 50px;
}
.min{
    min-height: 500px;
}


</style>
