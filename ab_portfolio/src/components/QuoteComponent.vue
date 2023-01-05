<template>    
    <div class="container">
        <p class="me">
        Bonjour, je suis Amélie Benoist,<br/>
        Développeur web,<br/>
        basée à Tours.<br/>
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
    margin-bottom:150px;
    .me{
      font-size:35px;
      border-top: ridge  #70081858;
      border-bottom: ridge  #70081858;
      margin-top:100px;
    }
    img{
      width:20%;
      height:20%;
      margin-top:100px;

    }

  };
  

</style>
