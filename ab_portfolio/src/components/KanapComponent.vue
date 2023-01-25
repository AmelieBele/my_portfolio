<template>    
  <div class="container">
    <div class="project">
      <img src="../assets/images/kanap/kanap1.jpg"/>
      <div class="text-project">
        <p class="title">Kanap</p>
        <p class="see-project"><button @click.prevent="kanap">Voir mon projet <i class="fa-solid fa-arrow-right"></i> </button></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'KanapComponent',
  methods:{
    kanap(){
      this.$router.push('/Kanap')
    }
  }
}

</script>

<style lang="scss" scoped>
  .container {
    width: 40%;
    text-align: center;
  }
  img{
    width: 100%;
    border-radius: 30px 30px 0px 0px;
  }
  .project{
    border-radius: 30px;
    background-color: white;
  }
  p{
    background-color: white;
    color: #700817;
  }
  button{
    background-color: white;
    color: #700817;
    border-style:none;
    cursor: pointer;
    margin-bottom:10px;
    margin-top: 15px;
    border-radius: 0px 0px 30px 30px;
  }
  .title{
    font-weight:600;
    margin-top: 33px;
  }
  .see-project{
    border-radius: 0px 0px 30px 30px;
    color: #700817;
  }
  i{
    background-color: white;
    margin-left: 5px;
    color: #700817;
    
  }
  @media only screen and (max-width: 763px){
    .container{
      width: 85%;
      text-align: center;
    }
  }
</style>
