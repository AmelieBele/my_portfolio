<template>
    <div class="container">
      <p class="return" @click.prevent="back"><i class="fa-solid fa-arrow-left arrow"></i>Retour à mes projets</p>
      <h1 class="title"><span>.</span>Booki</h1>
      <div class="all">
        <div class="picture">
          <div class="little">
            <img class="little1" src="../assets/images/booki/booki2.jpg" alt="photo du site booki"/>
            <img class="little1" src="../assets/images/booki/booki1.jpg" alt="photo du site booki"/>
          </div>
          <div class="big">
            <img class="big1" src="../assets/images/booki/Bookie_phone1.jpg" alt="photo du site booki"/>
            <img class="big1 big2" src="../assets/images/booki/booki_phone.jpg" alt="photo du site booki"/>
          </div>
        </div>
        <div class="text">
          <h3><span>.</span>Description du projet</h3>
          <p class="logo">Premier projet à développer, je devais reproduire à l'identique une maquette fournie à l'aide d'HTML et CSS seulement. 
            Je devais aussi respecter un cahier des charges ainsi que réaliser un projet totalement responsive.  </p>
          <h3><span>.</span>Technologies utilisées</h3>
          <p class="tech"><i class="fa-brands fa-html5 logo"></i><i class="fa-brands fa-css3-alt logo"></i></p>
          <h3><span>.</span>Lien du code</h3>
          <button><a href="https://github.com/AmelieBele/Booki"><i class="fa-brands fa-github logo"></i></a></button>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  
  import FooterComponent from "../components/FooterComponent.vue"

  export default {
    name: 'BookiPage',
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
  