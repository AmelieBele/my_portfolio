<template>    
  <div class="container">
      <h1><span class="point">form.</span>Me contacter<span class="point">(){</span></h1>
      <p class="text">
        Pour toute question ou proposition professionelle, vous pouvez me contacter par mail :
        <a href="mailto:amelie.benoist@icloud.com">amelie.benoist@icloud.com</a>
      </p>
      <p class="linkedin">
        Ou via <a class="reseaux" href="https://www.linkedin.com/in/amelie-marie-benoist/">LinkedIn</a><span class="point"> }</span>
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
    margin: 150px 70px;
    margin-bottom:100px;
  }
  span{
      color: #700817;
      font-family: 'La belle Aurore', sans-serif;
      font-size:1rem;
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
