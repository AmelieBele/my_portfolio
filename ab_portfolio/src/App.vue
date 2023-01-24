<template>
  <div>
    <HeaderComponent/>
    <div class="container">
      <router-view/>   
    </div>
  </div>  
</template>


<script>

import HeaderComponent from "./components/HeaderComponent.vue"
export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style lang="scss">

  *{
    margin:0;
    background-color:#16171d;
    font-family: "Poppins", sans-serif;
    color: white;
  }

</style>
