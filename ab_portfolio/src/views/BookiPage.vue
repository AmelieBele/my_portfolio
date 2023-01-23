<template>
    <div class="container">
      <p class="return"><i class="fa-solid fa-arrow-left"></i>Retour à mes projets</p>
      <h1 class="title">Booki</h1>
      <img src="../assets/images/booki/booki1.jpg"/>
      <img src="../assets/images/booki/booki2.jpg"/>
      <img src="../assets/images/booki/booki_phone.jpg"/>
      <img src="../assets/images/booki/Bookie_phone1.jpg"/>
      <h3>Description du projet</h3>
      <h3>Technologies utilisées</h3>
      <button><a href="https://github.com/AmelieBele/Booki">Lien du code <i class="fa-brands fa-github"></i></a></button>
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
}
  </script>
  
  <style lang="scss" scoped>
    img{
      width: 25%;
    }
    
  </style>
  