<template>    
    <div class="container">
        <p class="me">
        Bonjour, je suis Amélie Benoist,<br/>
        Développeur web,<br/>
        basée à coté de Tours.<br/>
        Bienvenue sur mon portfolio !
        </p>
        <img src="../assets/images/me.gif"/>
    </div>
</template>

<script>

export default {
  name: 'QuoteComponent',

}

</script>

<style lang="scss" scoped>
  .container{

    display: flex;
    justify-content: space-around;
    align-items: center;
    .me{
      font-size:35px;

      margin-top:100px;
    }
    img{
      width:20%;
      height:20%;
      margin-top:100px;

    }

  };
  

</style>
