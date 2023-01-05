<template>    
    <div class="container">
        <h1><span class="point">.</span>Hard Skills</h1>
        <p class="logos">
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-sass"></i>
        </p>
    </div>
</template>

<script>

export default {
  name: 'HardSkillsComponent',

}

</script>

<style lang="scss" scoped>
    .container{

        margin: 70px;
    }
        span{
            color: #700817;
  
        }

        .logos{
            font-size:50px;
            display: flex;
            justify-content: space-around;
            margin-top: 30px;

        }
    
</style>
