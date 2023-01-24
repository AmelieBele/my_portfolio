<template>    
  <div class="container">
      <h1><span class="point">.</span>Me contacter</h1>
      <p class="text">
        Pour toute question ou proposition professionelle, vous pouvez me contacter par mail :
        <a href="mailto:amelie.benoist@icloud.com">amelie.benoist@icloud.com</a>
      </p>
      <p class="linkedin">
        Ou via LinkedIn : <a class="reseaux" href="https://www.linkedin.com/in/amelie-marie-benoist/"><i class="fa-brands fa-linkedin-in"></i></a>
      </p>
  </div>
</template>

<script>

export default {
  name: 'ContactComponent',

}

</script>

<style lang="scss" scoped>
  .container{
    margin: 70px;
    margin-bottom:100px;
  }
  span{
    color: #700817;
  }
  .text{
    margin-top:50px;
  }
  .linkedin{
    margin-top:20px;
  }
  i{
    font-size: 30px;
  }


</style>
