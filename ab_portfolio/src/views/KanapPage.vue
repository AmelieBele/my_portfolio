<template>
  <div class="container">
    <p class="return" @click.prevent="back"><i class="fa-solid fa-arrow-left arrow"></i>Retour à mes projets</p>
    <h1 class="title"><span>.</span>Kanap</h1>
    <div class="all">
      <div class="picture">
        <div class="little">
          <img class="little1" src="../assets/images/kanap/kanap1.jpg" alt="photo du site kanap"/>
          <img class="little1" src="../assets/images/kanap/kanap2.jpg" alt="photo du site kanap"/>
          <img class="little1" src="../assets/images/kanap/kanap3.jpg" alt="photo du site kanap"/>
          <img class="little1" src="../assets/images/kanap/kanap4.jpg" alt="photo du site kanap"/>
        </div>
      </div>
      <div class="text">
        <h3><span>.</span>Description du projet</h3>
        <p class="logo">Premier pas avec Javascript pour ce projet. Pour ce site, tout le visuel était réaliser. Je devais utiliser Javascript 
          pour faire apparaitre toute les informations souhaités, créer les formules pour faire le total du panier et que celui-ci ce modifie
          à chaque modification etc... </p>
        <h3><span>.</span>Technologies utilisées</h3>
        <p class="tech">
          <i class="fa-brands fa-js logo"></i>
        </p>
        <h3><span>.</span>Lien du code</h3>
        <button><a href="https://github.com/AmelieBele/Kanap-p5"><i class="fa-brands fa-github logo"></i></a></button>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>

import FooterComponent from "../components/FooterComponent.vue"

export default {
  name: 'KanapPage',
  components: {
    FooterComponent,
  },
  methods:{
  back(){
    this.$router.push('/')
  }
}
}
</script>

<style lang="scss" scoped>
  .tech{
    font-size: 50px;
  }
  span{
    color: #700817;
  }
  h1{
    text-align: center;
    font-size: 50px;
  }
  .return{
    margin-left:40px;
    margin-top: 50px;
    font-size: 12px;
    cursor: pointer;
  }
  .arrow{
    margin-right: 10px;
    color: #700817;
  }
  button{
    font-size:50px;
    border-style : none;
  }

  .picture{
    width: 45%;
    margin:auto;
    text-align: center;
  }
  .little{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .little1{
    width: 100%;
    margin-bottom: 20px;
  }
  
  .big{
    display: flex;
    justify-content:space-between;

  }
  .big1{
    width:48.5%;
  }
  .big2{
    margin-left: 20px;
  }
  .text{
    margin-top: 50px;
    text-align: center;

    .logo{
      margin: 50px;
    }
  }
</style>
